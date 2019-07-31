<template>
  <div>
    <v-layout align-center justify-end py-2>
      <span class="pr-1 overline">{{ message.timestamp | getHHMM }}</span>
      <v-chip> {{ message.text }} </v-chip>
    </v-layout>
  </div>
</template>

<script>
export default {
  filters: {
    getHHMM(val) {
      if (!val) {
        return
      }
      const date = val.toDate()
      return date.getHours() + ':' + date.getMinutes()
    }
  },
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
