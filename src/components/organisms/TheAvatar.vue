<template>
  <div>
    <v-avatar @click="dialog = true">
      <v-img :src="photoSrc" alt="avatar" />
    </v-avatar>
    <v-dialog v-model="dialog" max-width="400px" persistent>
      <v-profile @close="dialog = false"></v-profile>
    </v-dialog>
  </div>
</template>

<script>
import VProfile from '~/components/molecules/VProfile'
export default {
  components: {
    VProfile
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    photoSrc() {
      if (!this.src) {
        return require('~/assets/images/anonymous.jpg')
      } else {
        return this.src
      }
    }
  }
}
</script>

<style></style>
