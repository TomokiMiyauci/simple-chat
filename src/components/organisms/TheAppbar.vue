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
import { mapState, mapActions } from 'vuex'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
export default {
  components: {
    TheFirebaseUi
  },
  data: () => ({
    snackbar: false,
    text: 'Success! Login',
    timeout: 1500
  }),

  computed: {
    ...mapState('navbar', ['title']),
    ...mapState('user', ['photoURL', 'isAuth']),

    src: function() {
      return this.photoURL
        ? this.photoURL
        : require('~/assets/images/anonymous.jpg')
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN', 'LOGOUT']),
    async log() {
      await this.LOGIN()
      this.snackbar = true
    },
    async logout() {
      await this.LOGOUT()
      this.snackbar = true
    }
  }
}
</script>
