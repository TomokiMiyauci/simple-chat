<template>
  <div>
    <v-dialog-wrapper fullscreen name="the-avatar-cropper">
      <the-avatar-cropper ref="cropper"></the-avatar-cropper>
    </v-dialog-wrapper>

    <v-form v-model="valid">
      <v-hover v-slot:default="{ hover }">
        <v-card>
          <v-subheader><v-icon left>mdi-account-box</v-icon>Avatar</v-subheader>

          <v-img eager :aspect-ratio="1 / 1" :src="src">
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn @click="$refs.image.onClick()">upload image</v-btn>
              </v-overlay>
            </v-fade-transition>
            <v-image ref="image" @onload="load"></v-image
          ></v-img>

          <v-card-text>
            <v-text-field
              v-model="newName"
              prepend-inner-icon="mdi-account"
              label="Name"
              :rules="[(v) => !!v || 'Name is required']"
            ></v-text-field>
            <v-btn :disabled="!valid" @click="updateImageOrName">update</v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn block @click="logout">logout</v-btn>
          </v-card-actions>
          <v-progress></v-progress>
        </v-card>
      </v-hover>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  UPDATE,
  LOGOUT,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URI,
  SET_NEW_ORIGINAL_PHOTO,
  RESET_NEW
} from '~/store/user/mutation-types'
import VProgress from '~/components/molecules/VProgress'

import VImage from '~/components/atoms/VImage'
import TheAvatarCropper from '~/components/organisms/TheAvatarCropper'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'

export default {
  components: {
    VImage,
    TheAvatarCropper,
    VDialogWrapper,
    VProgress
  },

  data() {
    return {
      valid: false
    }
  },

  computed: {
    ...mapState('user', ['name', 'photoURL', 'new']),

    src() {
      if (this.new.photoURI) {
        return this.new.photoURI
      } else if (this.photoURL) {
        return this.photoURL
      } else {
        return require('~/assets/images/anonymous.jpg')
      }
    },

    newName: {
      get() {
        return this.name
      },

      set(payload) {
        this.SET_NEW_NAME(payload)
      }
    }
  },

  watch: {
    async 'new.origPhotoURI'() {
      if (this.new.origPhotoURI) {
        await this.$nextTick()
        this.$refs.cropper.replace(this.new.origPhotoURI)
      }
    }
  },

  methods: {
    ...mapActions('user', [
      UPDATE,
      LOGOUT,
      SET_NEW_NAME,
      SET_NEW_ORIGINAL_PHOTO,
      SET_NEW_ORIGINAL_PHOTO_URI,
      RESET_NEW
    ]),

    ...mapActions('dialog', ['SHOW']),
    ...mapActions('progress', ['PROGRESS', 'SUCCEED']),

    async load(payload) {
      this.SET_NEW_ORIGINAL_PHOTO(payload)
      await this.SET_NEW_ORIGINAL_PHOTO_URI()
    },

    logout() {
      this.LOGOUT()
    },

    async updateImageOrName() {
      this.PROGRESS()
      await this.UPDATE()
      await this.SUCCEED()
      this.RESET_NEW()
      this.$router.back()
    }
  }
}
</script>

<style></style>
