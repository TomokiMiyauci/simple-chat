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
      return val.getHours() + ':' + val.getMinutes()
    }
  },
  props: {
    avator: {
      type: Object,
      default: null
    },
    message: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
