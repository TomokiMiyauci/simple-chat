<template>
  <v-textarea
    v-model="message"
    filled
    :append-outer-icon="message ? 'mdi-send' : ''"
    rows="1"
    label="Enter message"
    rounded
    clearable
    clear-icon="mdi-close-circle"
    auto-grow
    @click:append-outer="sendMessage"
  ></v-textarea>
</template>

<script>
import { mapState } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  data: () => ({
    message: ''
  }),

  computed: {
    ...mapState('user', ['id', 'name', 'photoURL'])
  },

  methods: {
    async sendMessage() {
      if (!this.message) {
        return
      }
      const msg = {
        userID: this.id,
        name: this.name,
        text: this.message,
        profilePicUrl: this.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
      await firebase
        .firestore()
        .collection('messages')
        .add(msg)
        .then((doc) => this.scrollBottom())
        .catch((error) => console.log(error))
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    }
  }
}
</script>
