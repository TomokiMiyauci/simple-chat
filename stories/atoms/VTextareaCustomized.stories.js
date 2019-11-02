import VTextareaCustomized from '~/components/atoms/VTextareaCustomized'

export default {
  title: `atoms|VTextareaCustomized`
}

export const def = () => ({
  components: { VTextareaCustomized },
  template: '<v-textarea-customized></v-textarea-customized>'
})

export const clearIcon = () => ({
  components: { VTextareaCustomized },
  template:
    '<v-textarea-customized crear-icon="mdi-circle"></v-textarea-customized>'
})

export const backgroundColor = () => ({
  components: { VTextareaCustomized },
  template:
    '<v-textarea-customized backgroundColor="green"></v-textarea-customized>'
})

export const placeholder = () => ({
  components: { VTextareaCustomized },
  template:
    '<v-textarea-customized placeholder="Enter your emotion"></v-textarea-customized>'
})
