<template>
  <v-app-bar>
    <v-btn-icon v-if="!removeBackBtn" icon="mdi-arrow-left" @click="close" />
    <slot name="content"></slot>
  </v-app-bar>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },

  props: {
    removeBackBtn: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style></style>
