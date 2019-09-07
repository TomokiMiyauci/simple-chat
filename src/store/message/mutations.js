import {
  LOADING,
  END_OF_RECORD,
  SET_MESSAGE,
  SET_LAST_VISIBLE
} from './mutation-types'

export default {
  [LOADING](state, payload) {
    state.isLoading = payload
  },

  [END_OF_RECORD](state, payload) {
    state.isEndOfRecord = payload
  },

  [SET_LAST_VISIBLE](state, payload) {
    state.lastVisible = payload
  },

  [SET_MESSAGE](state, payload) {
    state.messages.push(payload)
  }
}
