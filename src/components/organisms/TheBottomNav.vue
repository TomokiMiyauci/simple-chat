<template>
  <v-bottom-navigation v-model="btmNav" dark app fixed>
    <v-btn height="56" to="/rooms/public" value="public">
      <span>Public</span> <v-icon>mdi-home</v-icon></v-btn
    >
    <v-btn height="56" to="/rooms/private" :disabled="!isAuth" value="private">
      <span>Private</span> <v-icon>mdi-hexagon-slice-2</v-icon></v-btn
    >
    <v-btn height="56" to="/share" value="share">
      <span>Share</span> <v-icon>mdi-share-variant</v-icon></v-btn
    >
  </v-bottom-navigation>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    btmNav: null
  }),

  computed: {
    ...mapState('user', ['isAuth'])
  }
}
</script>
