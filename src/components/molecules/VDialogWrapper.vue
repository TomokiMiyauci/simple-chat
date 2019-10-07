<template>
  <v-dialog
    :width="dialogWidth"
    :fullscreen="fullscreen"
    :hide-overlay="fullscreen"
    :transition="transition"
    :value="isHas(name)"
    @click:outside="HIDE(name)"
  >
    <slot></slot>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { HIDE } from '~/store/dialog/mutation-types'

export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },

    transition: {
      type: String,
      default: 'dialog-transition'
    },

    dialogWidth: {
      type: [String, Number],
      default: 500
    },

    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters('dialog', ['isHas'])
  },

  methods: {
    ...mapActions('dialog', [HIDE])
  }
}
</script>

<style></style>
