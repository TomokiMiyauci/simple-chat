<template>
  <v-card>
    <v-app-bar-close-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-toolbar-items>
        <v-btn text @click="update">update</v-btn>
      </v-toolbar-items>
    </v-app-bar-close-btn>
    <v-container grid-list-xs>
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="roomName"
            outlined
            prepend-inner-icon="mdi-rename-box"
            label="Room Name"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import { UPDATE } from '~/store/room/mutation-types'
export default {
  components: {
    VAppBarCloseBtn
  },

  data() {
    return {
      roomName: null
    }
  },

  computed: {
    ...mapState('room', ['uid'])
  },

  created() {
    this.init()
  },

  methods: {
    ...mapActions('room', ['getOne', UPDATE]),
    ...mapActions('dialog', ['HIDE']),

    async init() {
      const documentSnapshot = await this.getOne()
      const data = documentSnapshot.data()
      this.roomName = data.name
    },

    update() {
      this.UPDATE({ name: this.roomName })
      this.HIDE()
    }
  }
}
</script>

<style></style>
