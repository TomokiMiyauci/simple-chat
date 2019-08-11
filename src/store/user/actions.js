import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_USERS,
  IS_AUTH,
  LOGIN,
  LOGOUT
} from './mutation-types'
import firebase from '~/plugins/firebase'

export default {
  async [LOGIN]({ commit, dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        const user = firebase.auth().currentUser
        dispatch(SET_USERS, user)
      })
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
  [SET_USERS]({ commit }, payload) {
    commit(SET_ID, payload.uid)
    commit(SET_NAME, payload.displayName)
    commit(SET_PHOTO_URL, payload.photoURL)
    commit(IS_AUTH, !!payload)
  }
}
