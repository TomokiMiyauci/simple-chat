import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_USER,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URI,
  SET_NEW_PHOTO_URI,
  SET_NEW_ORIGINAL_PHOTO,
  IS_AUTH,
  LOGIN,
  LOGOUT,
  UPDATE,
  RESET_NEW,
  SORTED_BY,
  ALIGNED_BY
} from './mutation-types'
import firebase from '~/plugins/firebase'

const PROFILE_PHOTO_STORAGE_ROOT = 'profilePhoto'

export default {
  [LOGIN]({ commit, dispatch }, payload) {
    const user = payload
    dispatch(SET_USER, user)
  },

  async [LOGOUT]({ commit }) {
    this.$router.push('/')
    await firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_ID, null)
        commit(SET_NAME, null)
        commit(SET_PHOTO_URL, null)
        commit(IS_AUTH, null)
      })
      .catch((error) => console.log(error))
  },

  [SET_USER]({ commit }, payload) {
    commit(SET_ID, payload.uid)
    commit(SET_NAME, payload.displayName)
    commit(SET_PHOTO_URL, payload.photoURL)
    commit(IS_AUTH, !!payload)
  },

  [SET_NEW_ORIGINAL_PHOTO]({ commit }, payload) {
    commit(SET_NEW_ORIGINAL_PHOTO, payload)
  },

  [SET_NEW_ORIGINAL_PHOTO_URI]({ commit, state, dispatch }) {
    const render = new FileReader()
    render.readAsDataURL(state.new.origPhoto)
    render.onload = () => {
      commit(SET_NEW_ORIGINAL_PHOTO_URI, render.result)
      dispatch('dialog/SHOW', 'the-avatar-cropper', { root: true })
    }
  },

  [SET_NEW_PHOTO_URI]({ commit }, payload) {
    commit(SET_NEW_PHOTO_URI, payload)
  },

  [SET_NEW_NAME]({ commit }, payload) {
    commit(SET_NEW_NAME, payload)
  },

  [RESET_NEW]({ commit }) {
    const mutations = [
      SET_NEW_ORIGINAL_PHOTO,
      SET_NEW_ORIGINAL_PHOTO_URI,
      SET_NEW_PHOTO_URI
    ]
    mutations.forEach((mutation) => {
      commit(mutation, null)
    })
  },

  async [UPDATE]({ state, dispatch }) {
    const user = firebase.auth().currentUser
    if (!state.new.photoURI) {
      await user.updateProfile({
        displayName: state.new.name
      })
      dispatch(SET_USER, user)
    } else {
      const filePath = state.id + '/newPhotoURL'
      const ref = firebase
        .storage()
        .ref(PROFILE_PHOTO_STORAGE_ROOT)
        .child(filePath)
      const snapshot = await ref.putString(state.new.photoURI, 'data_url')
      const url = await snapshot.ref.getDownloadURL()
      if (user) {
        await user.updateProfile({
          displayName: state.new.name || state.name,
          photoURL: url
        })
        dispatch(SET_USER, user)
      }
    }
  },

  async [SORTED_BY]({ commit, dispatch, state }, payload) {
    await commit(SORTED_BY, payload)
    dispatch('room/INIT', null, { root: true })
    if (state.isAuth) {
      dispatch('room/INIT_PRIVATE', null, { root: true })
    }
  },

  [ALIGNED_BY]({ commit }, payload) {
    commit(ALIGNED_BY, payload)
  }
}
