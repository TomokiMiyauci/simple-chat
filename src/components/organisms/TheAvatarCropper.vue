<template>
  <v-dialog-render ref="dialog" fullscreen>
    <template #content>
      <v-card>
        <v-app-bar-close-btn @close="close"></v-app-bar-close-btn>
        <v-cropper :img-src="imgSrc" @crop="crop"></v-cropper>
      </v-card>
    </template>
  </v-dialog-render>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VDialogRender from '~/components/molecules/VDialogRender'
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VCropper from '~/components/molecules/VCropper'
export default {
  components: {
    VDialogRender,
    VCropper,
    VAppBarCloseBtn
  },

  computed: {
    ...mapState('user', ['new']),

    imgSrc() {
      return this.new.origPhotoURL ? this.new.origPhotoURL : ''
    }
  },

  watch: {
    'new.origPhotoURL'() {
      if (this.new.origPhotoURL) {
        this.forceOpen()
      }
    }
  },

  methods: {
    ...mapMutations('user', [
      'SET_NEW_ORIGINAL_PHOTO_URL',
      'SET_NEW_PHOTO_URL',
      'SET_PHOTO',
      'SET_NEW_ORIGINAL_PHOTO'
    ]),

    forceOpen() {
      this.$refs.dialog.forceOpen()
    },

    close() {
      this.$refs.dialog.forceClose()
      this.SET_NEW_ORIGINAL_PHOTO(null)
      this.SET_NEW_ORIGINAL_PHOTO_URL(null)
    },

    crop(payload) {
      this.close()
      this.SET_PHOTO(payload)
    }
  }
}
</script>

<style></style>
