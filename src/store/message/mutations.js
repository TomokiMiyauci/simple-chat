import { POST } from './mutation-types'
export default {
  [POST](state, payload) {
    state.messages.push(payload)
  }
}
