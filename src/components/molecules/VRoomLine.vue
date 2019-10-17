<template>
  <v-card style="overflow: scroll;" height="74vh">
    <v-list two-line subheader>
      <v-list-item-group>
        <v-list-item
          v-for="item in rooms"
          :key="item.uid"
          color="indigo"
          @click.stop="click(item.id)"
        >
          <v-list-item-avatar tile size="50">
            <v-img
              :src="
                item.roomPicUrl
                  ? item.roomPicUrl
                  : require('~/assets/images/new-room.png')
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
            <v-qrcode-btn :value="item.id"></v-qrcode-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>

      <v-divider />
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { INIT } from '~/store/message/mutation-types'
import VQrcodeBtn from '~/components/molecules/VQrcodeBtn'
export default {
  components: {
    VQrcodeBtn
  },

  props: {
    rooms: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapGetters('user', ['sortedByName'])
  },

  methods: {
    ...mapMutations('room', ['setUid']),

    ...mapActions('message', [INIT]),

    click(payload) {
      this.setUid(payload)
      this.INIT()
    }
  }
}
</script>

<style></style>
