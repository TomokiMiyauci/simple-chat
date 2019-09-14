<template>
  <div>
    <v-btn v-if="!isAuth" icon to="/login">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <the-avatar v-else :src="src"></the-avatar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheAvatar from '~/components/organisms/TheAvatar'
export default {
  components: {
    TheAvatar
  },
  computed: {
    ...mapState('user', ['isAuth']),
    ...mapGetters('user', ['photoURL']),
    src() {
      return this.photoURL
    }
  }
}
</script>

<style></style>
