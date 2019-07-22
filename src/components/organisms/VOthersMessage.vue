<template>
  <div>
    <v-layout align-center py-1>
      <v-avatar>
        <v-img :src="avator.src" :alt="avator.id ? avator.id : ''" />
      </v-avatar>
      <v-chip> {{ message.text }} </v-chip>
      <span class="pl-1 overline">{{ message.timestamp | getHHMM }}</span>
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
