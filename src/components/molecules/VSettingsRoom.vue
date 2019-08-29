<template>
  <v-card>
    <v-toolbar dark>
      <v-btn icon dark @click="click">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
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
        <v-card-actions>
          <v-btn @click="update">update</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { UPDATE } from '~/store/room/mutation-types'
export default {
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
    async init() {
      const documentSnapshot = await this.getOne()
      const data = documentSnapshot.data()
      console.log(data)
      this.roomName = data.name
    },
    click() {
      this.$emit('click')
    },
    update() {
      this.UPDATE({ name: this.roomName })
      this.click()
    }
  }
}
</script>

<style></style>
