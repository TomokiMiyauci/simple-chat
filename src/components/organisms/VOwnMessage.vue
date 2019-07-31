<template>
  <div>
    <v-layout align-center justify-end py-2>
      <span class="pr-1 overline">{{ message.timestamp | toHHMM }}</span>
      <v-chip> {{ message.text }} </v-chip>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
