import { vuexfireMutations } from 'vuexfire'

export default {
  setUid(state, payload) {
    state.uid = payload
  },

  setRoom(state, payload) {
    state.rooms.push(payload)
  },

  resetRoom(state) {
    state.rooms.length = 0
  },
  ...vuexfireMutations
}
