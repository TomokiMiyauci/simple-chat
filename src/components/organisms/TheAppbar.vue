<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <the-firebase-ui />
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
export default {
  components: {
    TheFirebaseUi
  },
  computed: {
    ...mapState('navbar', ['title'])
  }
}
</script>
