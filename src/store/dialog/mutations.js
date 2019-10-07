import { SHOW, HIDE, HIDE_ALL } from './mutation-types'
export default {
  [SHOW](state, payload) {
    if (!state.dialogs.includes(payload)) {
      state.dialogs.push(payload)
    }
  },

  [HIDE](state, payload) {
    state.dialogs.pop(payload)
  },

  [HIDE_ALL](state) {
    state.dialogs = []
  }
}
