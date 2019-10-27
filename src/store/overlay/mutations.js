import { SHOW, HIDE, HIDE_ALL } from './mutation-types'
export default {
  [SHOW](state, payload) {
    if (!state.overlays.includes(payload)) {
      state.overlays.push(payload)
    }
  },

  [HIDE](state, payload) {
    state.overlays.pop(payload)
  },

  [HIDE_ALL](state) {
    state.overlays = []
  }
}
