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
        color: 'green darken-1',
        icon: 'mdi-check-circle'
      }
    }
  }
}
</script>

<style>
.a {
  position: relative;
  height: 500px;
  width: 300;
}
</style>
