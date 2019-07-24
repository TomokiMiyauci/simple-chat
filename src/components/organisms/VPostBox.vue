<template>
  <v-text-field
    v-model="message"
    :append-outer-icon="message ? 'mdi-send' : ''"
    :prepend-icon="icon"
    filled
    rounded
    clearable
    label="メッセージを入力"
    type="text"
    @click:append-outer="sendMessage"
    @click:prepend="changeIcon"
    @click:clear="clearMessage"
  />
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data: () => ({
    message: '',
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue'
    ]
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex]
    }
  },

  methods: {
    async sendMessage() {
      const msg = {
        timestamp: new Date(),
        text: this.message
      }
      await firebase
        .firestore()
        .collection('messages')
        .add(msg)
        .then((doc) => this.scrollBottom())
        .catch((error) => console.log(error))
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    }
  }
}
</script>
