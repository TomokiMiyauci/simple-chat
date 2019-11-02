<template>
  <div>
    <v-btn icon :disabled="disabled" @click="$refs.file.onClick()">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <v-file ref="file" @onload="onLoad"></v-file>
  </div>
</template>

<script>
import VFile from '~/components/atoms/VFile'

export default {
  components: {
    VFile
  },

  props: {
    icon: {
      type: String,
      default: 'mdi-image'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onLoad(file) {
      this.$emit('onload', file)
    }
  }
}
</script>

<style></style>
