<template>
  <div>
    <v-toolbar>
      <v-text-field
        rounded
        outlined
        hide-details
        prepend-inner-icon="mdi-comment-search"
        single-line
      ></v-text-field>
      <the-create-room></the-create-room>
    </v-toolbar>
  </div>
</template>

<script>
import TheCreateRoom from '~/components/organisms/TheCreateRoom'
import firebase from '~/plugins/firebase'
export default {
  components: { TheCreateRoom },
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
