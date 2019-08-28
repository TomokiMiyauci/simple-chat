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
import firebase from '~/plugins/firebase'
export default {
  methods: {
    click() {
      this.$emit('click')
    },
    create() {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      firebase
        .firestore()
        .collection('rooms')
        .add({
          name: 'New Room',
          timestamp,
          recent: {
            timestamp
          }
        })
      this.click()
    }
  }
}
</script>

<style></style>
