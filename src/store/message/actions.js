import { firestoreAction } from 'vuexfire'
import {
  SET_MESSAGE,
  INIT,
  LOAD_MORE,
  SET_LAST_VISIBLE,
  LOADING,
  END_OF_RECORD,
  POST,
  POST_TEXT,
  POST_IMAGE,
  INCREASE
} from './mutation-types'
import { collectionRef } from '~/store/room/actions'
import firebase from '~/plugins/firebase'

const PAGENATION_KEY = 'timestamp'
const TIMESTAMP = firebase.firestore.FieldValue.serverTimestamp()
const IMAGE_MESSAGE = 'Image posted'
const LOADING_IMAGE = require('~/assets/images/loader.gif')

async function getLastVisible(query) {
  const documentSnapshots = await query.get()
  if (documentSnapshots.empty) {
    return
  }
  const lastDoc = documentSnapshots.docs.length - 1
  const lastVisible = documentSnapshots.docs[lastDoc].data()
  return lastVisible
}

function getFirstPath(payload) {
  if (payload) {
    return payload + '/'
  } else {
    return 'anonymous/'
  }
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
  },

  baseMsg({ rootState }) {
    const baseMsg = {
      userID: rootState.user.id,
      name: rootState.user.name,
      profilePicUrl: rootState.user.photoURL,
      timestamp: TIMESTAMP
    }
    return baseMsg
  },

  async [POST]({ dispatch, rootState }, payload) {
    const docRef = collectionRef().doc(rootState.room.uid)
    const baseMsg = await dispatch('baseMsg')
    const msg = Object.assign(baseMsg, payload)

    const ref = await docRef
      .collection('messages')
      .add(msg)
      .catch((error) => console.log(error))

    return { ref, msg }
  },

  async [INCREASE]({ dispatch }, payload) {
    const recent = {
      recent: payload,
      field: 'msgCount',
      increment: 1
    }
    await dispatch(`room/${INCREASE}`, recent, { root: true })
  },

  async [POST_TEXT]({ dispatch }, payload) {
    const { msg } = await dispatch(POST, payload)
    dispatch(INCREASE, msg)
  },

  async [POST_IMAGE]({ dispatch, rootState }, payload) {
    const addMsg = {
      imageURL: LOADING_IMAGE
    }
    const { ref, msg } = await dispatch(POST, addMsg)
    msg.text = IMAGE_MESSAGE
    dispatch(INCREASE, msg)
    const firstPath = getFirstPath(rootState.user.isAuth)
    const filePath = firstPath + ref.id + '/' + payload.name
    const storageRef = firebase.storage().ref('images')
    const fileSnapshot = await storageRef.child(filePath).put(payload)
    const url = await fileSnapshot.ref.getDownloadURL()
    ref
      .update({
        imageURL: url
      })
      .catch((error) => console.log(error))
  }
}
