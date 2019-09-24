<template>
  <v-card max-width="300px">
    <v-card-text>
      <v-alert
        border="left"
        colored-border
        color="deep-purple accent-4"
        elevation="1"
        type="info"
      >
        Press <v-icon>mdi-qrcode-scan</v-icon> on another device to load under
        the QR code.
      </v-alert></v-card-text
    >
    <vue-qrcode :value="value" :options="{ width: 300 }"></vue-qrcode>
  </v-card>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
export default {
  components: {
    VueQrcode
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
