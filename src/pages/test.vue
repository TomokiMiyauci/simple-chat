<template>
  <div>
    <v-message :messages="messages.slice().reverse()"> </v-message>
  </div>
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
  },
  methods: {
    click() {
      this.j.push(2)
    }
  }
}
</script>

<style></style>
