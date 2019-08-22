<template>
  <div>
    <v-avatar @click="dialog = true">
      <v-img :src="photoSrc" alt="avatar" />
    </v-avatar>
    <v-dialog v-model="dialog" max-width="400px" persistent>
      <the-profile @close="dialog = false"></the-profile>
    </v-dialog>
  </div>
</template>

<script>
import TheProfile from '~/components/organisms/TheProfile'
export default {
  components: {
    TheProfile
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
