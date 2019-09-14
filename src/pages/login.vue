<template>
  <v-container grid-list-xs>
    <v-row justify="center" align="center" style="height: 600px;">
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
