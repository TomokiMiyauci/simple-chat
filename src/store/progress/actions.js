import { CHANGE, PROGRESS, SUCCEED, FAIL, DONE } from './mutation-types'

const WAIT_TIME = 700

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default {
  [PROGRESS]({ commit }) {
    commit(CHANGE, PROGRESS)
  },

  async [SUCCEED]({ commit, dispatch }) {
    commit(CHANGE, SUCCEED)
    await timeout(WAIT_TIME)
    dispatch(DONE)
  },

  async [FAIL]({ commit, dispatch }) {
    commit(CHANGE, FAIL)
    await timeout(WAIT_TIME)
    dispatch(DONE)
  },

  [DONE]({ commit }) {
    commit(CHANGE, null)
  }
}
