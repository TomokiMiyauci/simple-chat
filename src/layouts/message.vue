<template>
  <v-app>
    <the-msg-app-bar back-to="/rooms" />
    <v-content>
      <nuxt />
    </v-content>
    <the-post-footer></the-post-footer>
  </v-app>
</template>

<script>
import ThePostFooter from '~/components/organisms/ThePostFooter'
import TheMsgAppBar from '~/components/organisms/TheMsgAppBar'
export default {
  components: {
    TheMsgAppBar,
    ThePostFooter
  }
}
</script>

<style></style>
