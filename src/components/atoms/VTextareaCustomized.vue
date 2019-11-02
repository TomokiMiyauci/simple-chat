<template>
  <v-textarea
    :value="text"
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
    @change="$emit('change', text)"
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
  }
}
</script>
