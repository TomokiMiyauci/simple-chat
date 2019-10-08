<template>
  <v-card>
    <v-app-bar-close-btn>
      <v-text-field
        v-model="message"
        hide-details
        single-line
        autofocus
        dense
        outlined
        rounded
        filled
        placeholder="this feature is in progress."
        :append-icon="message ? 'mdi-send' : 'mdi-microphone'"
      ></v-text-field>
    </v-app-bar-close-btn>
  </v-card>
</template>

<script>
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
export default {
  components: {
    VAppBarCloseBtn
  },

  data() {
    return {
      message: null
    }
  }
}
</script>

<style></style>
