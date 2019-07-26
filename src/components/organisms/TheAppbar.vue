<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-if="isAuth" fab absolute right @click="LOGOUT()">
      <v-img :src="src" alt="avatar" max-height="40px" max-width="40px" />
    </v-btn>

    <v-btn v-if="!isAuth" icon @click="LOGIN()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <the-firebase-ui v-if="!isAuth" />
  </v-app-bar>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import TheFirebaseUi from '~/components/organisms/TheFirebaseUi'
export default {
  components: {
    TheFirebaseUi
  },
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
    ...mapActions('user', ['LOGIN', 'LOGOUT'])
  }
}
</script>
