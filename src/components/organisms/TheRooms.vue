<template>
  <div>
    <v-subheader inset>{{ sortedByName }}</v-subheader>
    <v-room-line v-if="alignedBy === 'LINE'" :rooms="getRooms"> </v-room-line>
    <v-room-block-wrapper
      v-else-if="alignedBy === 'BLOCK'"
      :rooms="getRooms"
    ></v-room-block-wrapper>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import VRoomBlockWrapper from '~/components/molecules/VRoomBlockWrapper'
import VRoomLine from '~/components/molecules/VRoomLine'
export default {
  components: {
    VRoomLine,
    VRoomBlockWrapper
  },

  computed: {
    ...mapState('room', ['rooms', 'privateRooms']),
    ...mapGetters('user', ['alignedBy']),
    ...mapGetters('user', ['sortedByName']),

    getRooms() {
      return this.isPrivate ? this.privateRooms : this.rooms
    },

    isPrivate() {
      const re = /\/rooms\/private$/
      return re.test(this.$route.path)
    }
  }
}
</script>

<style></style>
