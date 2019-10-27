<template>
  <v-app-bar app dark>
    <v-row class="child-flex">
      <v-toolbar v-if="isOnlyRoom" flat>
        <v-create-private-room-btn v-if="isPrivate"></v-create-private-room-btn>
        <v-create-room-btn v-else></v-create-room-btn>
        <v-spacer />
        <v-search-btn></v-search-btn>
        <v-scanner-btn v-if="isPrivate"></v-scanner-btn>
        <v-sort-btn></v-sort-btn>
        <v-align-btn></v-align-btn>
        <the-avatar :is-active="false" class="hidden-sm-and-up" />
      </v-toolbar>

      <v-toolbar v-if="isOnlyMsg" dark flat>
        <the-avatar :is-active="!ismobile" class="hidden-xs-only" />

        <v-btn-icon
          class="hidden-sm-and-up"
          icon="mdi-arrow-left"
          @click="click"
        ></v-btn-icon>
        <v-spacer />
        <v-btn-phone></v-btn-phone>
        <the-pull-to-refresh></the-pull-to-refresh>
        <v-settings-room-btn></v-settings-room-btn>

        <the-avatar :is-active="false" class="hidden-sm-and-up" />
      </v-toolbar>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VBtnPhone from '~/components/molecules/VBtnPhone'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import VSettingsRoomBtn from '~/components/molecules/VSettingsRoomBtn'
import VAlignBtn from '~/components/molecules/ValignBtn'
import VSearchBtn from '~/components/molecules/VSearchBtn'
import VSortBtn from '~/components/molecules/VSortBtn'
import VScannerBtn from '~/components/molecules/VScannerBtn'
import VCreatePrivateRoomBtn from '~/components/molecules/VCreatePrivateRoomBtn'
import TheAvatar from '~/components/organisms/TheAvatar'
import VCreateRoomBtn from '~/components/molecules/VCreateRoomBtn'
export default {
  components: {
    VBtnPhone,
    VAlignBtn,
    VSearchBtn,
    VSortBtn,
    TheAvatar,
    VCreateRoomBtn,
    VCreatePrivateRoomBtn,
    VScannerBtn,
    ThePullToRefresh,
    VSettingsRoomBtn,
    VBtnIcon
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
