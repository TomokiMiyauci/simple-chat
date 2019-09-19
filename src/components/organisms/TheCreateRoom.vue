<template>
  <v-dialog-btn-icon
    ref="dialog"
    :fullscreen="true"
    transition="dialog-bottom-transition"
    :btn-icon="btnIcon"
  >
    <template #content>
      <v-create-room @click="forceClose"></v-create-room>
    </template>
  </v-dialog-btn-icon>
</template>

<script>
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
import VCreateRoom from '~/components/molecules/VCreateRoom'
export default {
  components: {
    VDialogBtnIcon,
    VCreateRoom
  },
  data() {
    return {
      btnIcon: {
        icon: 'mdi-home-plus',
        absolute: true,
        left: true,
        fab: true,
        bottom: true,
        btnColor: 'cyan'
      }
    }
  },
  methods: {
    forceClose() {
      this.$refs.dialog.forceClose()
    }
  }
}
</script>

<style></style>
