export default () => {
  if (process.client) {
    window.MediaRecorder = require('audio-recorder-polyfill')
  }
}
