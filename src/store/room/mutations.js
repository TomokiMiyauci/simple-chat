import { vuexfireMutations } from 'vuexfire'

export default {
  setUid(state, payload) {
    state.uid = payload
  },

  ...vuexfireMutations
}
