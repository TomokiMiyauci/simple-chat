<template>
  <div>
    <v-btn-icon v-bind="btnIcon" @click="SHOW($options._componentTag)" />

    <v-dialog-wrapper
      fullscreen
      transition="dialog-bottom-transition"
      :name="$options._componentTag"
    >
      <the-create-room></the-create-room>
    </v-dialog-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import TheCreateRoom from '~/components/organisms/TheCreateRoom'
export default {
  components: {
    VBtnIcon,
    VDialogWrapper,
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
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
