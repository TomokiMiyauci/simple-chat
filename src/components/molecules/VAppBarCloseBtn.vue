<template>
  <v-app-bar>
    <template v-if="!noButton">
      <v-btn-icon v-if="!enableBack" :icon="icon" :name="name" @click="click" />
      <v-btn-back v-else @beforeBack="$emit('beforeBack')"></v-btn-back>
    </template>

    <slot></slot>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
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
    },

    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    ...mapActions('dialog', ['HIDE']),

    click() {
      this.$emit('beforeClose')
      this.HIDE(name)
    }
  }
}
</script>

<style></style>
