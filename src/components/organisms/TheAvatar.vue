<template>
  <div>
    <v-btn v-if="!isAuth" icon to="/login">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <template v-else>
      <v-avatar @click="click">
        <v-img :src="photoSrc" alt="avatar" />
      </v-avatar>
      <v-dialog v-model="dialog" fullscreen>
        <the-settings ref="dialog" @close="dialog = false"></the-settings>
      </v-dialog>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheSettings from '~/components/organisms/TheSettings'
export default {
  components: {
    TheSettings
  },

  data: () => ({
    dialog: false
  }),

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
    click() {
      this.dialog = true
      setTimeout(() => {
        this.$refs.dialog.open()
      }, 0)
    }
  }
}
</script>

<style></style>
