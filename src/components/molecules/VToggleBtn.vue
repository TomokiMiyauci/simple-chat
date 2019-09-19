<template>
  <v-btn-toggle v-model="toggle_exclusive" rounded>
    <v-btn>
      <v-icon>mdi-ballot-outline</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-view-grid</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive: null
    }
  }
}
</script>

<style></style>
