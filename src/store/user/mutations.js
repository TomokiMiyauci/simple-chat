import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_USER,
  IS_AUTH
} from './mutation-types'
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
  [SET_USER](state, payload) {
    state.user = payload
  },
  [IS_AUTH](state, payload) {
    state.isAuth = payload
  }
}
