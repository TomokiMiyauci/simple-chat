<template>
  <v-message :messages="messages.slice().reverse()"> </v-message>
</template>

<script>
import VMessage from '~/components/organisms/VMessage'
import firebase from '~/plugins/firebase'

export default {
  components: {
    VMessage
  },
  data() {
    return {
      messages: []
    }
  },
  firestore: {
    messages: firebase
      .firestore()
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .limit(10)
  }
}
</script>

<style></style>
