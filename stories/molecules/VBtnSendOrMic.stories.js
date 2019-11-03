import VBtnSendOrMic from '~/components/molecules/VBtnSendOrMic'

export default {
  title: `molecules|VBtnSendOrMic`
}

export const def = () => ({
  components: { VBtnSendOrMic },
  template: '<v-btn-send-or-mic></v-btn-send-or-mic>'
})

export const authedAndTextIsNotExist = () => ({
  components: { VBtnSendOrMic },
  template: '<v-btn-send-or-mic :isAuth="true"></v-btn-send-or-mic>'
})

export const icon = () => ({
  components: { VBtnSendOrMic },
  template:
    '<v-btn-send-or-mic iconMic="mdi-microphone-variant"></v-btn-send-or-mic>'
})

export const textExist = () => ({
  components: { VBtnSendOrMic },
  template: '<v-btn-send-or-mic text="text"></v-btn-send-or-mic>'
})
