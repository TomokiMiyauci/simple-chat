<template>
  <v-card>
    <v-app-bar-close-btn @beforeClose="close">
      <v-toolbar-title>Cropper</v-toolbar-title>
    </v-app-bar-close-btn>
    <v-cropper ref="cropper" :img-src="imgSrc" @crop="crop"></v-cropper>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VCropper from '~/components/molecules/VCropper'
export default {
  components: {
    VCropper,
    VAppBarCloseBtn
  },

  computed: {
    ...mapState('user', ['new']),

    imgSrc() {
      return this.new.origPhotoURI ? this.new.origPhotoURI : ''
    }
  },

  methods: {
    ...mapActions('user', ['SET_NEW_PHOTO_URI', 'RESET_NEW']),

    ...mapActions('dialog', ['HIDE']),

    close() {
      this.RESET_NEW()
    },

    crop(payload) {
      this.SET_NEW_PHOTO_URI(payload)
      this.HIDE('the-avatar-cropper')
    },

    replace(payload) {
      this.$refs.cropper.replace(payload)
    }
  }
}
</script>

<style></style>
