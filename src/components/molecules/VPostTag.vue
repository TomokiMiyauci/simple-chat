<template>
  <div>
    <v-bottom-sheet-btn-icon ref="bottomSheet" :btn-icon="btnIcon">
      <template #content>
        <v-tag @onload="onload"></v-tag>
      </template>
    </v-bottom-sheet-btn-icon>
  </div>
</template>
<script>
import VTag from '~/components/molecules/VTag'
import VBottomSheetBtnIcon from '~/components/molecules/VBottomSheetBtnIcon'
export default {
  components: { VBottomSheetBtnIcon, VTag },
  data: () => ({
    btnIcon: {
      icon: 'mdi-tag'
    }
  }),
  methods: {
    onload(payload) {
      this.$refs.bottomSheet.forceClose()
      this.btnIcon.btnColor = payload.color
      this.$emit('onload', payload)
    }
  }
}
</script>
