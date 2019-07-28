import {
  SET_NAME,
  SET_PHOTO_URL,
  IS_AUTH,
  LOGIN,
  LOGOUT
} from './mutation-types'
import firebase from '~/plugins/firebase'

export default {
  async [LOGIN]({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        const user = firebase.auth().currentUser
        console.log(user.displayName)
        commit(SET_NAME, user.displayName)
        commit(SET_PHOTO_URL, user.photoURL)
        commit(IS_AUTH, !!user)
      })
  },
  async [LOGOUT]({ commit }) {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_NAME, null)
        commit(SET_PHOTO_URL, null)
        commit(IS_AUTH, null)
      })
      .catch((error) => console.log(error))
  }
}
