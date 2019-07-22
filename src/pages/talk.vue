<template>
  <div>
    <v-message />
  </div>
</template>

<script>
import { mixin } from '~/mixins/navbar'
import VMessage from '~/components/organisms/VMessage'
export default {
  layout: 'talk',
  components: {
    VMessage
  },
  mixins: [mixin],
  data: () => ({
    title: 'Talk'
  })
}
</script>

<style></style>
