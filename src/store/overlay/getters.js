export default {
  isHas: (state) => (payload) => {
    return state.overlays.includes(payload)
  }
}
