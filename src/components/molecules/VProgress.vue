<template>
  <div>
    <v-progress-circle v-if="status === 'PROGRESS'"></v-progress-circle>
    <v-success v-else-if="status === 'SUCCEED'"></v-success>
    <v-failure v-else-if="status === 'FAIL'"></v-failure>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VProgressCircle from '~/components/atoms/VProgressCircle'
import VSuccess from '~/components/atoms/VSuccess'
import VFailure from '~/components/atoms/VFailure'

export default {
  components: {
    VProgressCircle,
    VSuccess,
    VFailure
  },

  computed: {
    ...mapGetters('progress', ['status'])
  }
}
</script>

<style></style>
