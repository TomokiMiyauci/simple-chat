<template>
  <div class="text-center">
    <v-btn dark color="orange darken-2" @click="snackbar = true">
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      color="primary"
      :timeout="timeout"
      :top="true"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: 'Success! Login',
    timeout: 1500
  })
}
</script>
