import firebase from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  firebase.auth().onAuthStateChanged((user) => {
    // if (user) {
    //   store.dispatch('auth/gotUser', user)
    // } else if (route.name !== 'login') redirect('/login')
  })
}
