<template>
  <v-container grid-list-xs class="fill-height">
    <v-row justify="center" align="center">
      <firebase-ui></firebase-ui>
    </v-row>
  </v-container>
</template>

<script>
import FirebaseUi from '~/components/molecules/FirebaseUi'
export default {
  layout: 'login',
  components: {
    FirebaseUi
  }
}
</script>

<style></style>
