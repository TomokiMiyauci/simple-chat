<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-navigation app dark>
      <v-post-box />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import TheAppbar from '~/components/organisms/TheAppbar'
import VPostBox from '~/components/organisms/VPostBox'
export default {
  components: {
    TheAppbar,
    VPostBox
  }
}
</script>

<style></style>
