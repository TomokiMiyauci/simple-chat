<template>
  <v-card>
    <v-app-bar-close-btn @close="close">
      <template #content>
        <v-toolbar-title>Entrance</v-toolbar-title>
      </template>
    </v-app-bar-close-btn>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-scanner ref="scanner" @success="$emit('close')"></v-scanner>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VScanner from '~/components/molecules/VScanner'
export default {
  components: {
    VScanner,
    VAppBarCloseBtn
  },

  methods: {
    close() {
      this.$refs.scanner.turnCameraOff()
      this.$emit('close')
    }
  }
}
</script>

<style></style>
