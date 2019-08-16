<template>
  <div>
    <v-btn icon class="btn" @click="click">
      <v-icon color="green">mdi-refresh</v-icon>
    </v-btn>
    <transition name="slide-fade">
      <div v-show="isShow" class="main">
        <v-icon
          v-if="!isLoaded"
          large
          color="success"
          :class="{ spin: isLoading }"
          >mdi-refresh</v-icon
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
      isLoaded: false,
      isLoading: false
    }
  },
  methods: {
    click() {
      if (this.isLoading) {
        return
      }
      this.switch()
      this.isLoading = true

      this.callback().then(() => {
        setTimeout(() => {
          this.isLoaded = false
          this.switch()
        }, 1000)
        this.isLoading = false
        this.isLoaded = true
      })
    },
    switch() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.main {
  position: fixed;
  top: 80px;
  left: 50%;
  z-index: 5;
}
.btn {
  display: inline-block;
  position: fixed;
  top: 4px;
  right: 70px;
  z-index: 5;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-80px) rotate(-360deg);
}
/* .slide-fade-enter-to .slide-fade-leave {
} */

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
</style>
