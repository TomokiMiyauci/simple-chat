<template>
  <v-row class="ma-1">
    <v-col xs="12" sm="12" md="6" lg="6" xl="6">
      <v-card>
        <v-subheader inset>{{ sortedByName }}</v-subheader>
        <v-room-line v-if="alignedBy === 'LINE'" :rooms="getRooms">
        </v-room-line>
        <v-room-block-wrapper
          v-else-if="alignedBy === 'BLOCK'"
          :rooms="getRooms"
        ></v-room-block-wrapper>
      </v-card>
    </v-col>
    <v-col xs="12" sm="12" md="6" lg="6" xl="6">
      <the-messages> </the-messages>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheMessages from '~/components/organisms/TheMessages'
import VRoomBlockWrapper from '~/components/molecules/VRoomBlockWrapper'
import VRoomLine from '~/components/molecules/VRoomLine'
export default {
  components: {
    VRoomLine,
    VRoomBlockWrapper,
    TheMessages
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
