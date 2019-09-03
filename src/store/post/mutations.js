import { SET_TEXT, SET_IMAGE, SET_TAG } from './mutation-types'
export default {
  [SET_TEXT](state, payload) {
    state.text = payload
  },

  [SET_IMAGE](state, payload) {
    state.image = payload
  },

  [SET_TAG](state, payload) {
    state.tag = payload
  }
}
