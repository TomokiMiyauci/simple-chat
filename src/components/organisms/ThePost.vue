<template>
  <div class="post">
    <v-container grid-list-xs class="container">
      <v-layout row wrap>
        <v-flex xs2>
          <v-post-image></v-post-image>
        </v-flex>
        <v-flex xs2>
          <v-btn icon>
            <v-icon>mdi-tag</v-icon>
          </v-btn>
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
import VTextSend from '~/components/molecules/VTextSend'
export default {
  components: {
    VTextSend,
    VPostImage
  }
}
</script>

<style scoped>
.post {
  width: 100%;
  height: 80px;
}
.container {
  max-width: 600px;
  background: rgba(250, 250, 250, 0.95);
}
</style>
