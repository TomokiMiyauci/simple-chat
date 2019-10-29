<template>
  <v-app-bar dark app :extended="extended">
    <v-btn-back></v-btn-back>
    <v-spacer />
    <v-btn icon @click="extended = !extended">
      <v-icon>mdi-phone-in-talk</v-icon>
    </v-btn>
    <the-pull-to-refresh></the-pull-to-refresh>
    <v-settings-room-btn></v-settings-room-btn>
    <the-avatar />
    <template v-if="extended" v-slot:extension>
      <v-tab-phone-video @click="extended = !extended"></v-tab-phone-video>
    </template>
  </v-app-bar>
</template>
<script>
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import VBtnBack from '~/components/atoms/VBtnBack'
import TheAvatar from '~/components/organisms/TheAvatar'
import VSettingsRoomBtn from '~/components/molecules/VSettingsRoomBtn'
export default {
  components: {
    TheAvatar,
    VBtnBack,
    ThePullToRefresh,
    VSettingsRoomBtn
  },

  data() {
    return {
      extended: false
    }
  }
}
</script>
