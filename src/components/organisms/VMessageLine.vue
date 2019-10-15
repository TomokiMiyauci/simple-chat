<template>
  <v-container grid-list-xl>
    <v-layout column :align-end="isOwnPost(message)">
      <v-flex>
        <v-messageTimestamp :is-own="isOwnPost(message)" :message="message">
        </v-messageTimestamp>
      </v-flex>
    </v-layout>
  </v-container>
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
    }
  }
}
</script>

<style></style>
