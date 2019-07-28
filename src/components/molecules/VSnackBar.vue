<template>
  <v-snackbar
    v-model="snackBar.model"
    :color="snackBar.color"
    :timeout="snackBar.timeout"
    :top="snackBar.top"
  >
    {{ snackBar.text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackBar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
