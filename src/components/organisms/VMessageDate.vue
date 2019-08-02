<template>
  <div class="text-center">{{ message.timestamp | toDate }}</div>
</template>

<script>
export default {
  filters: {
    toDate(val) {
      if (!val) {
        return
      }
      const date = val.toDate()
      return date.getMonth() + 1 + '/' + date.getDate()
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
