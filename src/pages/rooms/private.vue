<template>
  <div>
    <the-rooms :rooms="privateRooms"></the-rooms>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TheRooms from '~/components/organisms/TheRooms'
import { INIT_PRIVATE } from '~/store/room/mutation-types'
export default {
  components: {
    TheRooms
  },

  computed: {
    ...mapState('room', ['privateRooms'])
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
