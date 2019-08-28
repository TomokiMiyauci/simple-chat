<template>
  <div>
    <the-toolbar></the-toolbar>
    <the-rooms :rooms="rooms"></the-rooms>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TheRooms from '~/components/organisms/TheRooms'
import TheToolbar from '~/components/organisms/TheToolbar'
import { INIT } from '~/store/room/mutation-types'
export default {
  components: {
    TheRooms,
    TheToolbar
  },
  layout: 'index',
  computed: {
    ...mapState('room', ['rooms'])
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
