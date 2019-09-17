<template>
  <v-card>
    <v-card-text>
      <v-subheader><v-icon>mdi-shield-account</v-icon>Permision</v-subheader>

      <v-switch
        v-model="isUseMic"
        prepend-icon="mdi-microphone"
        label="Use Microphone"
      ></v-switch>
      <v-switch
        v-model="isUseVideo"
        prepend-icon="mdi-video"
        label="Use Video"
      ></v-switch>
      <v-subheader><v-icon>mdi-tools</v-icon>Usability</v-subheader>

      <p>Number of messages to call as default</p>
      <v-slider
        v-model="preMsgNum"
        min="1"
        max="10"
        append-icon="mdi-message-text"
        prepend-icon="mdi-message-minus"
        thumb-label
        step="1"
        ticks="always"
      ></v-slider>
    </v-card-text>
    <v-card-actions>
      <v-btn>update</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isUseMic: false,
      isUseVideo: false,
      preMsgNum: 5
    }
  }
}
</script>

<style></style>
