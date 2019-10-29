<template>
  <v-app>
    <the-msg-app-bar></the-msg-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import TheMsgAppBar from '~/components/organisms/TheMsgAppBar'
export default {
  components: {
    TheMsgAppBar
  }
}
</script>

<style></style>
