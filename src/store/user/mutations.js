import { SET_NAME, SET_PHOTO_URL, IS_AUTH } from './mutation-types'
export default {
  [SET_NAME](state, payload) {
    state.name = payload
  },
  [SET_PHOTO_URL](state, payload) {
    state.photoURL = payload
  },
  [IS_AUTH](state, payload) {
    state.isAuth = payload
  }
}
