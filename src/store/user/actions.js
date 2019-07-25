import {
  SET_NAME,
  SET_PHOTO_URL,
  IS_AUTH,
  LOGIN,
  LOGOUT
} from './mutation-types'
import firebase from '~/plugins/firebase'

export default {
  [LOGIN]({ commit }) {
    const user = firebase.auth().currentUser
    commit(SET_NAME, user.displayName)
    commit(SET_PHOTO_URL, user.photoURL)
    commit(IS_AUTH, !!user)
  },
  [LOGOUT]({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_NAME, null)
        commit(SET_PHOTO_URL, null)
        commit(IS_AUTH, null)
      })
  }
}
