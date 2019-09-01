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
  data: () => ({
    message: ''
  }),

  methods: {
    ...mapActions('message', ['POST_TEXT']),
    async sendMessage() {
      if (!this.message) {
        return
      }
      await this.POST_TEXT({ text: this.message })
      this.clearMessage()
      this.scrollBottom()
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
