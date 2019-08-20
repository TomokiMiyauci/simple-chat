import firebase from '~/plugins/firebase'

console.log(firebase.messaging)
if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging()
  // Add the public key generated from the console here.
  messaging.usePublicVapidKey(
    'BK9HHOPKYqWQRyO4czxgtrQ4s8A4Iq6Sb4md43m5ez_kX-KxuJweOcCsi-dzulDFcYmIEeVhyJypIq2tye38PUw'
  )
  messaging
    .requestPermission()
    .then(() => {
      console.log('Notification permission granted.')

      // トークン取得
      messaging.getToken().then((token) => {
        console.log('token', token)
      })
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err)
    })
}
