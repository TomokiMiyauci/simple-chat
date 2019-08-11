<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav></the-bottom-nav>
  </v-app>
</template>

<script>
import TheBottomNav from '~/components/organisms/TheBottomNav'
import TheAppbar from '~/components/organisms/TheAppbar'
export default {
  components: {
    TheAppbar,
    TheBottomNav
  }
}
</script>

<style></style>
