<template>
  <div>
    <v-dialog-btn-icon
      ref="dialog"
      :btn-icon="btnIcon"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <template #content>
        <v-settings-room @click="forceClose"></v-settings-room>
      </template>
    </v-dialog-btn-icon>
  </div>
</template>

<script>
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
import VSettingsRoom from '~/components/molecules/VSettingsRoom'
export default {
  components: {
    VDialogBtnIcon,
    VSettingsRoom
  },
  data() {
    return {
      btnIcon: {
        icon: 'mdi-dots-vertical'
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
