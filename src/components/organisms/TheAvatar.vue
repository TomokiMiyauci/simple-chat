<template>
  <div>
    <v-btn v-if="!isAuth" icon to="/login">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <template v-else>
      <v-avatar @click="$router.push('/user/settings')">
        <v-img :src="photoSrc" alt="avatar" />
      </v-avatar>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['isAuth']),
    ...mapGetters('user', ['photoURL']),

    photoSrc() {
      if (this.photoURL) {
        return this.photoURL
      } else {
        return require('~/assets/images/anonymous.jpg')
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
