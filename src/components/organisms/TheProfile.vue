<template>
  <v-container grid-list-xs>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="src" max-width="344" max-height="344">
            <h2 class="title ml-1">Profile</h2>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn @click="click">upload image</v-btn>
              </v-overlay>
            </v-fade-transition></v-img
          >
          <v-card-text>
            <v-text-field v-model="changeName" label="Name"></v-text-field>
            <span class="primary--text subtitle-2">64 Reviews</span>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="update">update</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
    <input type="file" style="visibility: hidden;" @change="onFileChange" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  data: () => ({
    overlay: false,
    file: null,
    changeName: '',
    renderImage: null
  }),
  computed: {
    ...mapState('user', ['name', 'photoURL']),
    src() {
      return this.file ? this.renderImage : this.photoURL
    }
  },
  created() {
    this.changeName = this.name
  },
  methods: {
    ...mapActions('user', ['SET_USERS']),
    click() {
      document.querySelector('input[type=file]').click()
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const file = files[0]
      // Store the file data encoded as data URL in the result property of reader
      const render = new FileReader()
      render.readAsDataURL(file)
      render.onload = () => {
        this.renderImage = render.result
        this.file = file
      }
    },
    update() {
      const user = firebase.auth().currentUser
      if (!this.file) {
        user
          .updateProfile({
            displayName: this.changeName
          })
          .then(() => {
            this.SET_USERS(user)
          })
      } else {
        const filePath = firebase.auth().currentUser.uid + '/' + this.file.name
        const ref = firebase
          .storage()
          .ref('profilePhoto')
          .child(filePath)
        ref.put(this.file).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            if (user) {
              user
                .updateProfile({
                  displayName: this.changeName,
                  photoURL: url
                })
                .then(() => {
                  this.SET_USERS(user)
                })
            }
          })
        })
      }
    }
  }
}
</script>

<style></style>
