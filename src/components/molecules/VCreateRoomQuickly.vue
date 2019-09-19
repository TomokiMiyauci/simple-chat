<template>
  <v-card>
    <v-form v-model="valid" @input="input">
      <v-subheader>Room Icon</v-subheader>
      <v-img :src="require('~/assets/images/new-room.png')">
        <v-btn absolute top left color="success">change</v-btn></v-img
      >
      <v-card-text>
        <v-text-field
          label="Room Name"
          value="New Room"
          :rules="[(v) => !!v || 'Room Name is required']"
        ></v-text-field>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false
    }
  },

  methods: {
    input() {
      if (this.valid) {
        this.$emit('valid', false)
      } else {
        this.$emit('valid', true)
      }
    }
  }
}
</script>
<style></style>
