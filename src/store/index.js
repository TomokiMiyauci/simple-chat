import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const itemsRef = firebase.firestore().collection('messages')

export const state = () => ({
  u: [],
  isLogin: null
})

export const mutations = {
  ...vuexfireMutations
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('u', itemsRef)
  })
}
