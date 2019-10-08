<template>
  <v-app-bar dark app>
    <v-create-private-room-btn v-if="isPrivate"></v-create-private-room-btn>
    <v-create-room-btn v-else></v-create-room-btn>
    <v-spacer />

    <v-search-btn></v-search-btn>
    <v-scanner-btn v-if="isPrivate"></v-scanner-btn>
    <v-sort-btn></v-sort-btn>
    <v-align-btn></v-align-btn>
    <the-avatar />
  </v-app-bar>
</template>

<script>
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
    VScannerBtn
  },

  computed: {
    isPrivate() {
      const re = /\/rooms\/private$/
      return re.test(this.$route.path)
    }
  }
}
</script>
