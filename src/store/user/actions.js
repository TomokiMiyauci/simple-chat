import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_USER,
  SET_PHOTO,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URL,
  SET_NEW_PHOTO_URL,
  SET_NEW_ORIGINAL_PHOTO,
  IS_AUTH,
  LOGIN,
  LOGOUT,
  UPDATE
} from './mutation-types'
import firebase from '~/plugins/firebase'

const PROFILE_PHOTO_STORAGE_ROOT = 'profilePhoto'

export default {
  [LOGIN]({ commit, dispatch }, payload) {
    const user = payload
    dispatch(SET_USER, user)
  },

  async [LOGOUT]({ commit }) {
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

  [SET_PHOTO]({ commit }, payload) {
    commit(SET_PHOTO, payload)
  },

  [SET_NEW_ORIGINAL_PHOTO]({ commit }, payload) {
    commit(SET_NEW_ORIGINAL_PHOTO, payload)
  },

  [SET_NEW_ORIGINAL_PHOTO_URL]({ commit, state }) {
    const render = new FileReader()
    render.readAsDataURL(state.new.origPhoto)
    render.onload = () => {
      commit(SET_NEW_ORIGINAL_PHOTO_URL, render.result)
    }
  },

  [SET_NEW_PHOTO_URL]({ commit }) {
    commit()
  },

  [SET_NEW_NAME]({ commit }, payload) {
    commit(SET_NEW_NAME, payload)
  },

  async [UPDATE]({ state, dispatch }) {
    const user = firebase.auth().currentUser
    if (!state.new.photo) {
      await user.updateProfile({
        displayName: state.new.name
      })
      dispatch(SET_USER, user)
    } else {
      const filePath = state.uid + '/' + state.new.photo.name
      const ref = firebase
        .storage()
        .ref(PROFILE_PHOTO_STORAGE_ROOT)
        .child(filePath)
      const snapshot = await ref.putString(state.new.photo, 'data_url')
      const url = await snapshot.ref.getDownloadURL()
      if (user) {
        await user.updateProfile({
          displayName: state.new.name,
          photoURL: url
        })
        dispatch(SET_USER, user)
      }
    }
  }
}
