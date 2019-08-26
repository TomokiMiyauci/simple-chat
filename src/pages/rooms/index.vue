<template>
  <div>
    <the-toolbar></the-toolbar>
    <the-rooms :rooms="rooms"></the-rooms>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import TheRooms from '~/components/organisms/TheRooms'
import TheToolbar from '~/components/organisms/TheToolbar'
export default {
  components: {
    TheRooms,
    TheToolbar
  },
  layout: 'index',
  computed: {
    ...mapState('room', ['rooms'])
  },
  mounted() {
    this.load()
  },
  destroyed() {
    this.resetRoom()
  },
  methods: {
    ...mapMutations('room', ['resetRoom']),
    ...mapActions('room', ['load'])
  }
}
</script>

<style></style>
