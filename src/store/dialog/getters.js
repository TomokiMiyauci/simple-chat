export default {
  isHas: (state) => (payload) => {
    return state.dialogs.includes(payload)
  }
}
