<template>
  <div>
    <v-btn color="success" @click="click">
      text
    </v-btn>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">
          Click Me
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline justify-center primary-title">
          Sign In
        </v-card-title>
        <div id="firebaseui-auth-container" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      dialog: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['init']),
    click() {
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())

      const config = {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy'
      }

      ui.start('#firebaseui-auth-container', config)
    },
    a() {}
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
