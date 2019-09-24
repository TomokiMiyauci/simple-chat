<template>
  <v-app-bar>
    <template v-if="!noButton">
      <v-btn-icon v-if="!enableBack" :icon="icon" @click="$emit('close')" />
      <v-btn-back v-else></v-btn-back>
    </template>

    <slot name="content"></slot>
  </v-app-bar>
</template>

<script>
import VBtnIcon from '~/components/atoms/VBtnIcon'
import VBtnBack from '~/components/atoms/VBtnBack'
export default {
  components: {
    VBtnIcon,
    VBtnBack
  },

  props: {
    enableBack: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: 'mdi-close'
    },

    noButton: {
      type: Boolean,
      defalut: false
    }
  }
}
</script>

<style></style>
