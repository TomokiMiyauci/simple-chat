<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import TheAppbar from '~/components/organisms/TheAppbar'
export default {
  components: {
    TheAppbar
  }
}
</script>

<style></style>
