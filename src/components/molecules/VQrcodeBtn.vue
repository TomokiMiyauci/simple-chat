<template>
  <div>
    <v-btn-icon v-bind="btnIcon" @click="SHOW($options._componentTag)">
    </v-btn-icon>
    <v-dialog-wrapper fullscreen :name="$options._componentTag">
      <the-qrcode :value="value"></the-qrcode>
    </v-dialog-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import TheQrcode from '~/components/organisms/TheQrcode'
export default {
  components: {
    VBtnIcon,
    VDialogWrapper,
    TheQrcode
  },

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-qrcode'
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
