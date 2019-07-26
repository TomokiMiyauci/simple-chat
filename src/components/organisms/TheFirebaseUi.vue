<template>
  <div>
    <v-btn icon @click.stop="on">
      <v-icon>exit_to_app</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-form-card>
        <template v-slot:title>
          <div>
            Sign In
          </div>
        </template>

        <template v-slot:text>
          <div id="firebaseui-auth-container" />
        </template>
      </v-form-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VFormCard from '~/components/molecules/VFormCard'
import firebase from '~/plugins/firebase'
export default {
  components: {
    VFormCard
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN']),
    a() {
      console.log(1)
    },
    renderFirebaseUI() {
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())

      const config = {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        signInFlow: 'popup',

        signInSuccessUrl: '/test',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy',
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log(authResult)
            // this.LOGIN()
            // authResult().then(() => console.log(1))
            return true
          }
        }
      }

      ui.start('#firebaseui-auth-container', config)
    },
    on() {
      this.dialog = true
      setTimeout(this.renderFirebaseUI, 0)
    }
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
