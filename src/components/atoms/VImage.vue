<template>
  <div>
    <input
      type="file"
      :accept="accept"
      style="visibility: hidden;"
      @change="onFileChange"
    />
  </div>
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
      document.querySelector('input[type=file]').click()
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const file = files[0]
      this.$emit('onload', file)
    }
  }
}
</script>

<style></style>
