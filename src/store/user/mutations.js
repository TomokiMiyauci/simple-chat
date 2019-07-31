import { SET_ID, SET_NAME, SET_PHOTO_URL, IS_AUTH } from './mutation-types'
export default {
  [SET_ID](state, payload) {
    state.id = payload
  },
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
