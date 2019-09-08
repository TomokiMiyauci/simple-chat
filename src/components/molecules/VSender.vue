<template>
  <div>
    <v-audio-btm-sht-wrapper v-if="icon === 'mdi-microphone'" />

    <v-btn-icon v-else :icon="icon" xlarge @click="post"></v-btn-icon>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { CLEAR, POST_TEXT } from '~/store/post/mutation-types'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VAudioBtmShtWrapper from '~/components/molecules/VAudioBtmShtWrapper'

export default {
  components: {
    VBtnIcon,
    VAudioBtmShtWrapper
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
      }
    }
  }
}
</script>

<style></style>
