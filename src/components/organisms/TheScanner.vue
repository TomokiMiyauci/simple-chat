<template>
  <v-card>
    <v-app-bar-close-btn @beforeClose="$refs.scanner.turnCameraOff()">
      <v-toolbar-title>Entrance</v-toolbar-title>
    </v-app-bar-close-btn>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-scanner ref="scanner" @success="close"></v-scanner>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VScanner from '~/components/molecules/VScanner'
export default {
  components: {
    VScanner,
    VAppBarCloseBtn
  },

  methods: {
    ...mapActions('dialog', ['HIDE']),
    close() {
      this.$refs.scanner.turnCameraOff()
      this.HIDE()
    }
  }
}
</script>

<style></style>
