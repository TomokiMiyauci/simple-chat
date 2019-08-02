<template>
  <div class="text-center">
    <v-chip>{{ message.timestamp | toDate }}</v-chip>
  </div>
</template>

<script>
export default {
  filters: {
    toDate(val) {
      if (!val) {
        return
      }
      const date = val.toDate()
      return date.getMonth() + 1 + '月' + date.getDate() + '日'
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
