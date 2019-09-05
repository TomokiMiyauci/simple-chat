<template>
  <div class="post">
    <v-container grid-list-xs class="container">
      <v-layout row wrap>
        <v-flex xs2>
          <v-post-image></v-post-image>
        </v-flex>
        <v-flex xs2>
          <v-post-tag></v-post-tag>
        </v-flex>
        <v-flex xs8>
          <v-text-send></v-text-send>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VPostImage from '~/components/molecules/VPostImage'
import VPostTag from '~/components/molecules/VPostTag'
import VTextSend from '~/components/molecules/VTextSend'
export default {
  components: {
    VTextSend,
    VPostImage,
    VPostTag
  }
}
</script>

<style scoped>
.post {
  width: 100%;
}
.container {
  max-width: 600px;
  background: rgba(250, 250, 250, 0.95);
  padding: 0;
}
</style>
