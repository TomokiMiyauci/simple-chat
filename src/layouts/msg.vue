<template>
  <v-app style="background: linear-gradient(to top right, skyblue, orange);">
    <the-msg-app-bar></the-msg-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app padless color="transparent">
      <the-post> </the-post>
    </v-footer>
  </v-app>
</template>

<script>
import TheMsgAppBar from '~/components/organisms/TheMsgAppBar'
import ThePost from '~/components/organisms/ThePost'
export default {
  components: {
    TheMsgAppBar,
    ThePost
  }
}
</script>

<style></style>
