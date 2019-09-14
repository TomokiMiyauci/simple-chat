import firebase from '~/plugins/firebase'

export default function({ store }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.id !== store.state.user.id) {
      store.dispatch('user/LOGIN', user)
    }
    // } else if (route.name !== 'login') redirect('/login')
  })
}
