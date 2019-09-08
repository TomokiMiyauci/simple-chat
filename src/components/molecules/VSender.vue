<template>
  <div>
    <v-btn-icon :icon="icon" xlarge @click="post"></v-btn-icon>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { CLEAR, POST_TEXT } from '~/store/post/mutation-types'
import VBtnIcon from '~/components/atoms/VBtnIcon'

export default {
  components: {
    VBtnIcon
  },
  computed: {
    ...mapState('post', ['text']),
    icon() {
      return this.text ? 'mdi-send' : 'mdi-microphone'
    }
  },
  methods: {
    ...mapActions('post', [CLEAR, POST_TEXT]),
    post() {
      if (this.icon === 'mdi-send') {
        this.POST_TEXT()
        this.CLEAR()
      } else if (this.icon === 'mdi-microphone') {
        alert()
      }
    }
  }
}
</script>

<style></style>
