<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav></the-bottom-nav>
  </v-app>
</template>

<script>
import TheBottomNav from '~/components/organisms/TheBottomNav'
export default {
  components: {
    TheBottomNav
  }
}
</script>

<style></style>
