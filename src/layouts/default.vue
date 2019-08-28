<template>
  <v-app>
    <the-app-bar />
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav></the-bottom-nav>
  </v-app>
</template>

<script>
import TheBottomNav from '~/components/organisms/TheBottomNav'
import TheAppBar from '~/components/organisms/TheAppBar'
export default {
  components: {
    TheAppBar,
    TheBottomNav
  }
}
</script>

<style></style>
