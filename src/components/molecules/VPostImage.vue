<template>
  <div>
    <v-btn text icon :disabled="!isAuth" @click="click">
      <v-icon>mdi-image</v-icon>
    </v-btn>
    <input type="file" style="visibility: hidden;" @change="onFileChange" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['isAuth'])
  },
  methods: {
    ...mapActions('message', ['POST_IMAGE']),
    click() {
      document.querySelector('input[type=file]').click()
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const file = files[0]
      // Store the file data encoded as data URL in the result property of reader
      this.sendImage(file)
    },
    async sendImage(file) {
      await this.POST_IMAGE(file)
      this.scrollBottom()
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    }
  }
}
</script>

<style></style>
