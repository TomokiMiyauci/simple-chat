import VBtnImage from '~/components/molecules/VBtnImage'

export default {
  title: `molecules|VBtnImage`
}

export const def = () => ({
  components: { VBtnImage },
  template: '<v-btn-image></v-btn-image>'
})

export const disabled = () => ({
  components: { VBtnImage },
  template: '<v-btn-image disabled></v-btn-image>'
})

export const icon = () => ({
  components: { VBtnImage },
  template: '<v-btn-image icon="mdi-file"></v-btn-image>'
})
