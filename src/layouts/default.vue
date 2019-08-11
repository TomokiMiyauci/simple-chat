<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <the-post-footer></the-post-footer>
  </v-app>
</template>

<script>
import ThePostFooter from '~/components/organisms/ThePostFooter'
import TheAppbar from '~/components/organisms/TheAppbar'
export default {
  components: {
    TheAppbar,
    ThePostFooter
  }
}
</script>

<style></style>
