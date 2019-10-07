<template>
  <v-card>
    <v-app-bar-close-btn></v-app-bar-close-btn>
    <v-cropper :img-src="imgSrc" @crop="crop"></v-cropper>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
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
      return this.new.origPhotoURL ? this.new.origPhotoURL : ''
    }
  },

  watch: {
    'new.origPhotoURL'() {
      if (this.new.origPhotoURL) {
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

    ...mapActions('dialog', ['HIDE']),

    close() {
      this.SET_NEW_ORIGINAL_PHOTO(null)
      this.SET_NEW_ORIGINAL_PHOTO_URL(null)
    },

    crop(payload) {
      this.SET_PHOTO(payload)
      this.HIDE('the-avatar-cropper')
    }
  }
}
</script>

<style></style>
