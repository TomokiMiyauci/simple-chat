<template>
  <div>
    <the-message />
  </div>
</template>

<script>
import { mixin } from '~/mixins/navbar'
import TheMessage from '~/components/templates/TheMessage'
export default {
  layout: 'talk',
  components: {
    TheMessage
  },

  mixins: [mixin],
  data: () => ({ title: 'talk' })
}
</script>

<style></style>
