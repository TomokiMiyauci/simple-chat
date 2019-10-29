<template>
  <the-rooms></the-rooms>
</template>

<script>
import { mapActions } from 'vuex'
import TheRooms from '~/components/organisms/TheRooms'
import { INIT } from '~/store/room/mutation-types'
export default {
  components: {
    TheRooms
  },

  created() {
    this.INIT()
  },

  methods: {
    ...mapActions('room', [INIT])
  }
}
</script>

<style></style>
