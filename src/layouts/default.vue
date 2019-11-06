<template>
  <v-app style="background: linear-gradient(to top right, skyblue, orange);">
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav></the-bottom-nav>
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
