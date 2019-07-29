<template>
  <div>
    <v-dialog-card v-if="!isAuth" icon="exit_to_app" button-color="white">
      <template slot="card">
        <v-card>
          <v-card-title class="headline" primary-title>
            Sign In
          </v-card-title>

          <v-card-actions>
            <v-layout column wrap align-center>
              <v-flex py-2>
                <v-btn color="primary" x-large @click="login()">
                  <v-icon class="ma-2">
                    adjust
                  </v-icon>
                  Sign in with Google
                </v-btn>
              </v-flex>
              <v-flex py-2>
                <v-btn color="red lighten-1" dark x-large>
                  <v-icon class="ma-2">
                    email
                  </v-icon>
                  Sign in with Email
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog-card>
    <v-btn v-else fab absolute right @click="logout()">
      <v-img :src="src" alt="avatar" max-height="40px" max-width="40px" />
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      color="primary"
      :timeout="timeout"
      :top="true"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import VDialogCard from '~/components/molecules/VDialogCard'
export default {
  components: {
    VDialogCard
  },
  data: () => ({
    snackbar: false,
    text: 'Success! Login',
    timeout: 1500
  }),

  computed: {
    ...mapState('navbar', ['title']),
    ...mapState('user', ['photoURL', 'isAuth']),
    ...mapGetters('user', ['photoURL']),
    src: function() {
      return this.photoURL
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN', 'LOGOUT']),
    async login() {
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

<style></style>
