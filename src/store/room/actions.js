import { firestoreAction } from 'vuexfire'
import {
  INIT,
  INIT_PRIVATE,
  CREATE,
  CREATE_PRIVATE,
  UPDATE,
  INCREASE,
  ENTER
} from './mutation-types'
import firebase from '~/plugins/firebase'

export function collectionRef() {
  return firebase.firestore().collection('rooms')
}
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export default {
  bindRoomsRef: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef(
      'rooms',
      collectionRef()
        .where('scope', '==', 'PUBLIC')
        .orderBy('recent.timestamp', 'desc')
    )
  }),

  bindPrivateRoomsRef: firestoreAction(({ bindFirestoreRef, rootState }) => {
    bindFirestoreRef(
      'privateRooms',
      collectionRef()
        .where('scope', '==', 'PRIVATE')
        .where('members', 'array-contains', rootState.user.id)
        .orderBy('recent.timestamp', 'desc')
    )
  }),

  [INIT]({ dispatch }) {
    dispatch('bindRoomsRef')
  },

  [INIT_PRIVATE]({ dispatch }) {
    dispatch('bindPrivateRoomsRef')
  },

  getOne({ state }, payload) {
    return collectionRef()
      .doc(payload || state.uid)
      .get()
  },

  [CREATE]() {
    collectionRef().add({
      name: 'New Room',
      timestamp,
      recent: {
        timestamp
      },
      msgCount: 0,
      viewer: 0,
      scope: 'PUBLIC'
    })
  },

  [CREATE_PRIVATE]({ rootState }) {
    collectionRef().add({
      name: 'New Room',
      timestamp,
      recent: {
        timestamp
      },
      msgCount: 0,
      viewer: 0,
      scope: 'PRIVATE',
      members: [rootState.user.id]
    })
  },

  [UPDATE]({ state }, payload) {
    collectionRef()
      .doc(state.uid)
      .update(payload)
  },

  [INCREASE]({ dispatch }, payload) {
    const { field, increment, ...rest } = payload
    rest[field] = firebase.firestore.FieldValue.increment(increment)
    dispatch(UPDATE, rest)
  },

  async [ENTER]({ rootState }, payload) {
    try {
      await collectionRef()
        .doc(payload)
        .update({
          members: firebase.firestore.FieldValue.arrayUnion(rootState.user.id)
        })
      return true
    } catch {
      return false
    }
  }
}
