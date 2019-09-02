<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ on }">
      <v-btn-icon v-bind="btnIcon" v-on="on"></v-btn-icon>
    </template>
    <slot name="content"></slot>
  </v-bottom-sheet>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },
  props: {
    btnIcon: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sheet: false
    }
  },
  methods: {
    forceClose() {
      this.sheet = false
    }
  }
}
</script>

<style></style>
