export default {
  isHas: (state) => (payload) => {
    return state.modals.includes(payload)
  }
}
