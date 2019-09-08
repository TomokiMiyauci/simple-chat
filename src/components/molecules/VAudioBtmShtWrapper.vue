<template>
  <v-bottom-sheet-btn-icon ref="bottomSheet" :btn-icon="btnIcon">
    <template #content>
      <v-audio-recorder @onload="onload"></v-audio-recorder>
    </template>
  </v-bottom-sheet-btn-icon>
</template>
<script>
import VAudioRecorder from '~/components/molecules/VAudioRecorder'
import VBottomSheetBtnIcon from '~/components/molecules/VBottomSheetBtnIcon'
export default {
  components: { VBottomSheetBtnIcon, VAudioRecorder },

  computed: {
    btnIcon() {
      return { icon: 'mdi-microphone', xlarge: true }
    }
  },
  methods: {
    onload() {
      this.$refs.bottomSheet.forceClose()
    }
  }
}
</script>
