<template>
  <div>
    <p class="error">{{ error }}</p>
    <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="1"
      type="info"
    >
      Press <v-icon>mdi-qrcode</v-icon> on another device and read QRcode.
    </v-alert>
    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ENTER } from '~/store/room/mutation-types'
export default {
  data() {
    return {
      error: '',
      camera: 'auto'
    }
  },

  methods: {
    ...mapActions('room', [ENTER]),

    async onDecode(result) {
      const b = await this.ENTER(result)
      console.log(b)
      this.turnCameraOff()
      this.$emit('success')
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    },

    turnCameraOff() {
      this.camera = 'off'
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
