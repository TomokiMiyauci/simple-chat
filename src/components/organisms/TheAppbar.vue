<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-if="isAuth" fab absolute right @click="logout">
      <v-img :src="src" alt="avatar" max-height="40px" max-width="40px" />
    </v-btn>

    <v-btn v-if="!isAuth" icon @click="click">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  computed: {
    ...mapState('navbar', ['title']),
    ...mapState('user', ['photoURL', 'isAuth']),

    src: function() {
      return this.photoURL
        ? require(this.photoURL)
        : require('~/assets/images/anonymous.jpg')
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN', 'LOGOUT']),
    async click() {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.LOGIN()
        })
    },
    async logout() {
      await firebase
        .auth()
        .signOut()
        .then(() => this.LOGOUT())
        .catch((error) => console.log(error))
    }
  }
}
</script>
