<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav />
  </v-app>
</template>

<script>
import TheAppbar from '~/components/organisms/TheAppbar'
import TheBottomNav from '~/components/organisms/TheBottomNav'
export default {
  components: {
    TheAppbar,
    TheBottomNav
  }
}
</script>

<style></style>
