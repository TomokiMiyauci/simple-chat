import { firestoreAction } from 'vuexfire'
import { INIT } from './mutation-types'
import firebase from '~/plugins/firebase'
export default {
  bindRoomsRef: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef(
      'rooms',
      firebase
        .firestore()
        .collection('rooms')
        .orderBy('recent.timestamp', 'desc')
    )
  }),

  [INIT]({ dispatch }) {
    dispatch('bindRoomsRef')
  }
}
