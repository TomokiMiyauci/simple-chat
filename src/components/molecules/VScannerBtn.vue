<template>
  <v-dialog-btn-icon ref="dialog" fullscreen :btn-icon="btnIcon">
    <template #content>
      <the-scanner @close="$refs.dialog.forceClose()"></the-scanner>
    </template>
  </v-dialog-btn-icon>
</template>

<script>
import TheScanner from '~/components/organisms/TheScanner'
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
export default {
  components: {
    VDialogBtnIcon,
    TheScanner
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-qrcode-scan'
      }
    }
  }
}
</script>

<style></style>
