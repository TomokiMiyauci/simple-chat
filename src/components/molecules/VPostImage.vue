<template>
  <div>
    <v-btn text icon @click="click">
      <v-icon>mdi-image</v-icon>
    </v-btn>
    <input type="file" style="visibility: hidden;" @change="onFileChange" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  computed: {
    ...mapState('user', ['id', 'name', 'photoURL', 'isAuth'])
  },
  methods: {
    click() {
      document.querySelector('input[type=file]').click()
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const file = files[0]
      // Store the file data encoded as data URL in the result property of reader
      this.sendImage(file)
    },
    async sendImage(file) {
      const msg = {
        userID: this.id,
        name: this.name,
        imageURL: require('~/assets/images/loader.gif'),
        profilePicUrl: this.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
      await firebase
        .firestore()
        .collection('messages')
        .add(msg)
        .then((messageRef) => {
          let filePath
          const storageRef = firebase.storage().ref('images')
          if (this.isAuth) {
            filePath = this.id + '/' + messageRef.id + '/' + file.name
          } else {
            filePath = 'anonimus' + '/' + messageRef.id + '/' + file.name
          }
          storageRef
            .child(filePath)
            .put(file)
            .then((fileSnapshot) => {
              fileSnapshot.ref.getDownloadURL().then((url) => {
                console.log(url)
                messageRef.update({
                  imageURL: url
                })
              })
            })
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style></style>
