import firebase from '~/plugins/firebase'

export default {
  async load({ commit }) {
    const snapshot = await firebase
      .firestore()
      .collection('rooms')
      .get()
    snapshot.forEach((doc) => {
      const document = Object.assign(doc.data(), { uid: doc.id })
      commit('setRoom', document)
    })
  }
}
