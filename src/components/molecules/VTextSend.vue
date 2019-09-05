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
    @click:append-outer="post"
  ></v-textarea>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SET_TEXT, CLEAR, POST_TEXT } from '~/store/post/mutation-types'
export default {
  computed: {
    ...mapState('post', ['text']),
    message: {
      get() {
        return this.text
      },
      set(payload) {
        this.SET_TEXT(payload)
      }
    }
  },

  methods: {
    ...mapActions('post', [SET_TEXT, CLEAR, POST_TEXT]),
    post() {
      this.POST_TEXT()
      this.CLEAR()
    }
  }
}
</script>
