import { firestoreAction } from 'vuexfire'
import {
  SET_MESSAGE,
  INIT,
  LOAD_MORE,
  SET_LAST_VISIBLE,
  LOADING,
  END_OF_RECORD
} from './mutation-types'
import firebase from '~/plugins/firebase'

const PAGENATION_KEY = 'timestamp'

async function getLastVisible(query) {
  const documentSnapshots = await query.get()
  if (documentSnapshots.empty) {
    return
  }
  const lastDoc = documentSnapshots.docs.length - 1
  const lastVisible = documentSnapshots.docs[lastDoc].data()
  return lastVisible
}

export default {
  bindMessagesRef: firestoreAction(
    async ({ bindFirestoreRef, state, dispatch }) => {
      const baseQuery = await dispatch('baseQuery')
      bindFirestoreRef('messages', baseQuery.limit(state.limit))
    }
  ),

  baseQuery({ rootState }) {
    return firebase
      .firestore()
      .collection('rooms')
      .doc(rootState.room.uid)
      .collection('messages')
      .orderBy(PAGENATION_KEY, 'desc')
  },

  async [INIT]({ dispatch, state }) {
    dispatch('bindMessagesRef')
    const baseQuery = await dispatch('baseQuery')
    const firstQuery = baseQuery.limit(state.limit)
    // Get the last visible document
    dispatch(SET_LAST_VISIBLE, firstQuery)
  },

  async [SET_LAST_VISIBLE]({ commit }, payload) {
    const lastVisible = await getLastVisible(payload)
    commit(SET_LAST_VISIBLE, lastVisible)
  },

  async [SET_MESSAGE]({ commit }, payload) {
    const querySnapshot = await payload.get()
    querySnapshot.forEach((documentSnapshot) => {
      commit(SET_MESSAGE, documentSnapshot.data())
    })
  },

  async [LOAD_MORE]({ state, dispatch, commit }) {
    const baseQuery = await dispatch('baseQuery')
    const nextQuery = baseQuery
      .startAfter(state.lastVisible[PAGENATION_KEY])
      .limit(state.limit)
    const isEndOfRecord = await dispatch('isEndOfRecord', nextQuery)
    commit(LOADING, true)
    if (isEndOfRecord) {
      dispatch(SET_MESSAGE, nextQuery)
      await dispatch(SET_LAST_VISIBLE, nextQuery)
    }
    commit(LOADING, false)
  },

  async isEndOfRecord({ commit, state }, ref) {
    const documentSnapshot = await ref.get()
    if (state.isEndOfRecord) {
      return false
    }
    if (documentSnapshot.empty) {
      commit(END_OF_RECORD, true)
      return false
    }
    return true
  }
}
