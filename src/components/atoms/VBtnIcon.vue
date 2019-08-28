<template>
  <v-btn :color="btnColor" :icon="!btnText && !!icon" @click="click">
    <v-icon v-if="icon">{{ icon }}</v-icon>
    {{ btnText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    btnColor: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style></style>
