<template>
  <v-card>
    <v-toolbar dark>
      <v-btn icon dark @click="click">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>New Room</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn dark text @click="create">Save</v-btn>
      </v-toolbar-items>
      <template v-slot:extension>
        <v-tabs v-model="tabs" icons-and-text grow>
          <v-tab> Recomend <v-icon>mdi-toolbox</v-icon> </v-tab>

          <v-tab> Customize<v-icon>mdi-tools</v-icon> </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { CREATE } from '~/store/room/mutation-types'
export default {
  data() {
    return {
      tabs: null
    }
  },
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
