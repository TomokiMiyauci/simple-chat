<template>
  <input
    id="file"
    type="file"
    :accept="accept"
    style="display:none"
    @change="onFileChange"
  />
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: 'image/*'
    }
  },

  methods: {
    onClick() {
      document.getElementById('file').click()
    },

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const file = files[0]
      this.$emit('onload', file)
      document.getElementById('file').value = ''
    }
  }
}
</script>

<style scoped></style>
