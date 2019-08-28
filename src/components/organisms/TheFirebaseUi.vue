<template>
  <div>
    <v-dialog-btn-icon v-if="!isAuth" ref="dialog" :btn-icon="btnIcon">
      <template #content>
        <v-firebase-ui @logged-in="forceClose"></v-firebase-ui>
      </template>
    </v-dialog-btn-icon>
    <the-avatar v-else :src="src"></the-avatar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheAvatar from '~/components/organisms/TheAvatar'
import VFirebaseUi from '~/components/molecules/VFirebaseUi'
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
export default {
  components: {
    VDialogBtnIcon,
    VFirebaseUi,
    TheAvatar
  },
  data() {
    return {
      btnIcon: {
        icon: 'mdi-login-variant'
      }
    }
  },
  computed: {
    ...mapState('user', ['isAuth']),
    ...mapGetters('user', ['photoURL']),
    src() {
      return this.photoURL
    }
  },
  methods: {
    forceClose() {
      this.$refs.dialog.forceClose()
    }
  }
}
</script>

<style></style>
