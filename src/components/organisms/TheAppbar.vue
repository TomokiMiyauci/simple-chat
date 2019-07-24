<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="click">
      <v-icon>add</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  computed: {
    ...mapState('navbar', ['title'])
  },
  methods: {
    click() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
    }
  }
}
</script>
