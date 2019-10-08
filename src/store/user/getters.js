function capFirst(payload) {
  return payload.charAt(0).toUpperCase() + payload.slice(1).toLowerCase()
}

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
  },

  sortedBy(state) {
    switch (state.sortedBy) {
      case 'LATEST':
        return 'recent.timestamp'

      case 'HOT':
        return 'viewer'

      case 'QUANTITY':
        return 'msgCount'

      default:
        return 'recent.timestamp'
    }
  },

  sortedByName(state) {
    return capFirst(state.sortedBy)
  },

  alignedBy(state) {
    return state.alignedBy
  }
}
