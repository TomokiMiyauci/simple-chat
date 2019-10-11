<template>
  <the-rooms></the-rooms>
</template>

<script>
import { mapActions } from 'vuex'
import TheRooms from '~/components/organisms/TheRooms'
import { INIT_PRIVATE } from '~/store/room/mutation-types'
export default {
  components: {
    TheRooms
  },

  created() {
    this.INIT_PRIVATE()
  },

  methods: {
    ...mapActions('room', [INIT_PRIVATE])
  }
}
</script>

<style></style>
