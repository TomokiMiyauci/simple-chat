<template>
  <v-app-bar dark app>
    <v-back-icon v-if="backTo" :back-to="backTo"></v-back-icon>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <the-pull-to-refresh></the-pull-to-refresh>
    <the-settings-room></the-settings-room>
    <the-firebase-ui />
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import VBackIcon from '~/components/atoms/VBackIcon'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
import TheSettingsRoom from '~/components/organisms/TheSettingsRoom'
export default {
  components: {
    TheFirebaseUi,
    VBackIcon,
    ThePullToRefresh,
    TheSettingsRoom
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
