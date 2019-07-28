<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-if="isAuth" fab absolute right @click="logout()">
      <v-img :src="src" alt="avatar" max-height="40px" max-width="40px" />
    </v-btn>

    <v-btn v-if="!isAuth" icon @click="log()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      color="primary"
      :timeout="timeout"
      :top="true"
    >
      {{ text }}
    </v-snackbar>
  </v-app-bar>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
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
