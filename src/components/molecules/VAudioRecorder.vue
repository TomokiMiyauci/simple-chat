<template>
  <v-card>
    <v-container grid-list-xs>
      <v-layout justify-center align-center>
        <v-progress-circular
          :indeterminate="recording"
          :size="79"
          color="yellow"
        >
          <v-btn icon x-large fab outlined @click="record">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-progress-circular>
      </v-layout>
      <v-layout class="pt-2" justify-center align-center>
        <v-btn icon outlined :disabled="!audio || recording" @click="play">
          <v-icon>{{ playing ? 'mdi-pause' : 'mdi-play' }}</v-icon>
        </v-btn>
        <v-btn icon outlined :disabled="!audio || recording" @click="post">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
    <audio id="player" style="display:none" controls></audio>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SET_AUDIO, POST_AUDIO } from '~/store/post/mutation-types'
export default {
  data() {
    return {
      recorder: null,
      recording: false,
      playing: false
    }
  },
  computed: {
    ...mapState('post', ['audio']),
    icon() {
      return this.recording ? 'mdi-stop' : 'mdi-microphone'
    }
  },
  methods: {
    ...mapActions('post', [SET_AUDIO, POST_AUDIO]),
    async record() {
      if (!this.recording) {
        this.recording = true
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        })
        this.handleSuccess(stream)
      } else {
        this.stop()
      }
    },
    stop() {
      this.recording = false
      this.recorder.stop()
    },
    handleSuccess(payload) {
      this.recorder = new MediaRecorder(payload, {
        mimeType: 'video/webm;codecs=vp9'
      })

      this.recorder.start()
      this.recorder.addEventListener('dataavailable', (e) => this.getBlob(e))
    },
    getBlob(e) {
      if (e.data.size > 0) {
        const chunks = e.data
        this.SET_AUDIO(chunks)

        const src = URL.createObjectURL(chunks)
        const player = document.getElementById('player')

        player.src = src
      }
    },
    play() {
      const player = document.getElementById('player')

      player.addEventListener('ended', () => {
        this.playing = false
      })
      if (!this.playing) {
        player.play()
        this.playing = true
      } else {
        player.pause()
        this.playing = false
      }
    },
    post() {
      this.POST_AUDIO()
      this.$emit('onload')
    }
  }
}
</script>

<style></style>
