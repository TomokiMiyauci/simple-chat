import { CHANGE } from './mutation-types'
export default {
  [CHANGE](state, payload) {
    state.progress = payload
  }
}
