<template>
  <v-container class="container">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-post-image></v-post-image>
      </v-col>

      <v-col cols="auto">
        <v-post-tag></v-post-tag>
      </v-col>

      <v-col cols="auto">
        <v-text-send></v-text-send>
      </v-col>

      <v-col cols="auto">
        <v-sender></v-sender>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VPostImage from '~/components/molecules/VPostImage'
import VPostTag from '~/components/molecules/VPostTag'
import VTextSend from '~/components/molecules/VTextSend'
import VSender from '~/components/molecules/VSender'
export default {
  components: {
    VTextSend,
    VPostImage,
    VPostTag,
    VSender
  }
}
</script>

<style scoped>
.container {
  position: sticky;
  bottom: 0;
  background: rgba(250, 250, 250, 0.95);
  padding: 0;
}
</style>
