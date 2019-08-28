<template>
  <v-dialog v-model="dialog" width="dialogWidth">
    <template v-slot:activator="{ on }">
      <v-btn-icon v-bind="btnIcon" v-on="on"></v-btn-icon>
    </template>
    <slot name="content"></slot>
  </v-dialog>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },
  props: {
    dialogWidth: {
      type: [String, Number],
      default: 500
    },
    btnIcon: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    forceClose() {
      this.dialog = false
    }
  }
}
</script>

<style></style>
