<template>
  <v-app-bar dark app>
    <v-text-field
      rounded
      hide-details
      prepend-inner-icon="mdi-comment-search"
      single-line
    ></v-text-field>
    <v-spacer />
    <the-create-room></the-create-room>
    <the-firebase-ui />
  </v-app-bar>
</template>
<script>
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
import TheCreateRoom from '~/components/organisms/TheCreateRoom'
export default {
  components: {
    TheFirebaseUi,
    TheCreateRoom
  },
  props: {
    backTo: {
      type: String,
      default: null
    }
  },
  computed: {}
}
</script>
