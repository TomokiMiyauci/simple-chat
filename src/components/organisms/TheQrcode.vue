<template>
  <v-card>
    <v-app-bar-close-btn @close="$emit('close')">
      <template #content>
        <v-toolbar-title>Invitation</v-toolbar-title>
      </template>
    </v-app-bar-close-btn>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-qrcode :value="value"></v-qrcode>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VQrcode from '~/components/molecules/VQrcode'
export default {
  components: {
    VQrcode,
    VAppBarCloseBtn
  },

  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
