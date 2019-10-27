<template>
  <v-btn icon @click="SWITCH('v-btn-phone-video')">
    <v-icon>mdi-phone-in-talk</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('overlay', ['SWITCH'])
  }
}
</script>

<style></style>
