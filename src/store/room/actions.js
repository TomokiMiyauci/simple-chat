import { firestoreAction } from 'vuexfire'
import { INIT, CREATE } from './mutation-types'
import firebase from '~/plugins/firebase'

function collectionRef() {
  return firebase.firestore().collection('rooms')
}

export default {
  bindRoomsRef: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef(
      'rooms',
      collectionRef().orderBy('recent.timestamp', 'desc')
    )
  }),

  [INIT]({ dispatch }) {
    dispatch('bindRoomsRef')
  },

  [CREATE]() {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    collectionRef().add({
      name: 'New Room',
      timestamp,
      recent: {
        timestamp
      }
    })
  }
}
