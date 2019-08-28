<template>
  <v-card>
    <v-card-title class="headline" primary-title>
      Sign I
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

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({}),
  computed: {},

  methods: {
    ...mapActions('user', ['LOGIN']),
    login() {
      this.LOGIN()
      this.$emit('logged-in')
    }
  }
}
</script>

<style></style>
