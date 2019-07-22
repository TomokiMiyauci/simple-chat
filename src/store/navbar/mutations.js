import { SET_TITLE } from './mutation-types'
export default {
  [SET_TITLE](state, payload) {
    state.title = payload
  }
}
