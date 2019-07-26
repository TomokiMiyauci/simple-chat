<template>
  <v-card>
    <v-card-title class="headline justify-center primary-title">
      <slot name="title" />
    </v-card-title>

    <v-card-text>
      <slot name="text" />
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
