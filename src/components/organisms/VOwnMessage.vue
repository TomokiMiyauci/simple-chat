<template>
  <div>
    <v-layout align-center justify-end py-2>
      <span class="pr-1 overline">{{ message.timestamp | toHHMM }}</span>
      <v-callout :is-left="false">{{ message.text }}</v-callout>
    </v-layout>
  </div>
</template>

<script>
import VCallout from '~/components/atoms/VCallout'
export default {
  components: {
    VCallout
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
