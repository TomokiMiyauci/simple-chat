<template>
  <div>
    <v-btn color="success" @click="click">
      text
    </v-btn>
    {{ messages }}
  </div>
</template>

<script>
import { firestore } from '~/plugins/firebase'
export default {
  data() {
    return {
      messages: [],
      subscribe: null
    }
  },
  firestore: {
    messages: firestore.collection('test')
  },
  methods: {
    click() {
      firestore
        .collection('test')
        .get()
        .then((res) => {
          console.log(res)
          if (res.empty) {
            console.log('No matching documents.')
            return
          }
          res.forEach((doc) => this.messages.push(doc.data()))
        })
        .catch((err) => console.log('Error getting documents', err))
    }
  }
}
</script>

<style></style>
