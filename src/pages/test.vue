<template>
  <div>
    <div id="firebaseui-auth-container" />
    <v-btn color="success" @click="click">
      text
    </v-btn>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    click() {
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())

      const config = {
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        signInSuccessUrl: '/',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy'
      }

      ui.start('#firebaseui-auth-container', config)
    }
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
