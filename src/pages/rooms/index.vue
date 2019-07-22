<template>
  <div>
    <v-room-list />
  </div>
</template>

<script>
import { mixin } from '~/mixins/navbar'
import VRoomList from '~/components/organisms/VRoomList'
export default {
  components: {
    VRoomList
  },
  mixins: [mixin],
  data: () => ({ title: 'room' })
}
</script>

<style></style>
