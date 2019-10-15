<template>
  <v-btn-icon
    icon="mdi-login-variant"
    @click="$router.push('/user/login')"
  ></v-btn-icon>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  }
}
</script>

<style></style>
