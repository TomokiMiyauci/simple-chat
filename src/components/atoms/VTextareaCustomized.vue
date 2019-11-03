<template>
  <v-textarea
    v-model="value"
    :background-color="backgroundColor"
    :clear-icon="clearIcon"
    :placeholder="placeholder"
    autofocus
    hide-details
    rows="1"
    rounded
    single-line
    clearable
    dense
    auto-grow
    @input="$emit('change', value)"
  ></v-textarea>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    backgroundColor: {
      type: String,
      default: 'grey lighten-1'
    },

    placeholder: {
      type: String,
      default: 'Enter message'
    },

    clearIcon: {
      type: String,
      default: 'mdi-close-circle'
    }
  },

  data() {
    return {
      value: this.text
    }
  },

  watch: {
    text() {
      this.value = this.text
    }
  }
}
</script>
