<template>
  <div>
    <v-dialog-btn-icon
      ref="dialog"
      :btn-icon="btnIcon"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <template #content>
        <the-settings-room @click="forceClose"></the-settings-room>
      </template>
    </v-dialog-btn-icon>
  </div>
</template>

<script>
import VDialogBtnIcon from '~/components/molecules/VDialogBtnIcon'
import TheSettingsRoom from '~/components/organisms/TheSettingsRoom'
export default {
  components: {
    VDialogBtnIcon,
    TheSettingsRoom
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
