<template>
  <v-app>
    <the-mixing-app-bar />
    <v-content>
      <nuxt />
    </v-content>
    <the-bottom-nav></the-bottom-nav>
  </v-app>
</template>

<script>
import TheBottomNav from '~/components/organisms/TheBottomNav'
import TheMixingAppBar from '~/components/organisms/TheMixingAppBar.vue'
export default {
  components: {
    TheMixingAppBar,
    TheBottomNav
  }
}
</script>

<style></style>
