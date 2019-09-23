<template>
  <v-form v-model="valid">
    <v-hover v-slot:default="{ hover }">
      <v-card>
        <v-subheader><v-icon left>mdi-account-box</v-icon>Avatar</v-subheader>
        <v-img :aspect-ratio="3 / 2" :src="src">
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
      </v-card>
    </v-hover>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  UPDATE,
  LOGOUT,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URL,
  SET_NEW_ORIGINAL_PHOTO
} from '~/store/user/mutation-types'
import VImage from '~/components/atoms/VImage'
export default {
  components: {
    VImage
  },

  data() {
    return {
      valid: false
    }
  },

  computed: {
    ...mapState('user', ['name', 'photoURL', 'new']),

    src() {
      if (this.new.photo) {
        return this.new.photo
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

  methods: {
    ...mapActions('user', [
      UPDATE,
      LOGOUT,
      SET_NEW_NAME,
      SET_NEW_ORIGINAL_PHOTO,
      SET_NEW_ORIGINAL_PHOTO_URL
    ]),

    load(payload) {
      this.SET_NEW_ORIGINAL_PHOTO(payload)
      this.SET_NEW_ORIGINAL_PHOTO_URL()
    },

    logout() {
      this.LOGOUT()
    },

    async updateImageOrName() {
      await this.UPDATE()
      this.$emit('close')
    }
  }
}
</script>

<style></style>
