<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-if="isLogin" fab absolute right @click="logout">
      <v-img
        src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
        alt="avatar"
        max-height="40px"
        max-width="40px"
      />
    </v-btn>

    <v-btn v-if="!isLogin" icon @click="click">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      isLogin: null
    }
  },
  computed: {
    ...mapState('navbar', ['title']),
    idssLogin: function() {
      return !!firebase.auth().currentUser
    }
  },
  methods: {
    async click() {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => (this.isLogin = true))
    },
    clic() {
      console.log(!!firebase.auth().currentUser)
      firebase.auth().signOut()
    },
    logout() {
      firebase.auth().signOut()
      this.isLogin = false
    }
  }
}
</script>
