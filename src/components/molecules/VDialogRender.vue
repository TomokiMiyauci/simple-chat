<template>
  <v-dialog
    v-model="dialog"
    width="dialogWidth"
    :fullscreen="fullscreen"
    :hide-overlay="fullscreen"
    :transition="transition"
  >
    <slot name="content"></slot>
  </v-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },

    transition: {
      type: String,
      default: 'dialog-transition'
    },

    dialogWidth: {
      type: [String, Number],
      default: 500
    }
  },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    forceClose() {
      this.dialog = false
    },

    forceOpen() {
      this.dialog = true
    }
  }
}
</script>

<style></style>
