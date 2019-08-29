<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="click">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>New Room</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn dark text @click="create">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { CREATE } from '~/store/room/mutation-types'
export default {
  methods: {
    ...mapActions('room', [CREATE]),
    click() {
      this.$emit('click')
    },
    create() {
      this.CREATE()
      this.click()
    }
  }
}
</script>

<style></style>
