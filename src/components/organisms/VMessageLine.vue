<template>
  <v-row :justify="justify(message)" align-content="center">
    <v-col cols="auto">
      <v-messageTimestamp :is-own="isOwnPost(message)" :message="message">
      </v-messageTimestamp>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import VMessageTimestamp from '~/components/molecules/VMessageTimestamp'
export default {
  components: {
    VMessageTimestamp
  },
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapState('user', ['id'])
  },

  methods: {
    isOwnPost(val) {
      if (val.userID && this.id === val.userID) {
        return true
      }
      return false
    },

    justify(pay) {
      return this.isOwnPost(pay) ? 'end' : 'start'
    }
  }
}
</script>

<style></style>
