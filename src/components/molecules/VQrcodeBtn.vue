<template>
  <v-dialog-btn-icon ref="dialog" fullscreen :btn-icon="btnIcon">
    <template #content>
      <the-qrcode
        :value="value"
        @close="$refs.dialog.forceClose()"
      ></the-qrcode>
    </template>
  </v-dialog-btn-icon>
</template>

<script>
import TheQrcode from '~/components/organisms/TheQrcode'
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
export default {
  components: {
    VDialogBtnIcon,
    TheQrcode
  },

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-qrcode'
      }
    }
  }
}
</script>

<style></style>
