<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8" lg="5" xl="4">
        <v-subheader inset>{{ sortedByName }}</v-subheader>
        <v-room-line v-if="alignedBy === 'LINE'" :rooms="getRooms">
        </v-room-line>
        <v-room-block-wrapper
          v-else-if="alignedBy === 'BLOCK'"
          :rooms="getRooms"
        ></v-room-block-wrapper>
      </v-col>
      <!-- <v-col
        class="fill-height"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        :class="{ 'hidden-xs-only': isOnlyRoom }"
      >
        <the-messages> </the-messages>
      </v-col> -->
    </v-row>
  </v-container>
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
    ...mapState('room', ['rooms', 'privateRooms', 'uid']),
    ...mapGetters('user', ['alignedBy']),
    ...mapGetters('user', ['sortedByName']),

    getRooms() {
      return this.isPrivate ? this.privateRooms : this.rooms
    },

    isPrivate() {
      const re = /\/rooms\/private$/
      return re.test(this.$route.path)
    },

    ismobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isOnlyMsg() {
      if (this.ismobile && !this.uid) {
        return false
      }
      return true
    },

    isOnlyRoom() {
      if (this.ismobile && !!this.uid) {
        return false
      }
      return true
    }
  }
}
</script>

<style></style>
