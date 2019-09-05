<template>
  <div>
    <v-btn text icon :disabled="!isAuth" @click="$refs.image.onClick()">
      <v-icon>mdi-image</v-icon>
    </v-btn>
    <v-image ref="image" @onload="sendImage"></v-image>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SET_IMAGE, POST_IMAGE } from '~/store/post/mutation-types'
import VImage from '~/components/atoms/VImage'

export default {
  components: {
    VImage
  },
  computed: {
    ...mapState('user', ['isAuth'])
  },
  methods: {
    ...mapActions('post', [SET_IMAGE, POST_IMAGE]),
    async sendImage(file) {
      await this.SET_IMAGE(file)
      this.POST_IMAGE()
    }
  }
}
</script>

<style></style>
