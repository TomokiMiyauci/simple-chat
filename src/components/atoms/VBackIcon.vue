<template>
  <v-btn icon :to="backTo">
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    backTo: {
      type: String,
      default: null
    }
  }
}
</script>

<style></style>
