<template>
  <v-card max-width="250px">
    <v-alert outlined type="warning" prominent border="left">
      This function can be used by logging in.
    </v-alert>
    <div class="text-center">
      <v-login-btn></v-login-btn>
    </div>
  </v-card>
</template>

<script>
import VLoginBtn from '~/components/atoms/VLoginBtn'
export default {
  components: {
    VLoginBtn
  }
}
</script>

<style></style>
