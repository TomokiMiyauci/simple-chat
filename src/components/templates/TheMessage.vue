<template>
  <div>
    <v-message />
    <v-bottom-navigation app fixed>
      <v-flex>
        <v-post-box :userid="this.$route.params.userID" />
      </v-flex>
    </v-bottom-navigation>
  </div>
</template>

<script>
import VMessage from '~/components/organisms/VMessage'
import VPostBox from '~/components/organisms/VPostBox'
export default {
  components: {
    VMessage,
    VPostBox
  }
}
</script>

<style></style>
