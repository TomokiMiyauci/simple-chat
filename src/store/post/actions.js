import {
  SET_TEXT,
  SET_IMAGE,
  SET_TAG,
  SET_AUDIO,
  CLEAR,
  POST,
  POST_TEXT,
  POST_IMAGE,
  POST_AUDIO,
  INCREASE
} from './mutation-types'
import firebase from '~/plugins/firebase'
import { collectionRef } from '~/store/room/actions'

const TIMESTAMP = firebase.firestore.FieldValue.serverTimestamp()
const IMAGE_MESSAGE = 'Image posted'
const AUDIO_MESSAGE = 'Audio posted'
const LOADING_IMAGE = require('~/assets/images/loader.gif')
const ANONYMOUS_PATH = 'anonymous/'
const IMAGE_STORAGE_ROOT = 'images'
const AUDIO_STORAGE_ROOT = 'audio'

function scrollBottom() {
  window.scrollTo(0, document.body.clientHeight)
}

function getBaseMsg(payload) {
  const user = payload.user
  const baseMsg = {
    userID: user.id,
    name: user.name,
    profilePicUrl: user.photoURL,
    timestamp: TIMESTAMP
  }
  return baseMsg
}

function getAddMsg(payload) {
  if (payload.tag) {
    return { text: payload.text, tag: payload.tag }
  } else {
    return { text: payload.text }
  }
}

function getFirstPath(payload) {
  const user = payload.user
  if (user.isAuth) {
    return user.id + '/'
  } else {
    return ANONYMOUS_PATH
  }
}

export default {
  [SET_TEXT]({ commit }, payload) {
    commit(SET_TEXT, payload)
  },

  [SET_IMAGE]({ commit }, payload) {
    commit(SET_IMAGE, payload)
  },

  [SET_TAG]({ commit }, payload) {
    commit(SET_TAG, payload)
  },

  [SET_AUDIO]({ commit }, payload) {
    commit(SET_AUDIO, payload)
  },

  [CLEAR]({ dispatch }) {
    const actions = ['clearText', 'clearTag', 'clearImage', 'clearAudio']
    actions.forEach((action) => dispatch(action))
  },

  clearText({ commit }) {
    commit(SET_TEXT, null)
  },

  clearImage({ commit }) {
    commit(SET_IMAGE, null)
  },

  clearTag({ commit }) {
    commit(SET_TAG, null)
  },

  clearAudio({ commit }) {
    commit(SET_AUDIO, null)
  },

  async [POST]({ dispatch, rootState }, payload) {
    const docRef = collectionRef().doc(rootState.room.uid)
    const baseMsg = getBaseMsg(rootState)
    const msg = Object.assign(baseMsg, payload)

    const ref = await docRef
      .collection('messages')
      .add(msg)
      .catch((error) => console.log(error))

    return { ref, msg }
  },

  async [INCREASE]({ dispatch }, payload) {
    const recentMsg = {
      recent: payload,
      field: 'msgCount',
      increment: 1
    }
    await dispatch(`room/${INCREASE}`, recentMsg, { root: true })
  },

  async [POST_TEXT]({ dispatch, state }) {
    const addMsg = getAddMsg(state)
    const { msg } = await dispatch('POST', addMsg)
    scrollBottom()
    dispatch(INCREASE, msg)
    dispatch(CLEAR)
  },

  async [POST_IMAGE]({ dispatch, state, rootState }) {
    const addMsg = {
      imageURL: LOADING_IMAGE
    }
    const { ref, msg } = await dispatch('POST', addMsg)
    scrollBottom()
    msg.text = IMAGE_MESSAGE
    dispatch(INCREASE, msg)
    const firstPath = getFirstPath(rootState)
    const filePath = firstPath + ref.id + '/' + state.image.name
    const storageRef = firebase.storage().ref(IMAGE_STORAGE_ROOT)
    const fileSnapshot = await storageRef.child(filePath).put(state.image)
    const url = await fileSnapshot.ref.getDownloadURL()
    ref
      .update({
        imageURL: url
      })
      .catch((error) => console.log(error))
    dispatch(CLEAR)
  },

  async [POST_AUDIO]({ state, dispatch, rootState }) {
    if (!state.audio) {
      return
    }
    const addMsg = {
      imageURL: LOADING_IMAGE
    }
    const { ref, msg } = await dispatch('POST', addMsg)
    msg.text = AUDIO_MESSAGE
    scrollBottom()

    dispatch(INCREASE, msg)
    const firstPath = getFirstPath(rootState)
    const filePath = firstPath + ref.id + '/' + state.audio.size
    const storageRef = firebase.storage().ref(AUDIO_STORAGE_ROOT)
    const fileSnapshot = await storageRef.child(filePath).put(state.audio)
    const url = await fileSnapshot.ref.getDownloadURL()
    ref
      .update({
        audioURL: url,
        imageURL: firebase.firestore.FieldValue.delete()
      })
      .catch((error) => console.log(error))
    dispatch(CLEAR)
  }
}
