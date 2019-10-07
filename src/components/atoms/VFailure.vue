<template>
  <v-icon-center v-bind="iconCenter"></v-icon-center>
</template>

<script>
import VIconCenter from '~/components/atoms/VIconCenter'
export default {
  components: {
    VIconCenter
  },

  data() {
    return {
      iconCenter: {
        size: 200,
        color: 'red darken-1',
        icon: 'mdi-alert'
      }
    }
  }
}
</script>

<style></style>
