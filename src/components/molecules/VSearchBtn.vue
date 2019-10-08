<template>
  <div>
    <v-btn-icon
      v-bind="btnIcon"
      @click="SHOW($options._componentTag)"
    ></v-btn-icon>
    <v-dialog-wrapper fullscreen :name="$options._componentTag">
      <the-search-room></the-search-room>
    </v-dialog-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import TheSearchRoom from '~/components/organisms/TheSearchRoom'
export default {
  components: {
    VBtnIcon,
    VDialogWrapper,
    TheSearchRoom
  },

  data() {
    return {
      btnIcon: {
        icon: 'mdi-magnify'
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style></style>
