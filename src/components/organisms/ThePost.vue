<template>
  <v-row justify="center" dense align-content="center">
    <v-col cols="auto">
      <v-btn-image :disabled="!isAuth" @onload="sendImage"></v-btn-image>
    </v-col>

    <v-col cols="auto">
      <v-post-tag></v-post-tag>
    </v-col>

    <v-col cols="7" sm="5" md="4" lg="3">
      <v-textarea-customized :text="text" @change="SET"></v-textarea-customized>
    </v-col>

    <v-col cols="auto">
      <v-btn-send-or-mic
        :is-auth="isAuth"
        :text="text"
        @click="post"
      ></v-btn-send-or-mic>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  SET_TEXT,
  SET_IMAGE,
  POST_IMAGE,
  CLEAR,
  POST_TEXT
} from '~/store/post/mutation-types'
import VTextareaCustomized from '~/components/atoms/VTextareaCustomized'
import VBtnImage from '~/components/molecules/VBtnImage'
import VPostTag from '~/components/molecules/VPostTag'
import VBtnSendOrMic from '~/components/molecules/VBtnSendOrMic'

export default {
  components: {
    VTextareaCustomized,
    VBtnImage,
    VPostTag,
    VBtnSendOrMic
  },

  computed: {
    ...mapState('post', ['text']),
    ...mapState('user', ['isAuth'])
  },

  methods: {
    ...mapActions('post', [SET_TEXT, SET_IMAGE, POST_IMAGE, CLEAR, POST_TEXT]),
    ...mapActions('modal', ['SHOW']),

    SET(payload) {
      console.log(payload)
      this.SET_TEXT(payload)
    },

    async sendImage(file) {
      await this.SET_IMAGE(file)
      this.POST_IMAGE()
    },

    post(payload) {
      switch (payload) {
        case 'SEND':
          this.POST_TEXT()
          this.CLEAR()
          break
        case 'MIC':
          if (!this.isAuth) {
            return
          }
          this.SHOW('v-btm-sheet-wrapper')
          break
      }
    }
  }
}
</script>

<style scoped></style>
