import { SET_TEXT, SET_IMAGE, SET_TAG, CLEAR } from './mutation-types'

export default {
  [SET_TEXT]({ commit }, payload) {
    commit(SET_TEXT, payload)
  },

  [SET_IMAGE]({ commit }, payload) {
    commit(SET_IMAGE, payload)
  },

  [SET_TAG]({ commit }, payload) {
    commit(SET_TAG, payload)
  },

  [CLEAR]({ dispatch }) {
    dispatch('clearText')
    dispatch('clearTag')
    dispatch('clearImage')
  },

  clearText({ commit }) {
    commit(SET_TEXT, null)
  },

  clearImage({ commit }) {
    commit(SET_IMAGE, null)
  },

  clearTag({ commit }) {
    commit(SET_TAG, null)
  }
}
