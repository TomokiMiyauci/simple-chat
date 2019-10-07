<template>
  <div>
    <v-btn-icon v-bind="btnIcon" @click="SHOW($options._componentTag)" />
    <v-dialog-wrapper fullscreen :name="$options._componentTag">
      <the-scanner></the-scanner>
    </v-dialog-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import TheScanner from '~/components/organisms/TheScanner'
export default {
  components: {
    VBtnIcon,
    VDialogWrapper,
    TheScanner
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-qrcode-scan'
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
