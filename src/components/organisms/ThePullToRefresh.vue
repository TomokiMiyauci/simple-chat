<template>
  <div>
    <transition name="slide-fade">
      <div v-show="isShow" class="main" :style="styles">
        <v-icon
          v-if="!isLoaded"
          large
          color="success"
          :style="rotate"
          :class="{ spin: isLoading }"
          >{{ icon }}</v-icon
        >
        <v-icon v-else large color="success">mdi-check-circle-outline</v-icon>
      </div>
    </transition>
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
      isShow: false,
      startY: null,
      endY: null,
      spin: false,
      isLoaded: false,
      isLoading: false
    }
  },
  computed: {
    diff() {
      if (this.endY - this.startY >= 80) {
        return 80
      } else if (this.endY > this.startY) {
        return this.endY - this.startY
      }
      return 0
    },
    styles() {
      return {
        transform: `translateY(${this.diff}px)`,
        opacity: (1 / 80) * this.diff
      }
    },
    rotate() {
      return { transform: `rotate(${(360 / 80) * this.diff}deg)` }
    },
    icon() {
      return this.diff === 80 ? 'mdi-autorenew' : 'mdi-refresh'
    }
  },
  beforeMount() {
    window.addEventListener('touchstart', (e) => {
      this.startY = e.touches[0].pageY
      this.isShow = true
    })
    window.addEventListener('touchmove', (e) => {
      this.endY = e.touches[0].pageY
    })
    window.addEventListener('touchend', () => {
      if (this.diff === 80) {
        this.isLoading = true
        this.callback().then(() => {
          this.isLoaded = true
          setTimeout(() => {
            this.init()
          }, 1000)
        })
      } else {
        this.init()
      }
    })
  },
  methods: {
    init() {
      this.isShow = false
      this.isLoading = false
      this.isLoaded = false
      this.startY = 0
      this.endY = 0
    }
  }
}
</script>

<style>
.main {
  display: inline-block;
  position: fixed;
  top: 0px;
  z-index: 5;
  left: 50%;
}
.spin {
  animation: spin 1.5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  rotate: 0deg;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
