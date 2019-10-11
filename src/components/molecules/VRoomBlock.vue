<template>
  <v-card height="170px" width="170px" class="ma-2 " @click="click">
    <v-img
      :src="
        room.roomPicUrl
          ? room.roomPicUrl
          : require('~/assets/images/new-room.png')
      "
      aspect-ratio="1"
      class="black--text"
      max-height="98px"
    >
      <v-card-title class="align-end fill-height">{{
        room.name ? room.name : 'New Room'
      }}</v-card-title></v-img
    >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            :src="
              room.recent.profilePicUrl
                ? room.recent.profilePicUrl
                : require('~/assets/images/anonymous.jpg')
            "
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle v-if="room.recent.text">
            {{ room.recent.text }}</v-list-item-subtitle
          >
          <v-list-item-subtitle v-else> No message</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters('user', ['sortedByName'])
  },

  methods: {
    click() {
      this.$router.push(`/rooms/${this.room.id}`)
    }
  }
}
</script>

<style></style>
