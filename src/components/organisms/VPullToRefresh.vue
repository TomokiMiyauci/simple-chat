<template>
  <div>
    <div
      class="text-center"
      :style="{
        height: diff + 'px',
        backgroundColor: 'rgba(189, 182, 189, 0.4)',
        display: isDisplay,
        maxHeight: '70px'
      }"
    >
      <v-icon large>{{ icon }}</v-icon>

      {{ text }}<br />
      <v-progress-circular
        :value="(100 / 70) * diff"
        :rotate="rotate"
        :indeterminate="isLoading"
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
      isLoading: false
    }
  },
  computed: {
    isActive() {
      if (this.diff >= 70) {
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
      if (this.isLoading) {
        return 'Loading...'
      } else if (this.isActive) {
        return 'Rerease to load'
      } else if (!this.isLoading) {
        return 'Pull to load'
      } else {
        return 'Finished!'
      }
    },
    icon() {
      if (this.isLoading) {
        return 'mdi-reload'
      } else if (this.isActive) {
        return 'mdi-arrow-up-bold'
      } else {
        return 'mdi-arrow-down-bold'
      }
    },
    rotate() {
      return this.isLoading ? 0 : -90
    }
  },
  beforeMount() {
    window.addEventListener('touchstart', (e) => {
      this.startY = e.touches[0].pageY
    })
    window.addEventListener('touchmove', (e) => {
      this.endY = e.touches[0].pageY
    })
    window.addEventListener('touchend', () => {
      this.touchEnd()
    })
  },
  methods: {
    touchEnd() {
      if (this.isActive) {
        this.isLoading = true
        this.callback().then(() => {
          this.isLoading = false
          this.finishLoad()
        })
      } else {
        this.startY = null
        this.endY = null
      }
    },
    finishLoad() {
      setTimeout(() => {
        this.startY = null
        this.endY = null
      }, 1000)
    }
  }
}
</script>
