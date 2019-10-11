<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-row>
          <v-room-block
            v-for="room in rooms"
            :key="room.uid"
            :room="room"
          ></v-room-block>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VRoomBlock from '~/components/molecules/VRoomBlock'
export default {
  components: {
    VRoomBlock
  },

  props: {
    rooms: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
