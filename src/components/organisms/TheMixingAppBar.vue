<template>
  <v-row class="child-flex">
    <div v-if="isOnlyRoom">
      <v-toolbar>
        <v-create-private-room-btn v-if="isPrivate"></v-create-private-room-btn>
        <v-create-room-btn v-else></v-create-room-btn>
        <v-spacer />
        <v-search-btn></v-search-btn>
        <v-scanner-btn v-if="isPrivate"></v-scanner-btn>
        <v-sort-btn></v-sort-btn>
        <v-align-btn></v-align-btn>
        <the-avatar class="hidden-md-and-up" />
      </v-toolbar>
    </div>

    <div v-if="isOnlyMsg">
      <v-toolbar dark :extended="extended">
        <v-btn-icon
          class="hidden-md-and-up"
          icon="mdi-arrow-left"
          @click="click"
        ></v-btn-icon>
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
      </v-toolbar>
    </div>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import VSettingsRoomBtn from '~/components/molecules/VSettingsRoomBtn'
import VTabPhoneVideo from '~/components/molecules/VTabPhoneVideo'
import VAlignBtn from '~/components/molecules/ValignBtn'
import VSearchBtn from '~/components/molecules/VSearchBtn'
import VSortBtn from '~/components/molecules/VSortBtn'
import VScannerBtn from '~/components/molecules/VScannerBtn'
import VCreatePrivateRoomBtn from '~/components/molecules/VCreatePrivateRoomBtn'
import TheAvatar from '~/components/organisms/TheAvatar'
import VCreateRoomBtn from '~/components/molecules/VCreateRoomBtn'
export default {
  components: {
    VAlignBtn,
    VSearchBtn,
    VSortBtn,
    TheAvatar,
    VCreateRoomBtn,
    VCreatePrivateRoomBtn,
    VScannerBtn,
    ThePullToRefresh,
    VSettingsRoomBtn,
    VTabPhoneVideo,
    VBtnIcon
  },

  data() {
    return {
      extended: false
    }
  },

  computed: {
    ...mapState('room', ['uid']),

    ismobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isOnlyMsg() {
      if (this.ismobile && !this.uid) {
        return false
      }
      return true
    },

    isOnlyRoom() {
      if (this.ismobile && !!this.uid) {
        return false
      }
      return true
    },

    isPrivate() {
      const re = /\/rooms\/private$/
      return re.test(this.$route.path)
    }
  },

  methods: {
    ...mapMutations('room', ['setUid']),

    click() {
      this.setUid(null)
    }
  }
}
</script>

<style></style>
