<template>
  <v-card width="300px" height="400px">
    <p class="text-center">Sign In</p>
    <div id="firebaseui-auth-container"></div>
  </v-card>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  mounted() {
    this.init()
  },

  methods: {
    init() {
      const uiConfig = {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/'
      }
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
