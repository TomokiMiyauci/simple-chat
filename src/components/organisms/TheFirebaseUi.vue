<template>
  <div>
    <v-dialog-card v-if="!isAuth" icon="mdi-login-variant" button-color="white">
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
                    mdi-google
                  </v-icon>
                  Sign in with Google
                </v-btn>
              </v-flex>
              <v-flex py-2>
                <v-btn color="red lighten-1" dark x-large>
                  <v-icon class="ma-2">
                    mdi-email
                  </v-icon>
                  Sign in with Email
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog-card>
    <the-avatar v-else :src="src"></the-avatar>

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
import TheAvatar from '~/components/organisms/TheAvatar'
import VDialogCard from '~/components/molecules/VDialogCard'
export default {
  components: {
    VDialogCard,
    TheAvatar
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
    src() {
      return this.photoURL
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN']),
    async login() {
      await this.LOGIN()
      this.snackbar = true
    }
  }
}
</script>

<style></style>
