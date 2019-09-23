import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_PHOTO,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URL,
  SET_NEW_ORIGINAL_PHOTO,
  SET_NEW_PHOTO_URL,
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

  [IS_AUTH](state, payload) {
    state.isAuth = payload
  },

  [SET_PHOTO](state, payload) {
    state.new.photo = payload
  },

  [SET_NEW_ORIGINAL_PHOTO](state, payload) {
    state.new.origPhoto = payload
  },

  [SET_NEW_ORIGINAL_PHOTO_URL](state, payload) {
    state.new.origPhotoURL = payload
  },

  [SET_NEW_PHOTO_URL](state, payload) {
    state.new.photoURL = payload
  },

  [SET_NEW_NAME](state, payload) {
    state.new.name = payload
  }
}
