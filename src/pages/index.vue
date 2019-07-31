<template>
  <v-others-message :messages="messages"></v-others-message>
</template>

<script>
import VOthersMessage from '~/components/organisms/VOthersMessage'
import firebase from '~/plugins/firebase'
export default {
  components: {
    VOthersMessage
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
