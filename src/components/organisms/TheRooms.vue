<template>
  <v-card class="mx-auto" flat>
    <v-list two-line>
      <template v-for="(item, index) in rooms">
        <v-list-item :key="item.uid" :to="`/rooms/${item.id}`">
          <v-list-item-avatar>
            <v-img
              :src="
                item.roomPicUrl
                  ? item.roomPicUrl
                  : require('~/assets/images/new.png')
              "
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              item.name ? item.name : 'New Room'
            }}</v-list-item-title>
            <v-list-item-subtitle v-if="item.recent.text" class="pt-1">
              <v-avatar size="30">
                <v-img
                  :src="
                    item.recent.profilePicUrl
                      ? item.recent.profilePicUrl
                      : require('~/assets/images/anonymous.jpg')
                  "
              /></v-avatar>
              {{ item.recent.text }}</v-list-item-subtitle
            >
            <v-list-item-subtitle v-else class="pt-1"
              >No message</v-list-item-subtitle
            >
            <v-list-item-subtitle class="pt-1">
              <v-chip label color="yellow darken-3" outlined>
                <v-icon left>mdi-eye</v-icon>{{ item.viewer }}</v-chip
              >
              <v-chip label color="blue darken-1" outlined>
                <v-icon left>mdi-message-text</v-icon
                >{{ item.msgCount }}</v-chip
              >
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click.prevent="click">
              <v-icon color="grey lighten-1">mdi-qrcode</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="index" :inset="item.inset" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    rooms: {
      type: Array,
      required: true
    }
  },
  methods: {
    click() {
      alert()
    }
  }
}
</script>

<style></style>
