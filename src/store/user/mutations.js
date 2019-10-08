import {
  SET_ID,
  SET_NAME,
  SET_PHOTO_URL,
  SET_NEW_NAME,
  SET_NEW_ORIGINAL_PHOTO_URI,
  SET_NEW_ORIGINAL_PHOTO,
  SET_NEW_PHOTO_URI,
  IS_AUTH,
  SORTED_BY,
  ALIGNED_BY
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

  [SET_NEW_ORIGINAL_PHOTO](state, payload) {
    state.new.origPhoto = payload
  },

  [SET_NEW_ORIGINAL_PHOTO_URI](state, payload) {
    state.new.origPhotoURI = payload
  },

  [SET_NEW_PHOTO_URI](state, payload) {
    state.new.photoURI = payload
  },

  [SET_NEW_NAME](state, payload) {
    state.new.name = payload
  },

  [SORTED_BY](state, payload) {
    state.sortedBy = payload
  },

  [ALIGNED_BY](state, payload) {
    state.alignedBy = payload
  }
}
