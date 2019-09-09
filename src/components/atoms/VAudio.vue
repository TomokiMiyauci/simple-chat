<template>
  <div>
    <v-progress-circular
      :rotate="-90"
      :size="58"
      :width="4"
      :value="currentTime"
      color="primary"
    >
      <v-btn-icon
        icon="mdi-microphone"
        xlarge
        btn-color="grey darken-2"
        @click="play"
      ></v-btn-icon>
    </v-progress-circular>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentTime: 0,
      playing: false
    }
  },
  methods: {
    play() {
      if (this.playing) {
        return
      }
      this.playing = true
      const audio = document.createElement('audio')
      audio.src = this.src
      audio.play()

      audio.addEventListener('timeupdate', () => {
        const duration = audio.duration
        if (isFinite(duration)) {
          this.currentTime = (audio.currentTime / duration) * 100
        } else {
          this.currentTime = audio.currentTime
        }
      })

      audio.addEventListener('ended', () => {
        setTimeout(() => {
          this.playing = false
          this.currentTime = 0
        }, 700)
      })
    }
  }
}
</script>

<style></style>
