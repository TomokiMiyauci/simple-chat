import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/messaging'

Vue.use(firestorePlugin)
const firebaseConfig = {
  apiKey: 'AIzaSyDw8lIFcaFlEeb-6Ilu4cg6ySqu04M5soQ',
  authDomain: 'simplechat-6.firebaseapp.com',
  databaseURL: 'https://simplechat-6.firebaseio.com',
  projectId: 'simplechat-6',
  storageBucket: 'simplechat-6.appspot.com',
  messagingSenderId: '458637880675',
  appId: '1:458637880675:web:750fe2edfd3ffd99'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// export const firestore = firebase.firestore()
export default firebase
// export const auth = firebase.auth()

// export const auth = firebase.auth()
