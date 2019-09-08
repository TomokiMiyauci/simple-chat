<template>
  <v-bottom-sheet-btn-icon ref="bottomSheet" :btn-icon="btnIcon">
    <template #content>
      <v-tag-list @onload="onload"></v-tag-list>
    </template>
  </v-bottom-sheet-btn-icon>
</template>
<script>
import { mapState } from 'vuex'
import VTagList from '~/components/molecules/VTagList'
import VBottomSheetBtnIcon from '~/components/molecules/VBottomSheetBtnIcon'
export default {
  components: { VBottomSheetBtnIcon, VTagList },

  computed: {
    ...mapState('post', ['tag']),
    btnIcon() {
      if (this.tag) {
        return { icon: 'mdi-tag', btnColor: this.tag.color, xlarge: true }
      } else {
        return { icon: 'mdi-tag', btnColor: '', xlarge: true }
      }
    }
  },

  methods: {
    onload() {
      this.$refs.bottomSheet.forceClose()
    }
  }
}
</script>
