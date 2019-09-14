<template>
  <v-app-bar dark app :extended="extended">
    <v-back-icon v-if="backTo" :back-to="backTo"></v-back-icon>

    <v-spacer />
    <v-btn icon @click="extended = !extended">
      <v-icon>mdi-phone-in-talk</v-icon>
    </v-btn>
    <the-pull-to-refresh></the-pull-to-refresh>
    <the-settings-room></the-settings-room>
    <the-firebase-ui />
    <template v-if="extended" v-slot:extension>
      <v-tab-phone-video @click="extended = !extended"></v-tab-phone-video>
    </template>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import VBackIcon from '~/components/atoms/VBackIcon'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
import TheSettingsRoom from '~/components/organisms/TheSettingsRoom'
import VTabPhoneVideo from '~/components/molecules/VTabPhoneVideo'
export default {
  components: {
    TheFirebaseUi,
    VBackIcon,
    ThePullToRefresh,
    TheSettingsRoom,
    VTabPhoneVideo
  },
  props: {
    backTo: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      extended: false,
      dialog: false
    }
  },
  computed: {
    ...mapState('navbar', ['title'])
  }
}
</script>
