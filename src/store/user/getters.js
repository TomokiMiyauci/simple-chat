export default {
  photoURL(state) {
    return state.photoURL
      ? state.photoURL
      : require('~/assets/images/anonymous.jpg')
  },
  isSignin(state) {
    if (state.isAuth) {
      return true
    }
  }
}
