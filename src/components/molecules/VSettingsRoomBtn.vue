<template>
  <div>
    <v-btn-icon
      v-bind="btnIcon"
      @click="SHOW($options._componentTag)"
    ></v-btn-icon>

    <v-dialog-wrapper
      fullscreen
      transition="dialog-bottom-transition"
      :name="$options._componentTag"
    >
      <the-settings-room></the-settings-room>
    </v-dialog-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import TheSettingsRoom from '~/components/organisms/TheSettingsRoom'
export default {
  components: {
    VDialogWrapper,
    TheSettingsRoom,
    VBtnIcon
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-dots-vertical'
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
