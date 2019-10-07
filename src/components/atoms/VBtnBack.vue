<template>
  <v-btn-icon icon="mdi-arrow-left" @click="click"></v-btn-icon>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },

  methods: {
    click() {
      this.$emit('beforeBack')
      this.$router.back()
    }
  }
}
</script>

<style></style>
