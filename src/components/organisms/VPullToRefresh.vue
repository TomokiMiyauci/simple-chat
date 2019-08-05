<template>
  <div>
    <div
      class="text-center"
      :style="{
        height: diff + 'px',
        backgroundColor: 'rgba(189, 182, 189, 0.082)',
        display: isDisplay,
        maxHeight: '70px'
      }"
    >
      {{ text }}<br />
      <v-progress-circular
        :value="(100 / 70) * diff"
        :rotate="rotate"
        :indeterminate="indeterminate"
      >
      </v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    callback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      startY: null,
      endY: null,
      indeterminate: false
    }
  },
  computed: {
    isActive() {
      if (this.diff > 70) {
        return true
      }
      return false
    },
    diff() {
      return this.endY - this.startY
    },
    isDisplay() {
      return this.diff > 0 ? 'block' : 'none'
    },
    text() {
      if (this.indeterminate) {
        return 'Loading...'
      } else if (this.diff >= 70) {
        return '↑ Rerease to load'
      } else {
        return '↓ Pull to load'
      }
    },
    rotate() {
      return this.indeterminate ? 0 : -90
    }
  },
  beforeMount() {
    window.addEventListener(
      'touchstart',
      (e) => {
        this.startY = e.touches[0].pageY
      },
      { passive: true }
    )
    window.addEventListener('touchmove', (e) => {
      this.endY = e.touches[0].pageY
    })
    window.addEventListener('touchend', (e) => {
      if (this.isActive) {
        setTimeout(() => {
          this.callback()
          this.indeterminate = false
          this.startY = null
          this.endY = null
        }, 1000)
        this.indeterminate = true
      } else {
        this.startY = null
        this.endY = null
      }
    })
  }
}
</script>
