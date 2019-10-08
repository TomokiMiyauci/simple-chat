<template>
  <v-app-bar dark app>
    <v-create-private-room-btn v-if="isPrivate"></v-create-private-room-btn>
    <v-create-room-btn v-else></v-create-room-btn>
    <v-spacer />

    <v-btn-icon icon="mdi-comment-search"></v-btn-icon>
    <v-scanner-btn v-if="isPrivate"></v-scanner-btn>
    <v-sort-btn></v-sort-btn>
    <v-toggle-btn></v-toggle-btn>
    <the-avatar />
  </v-app-bar>
</template>
<script>
import VSortBtn from '~/components/molecules/VSortBtn'
import VScannerBtn from '~/components/molecules/VScannerBtn'
import VCreatePrivateRoomBtn from '~/components/molecules/VCreatePrivateRoomBtn'
import VToggleBtn from '~/components/molecules/VToggleBtn'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import TheAvatar from '~/components/organisms/TheAvatar'
import VCreateRoomBtn from '~/components/molecules/VCreateRoomBtn'
export default {
  components: {
    VSortBtn,
    TheAvatar,
    VCreateRoomBtn,
    VBtnIcon,
    VToggleBtn,
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
