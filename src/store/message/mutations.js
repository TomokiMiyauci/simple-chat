import { vuexfireMutations } from 'vuexfire'
import { GET } from './mutation-types'

export default {
  [GET](state, payload) {
    state.messages.push(payload)
  },
  loading(state, payload) {
    state.isLoading = payload
  },
  end(state, payload) {
    state.isEnd = payload
  },
  ...vuexfireMutations
}
