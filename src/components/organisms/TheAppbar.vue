<template>
  <v-app-bar dark app>
    <v-back-icon v-if="backTo" :back-to="backTo"></v-back-icon>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <the-firebase-ui />
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import VBackIcon from '~/components/atoms/VBackIcon'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
export default {
  components: {
    TheFirebaseUi,
    VBackIcon
  },
  props: {
    backTo: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState('navbar', ['title'])
  }
}
</script>
