import { firestoreAction } from 'vuexfire'
import { INIT, CREATE, UPDATE } from './mutation-types'
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

  getOne({ state }, payload) {
    return collectionRef()
      .doc(payload || state.uid)
      .get()
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
  },

  [UPDATE]({ state }, payload) {
    collectionRef()
      .doc(state.uid)
      .update(payload)
  }
}
