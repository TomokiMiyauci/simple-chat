import { GET, LOGIN, LOGOUT } from './mutation-types'
export default {
  [GET](state, payload) {
    state.user = payload
  },
  [LOGIN](state, payload) {
    state.user = payload
  },
  [LOGOUT](state) {
    state.user = null
  }
}
