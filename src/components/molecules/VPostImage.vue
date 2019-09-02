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
import VImage from '~/components/atoms/VImage'

export default {
  components: {
    VImage
  },
  computed: {
    ...mapState('user', ['isAuth'])
  },
  methods: {
    ...mapActions('message', ['POST_IMAGE']),
    sendImage(file) {
      this.POST_IMAGE(file)
    }
  }
}
</script>

<style></style>
