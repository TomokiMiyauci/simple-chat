<template>
  <v-dialog-btn-icon
    ref="dialog"
    :fullscreen="true"
    transition="dialog-bottom-transition"
    :btn-icon="btnIcon"
  >
    <template #content>
      <the-create-room @click="forceClose"></the-create-room>
    </template>
  </v-dialog-btn-icon>
</template>

<script>
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
import TheCreateRoom from '~/components/organisms/TheCreateRoom'
export default {
  components: {
    VDialogBtnIcon,
    TheCreateRoom
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
