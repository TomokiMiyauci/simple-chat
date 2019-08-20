import { firestoreAction } from 'vuexfire'
import { QUERY_SNAPSHOT } from './mutation-types'
import firebase from '~/plugins/firebase'

function baseQuery() {
  return firebase
    .firestore()
    .collection('messages')
    .orderBy('timestamp', 'desc')
}
export default {
  [QUERY_SNAPSHOT]({ commit, dispatch }) {
    dispatch('bindMessagesRef')
  },
  bindMessagesRef: firestoreAction(({ bindFirestoreRef, state }) => {
    bindFirestoreRef('messages', baseQuery().limit(state.limit))
  })
}
