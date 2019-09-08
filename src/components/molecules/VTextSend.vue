<template>
  <v-textarea
    v-model="message"
    filled
    autofocus
    hide-details
    rows="1"
    label="Enter message"
    rounded
    clearable
    clear-icon="mdi-close-circle"
    auto-grow
  ></v-textarea>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { SET_TEXT } from '~/store/post/mutation-types'

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
    ...mapActions('post', [SET_TEXT])
  }
}
</script>
