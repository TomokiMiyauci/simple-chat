<template>
  <v-fade-transition>
    <v-progress-circular
      class="progress-circular"
      :width="width"
      :size="size"
      :color="color"
      indeterminate
    ></v-progress-circular>
  </v-fade-transition>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'purple darken-1'
    },

    size: {
      type: [String, Number],
      default: 170
    },

    width: {
      type: [String, Number],
      default: 13
    }
  }
}
</script>

<style scoped>
.progress-circular {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
