<template>
  <v-bottom-navigation v-model="btmNav" dark app fixed>
    <v-btn height="56" to="/rooms/public" value="public">
      <span>Public</span> <v-icon>mdi-home</v-icon></v-btn
    >

    <v-menu offset-y open-on-hover top :nudge-right="-85" :disabled="isAuth">
      <template v-slot:activator="{ on }">
        <v-btn height="56" value="private" v-on="on" @click="login">
          <span>Private</span> <v-icon>mdi-hexagon-slice-2</v-icon></v-btn
        >
      </template>
      <v-login-induction />
    </v-menu>

    <v-btn height="56" to="/share" value="share">
      <span>Share</span> <v-icon>mdi-share-variant</v-icon></v-btn
    >
  </v-bottom-navigation>
</template>

<script>
import { mapState } from 'vuex'
import VLoginInduction from '~/components/molecules/VLoginInduction'
export default {
  components: {
    VLoginInduction
  },

  data: () => ({
    btmNav: null
  }),

  computed: {
    ...mapState('user', ['isAuth'])
  },

  methods: {
    login() {
      if (this.isAuth) {
        this.$router.push('/room/private')
      }
    }
  }
}
</script>
