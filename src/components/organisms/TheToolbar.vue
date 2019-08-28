<template>
  <v-toolbar>
    <v-text-field
      rounded
      outlined
      hide-details
      prepend-inner-icon="mdi-comment-search"
      single-line
    ></v-text-field>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-pencil-box-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Room</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-btn dark text @click="click">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    async click() {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      const ref = await firebase
        .firestore()
        .collection('rooms')
        .add({
          name: 'New Room',
          timestamp,
          recent: {
            timestamp
          }
        })
      this.dialog = false
      console.log(ref)
      // console.log(b)
    }
  }
}
</script>

<style></style>
