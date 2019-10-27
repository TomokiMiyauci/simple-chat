import { SHOW, HIDE, HIDE_ALL, SWITCH } from './mutation-types'

export default {
  [SHOW]({ commit }, payload) {
    commit(SHOW, payload)
  },

  [HIDE]({ commit }, payload) {
    commit(HIDE, payload)
  },

  [HIDE_ALL]({ commit }) {
    commit(HIDE_ALL)
  },

  [SWITCH]({ dispatch, getters }, payload) {
    if (getters.isHas(payload)) {
      dispatch(HIDE, payload)
    } else {
      dispatch(SHOW, payload)
    }
  }
}
