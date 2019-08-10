<template>
  <!-- Check if component’s slot is empty -->
  <div v-if="$slots.default" :class="isLeft ? 'left' : 'right'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isLeft: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
div {
  position: relative; /* Set to fix triangle position */
  display: inline-block;
  max-width: 180px;
  margin: 0px 10px 0px 0px;
  padding: 8px 15px;
  background: #f0f0f0;
  text-align: left;
  border-radius: 17px;
  word-wrap: break-word;
  white-space: pre-line;
}
div::after {
  content: '';
  border: 14px solid transparent;
  border-top-color: #f0f0f0;
  position: absolute;
  top: 0;
}
.left::after {
  left: -10px;
}
.right::after {
  right: -10px;
}
</style>
