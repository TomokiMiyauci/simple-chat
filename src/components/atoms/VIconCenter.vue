<template>
  <v-icon :size="size" :color="color" class="icon">{{ icon }}</v-icon>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      required: true
    },

    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
