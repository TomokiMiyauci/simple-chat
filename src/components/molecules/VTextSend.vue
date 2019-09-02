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
import { mapActions } from 'vuex'
export default {
  props: {
    tag: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    message: ''
  }),

  methods: {
    ...mapActions('message', ['POST_TEXT']),
    sendMessage() {
      if (!this.message) {
        return
      }
      if (this.tag) {
        this.POST_TEXT({ text: this.message, tag: this.tag })
      } else {
        this.POST_TEXT({ text: this.message })
      }
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    }
  }
}
</script>
