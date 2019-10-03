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
    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-if="validationPending" class="validation-pending">
        {{ pendingText }}
      </div>

      <v-icon-center
        v-show="isShow"
        size="200"
        :color="color"
        :icon="icon"
      ></v-icon-center>
    </qrcode-stream>
    <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VIconCenter from '~/components/atoms/VIconCenter.vue'
import { ENTER } from '~/store/room/mutation-types'
export default {
  components: {
    VIconCenter
  },

  data() {
    return {
      error: '',
      camera: 'auto',
      noStreamApiSupport: false,
      isShow: false,
      isValidated: false,
      color: '',
      icon: ''
    }
  },

  computed: {
    validationPending() {
      return this.camera === 'off'
    },

    pendingText() {
      return this.camera === 'off' && this.isValidated
        ? ''
        : 'Validation in progress...'
    }
  },

  methods: {
    ...mapActions('room', [ENTER]),

    async onDecode(result) {
      this.turnCameraOff()

      const isValid = await this.ENTER(result)
      this.isValidated = true
      this.isShow = true
      if (isValid) {
        this.succeed()
      } else {
        this.failed()
      }
    },

    async succeed() {
      this.color = 'green'
      this.icon = 'mdi-check-circle'
      await this.timeout(1000)

      this.isShow = false
      this.$emit('success')
    },

    async failed() {
      this.color = 'red'
      this.icon = 'mdi-alert'
      await this.timeout(1000)

      this.isShow = false
      this.camera = 'auto'
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        this.noStreamApiSupport = true
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
          this.noStreamApiSupport = true
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    },

    turnCameraOff() {
      this.camera = 'off'
    },

    timeout(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
