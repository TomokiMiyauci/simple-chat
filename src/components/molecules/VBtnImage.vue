<template>
  <v-menu :disabled="!disabled" offset-y open-on-hover top :nudge-right="-107">
    <template v-slot:activator="{ on: menu }">
      <v-tooltip top :disabled="disabled">
        <template #activator="{on: tooltip}">
          <v-btn
            icon
            :color="color"
            v-on="{ ...tooltip, ...menu }"
            @click="onClick"
          >
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
          <v-file ref="file" @onload="onLoad"></v-file>
        </template>
        <span>Image</span>
      </v-tooltip>
    </template>
    <v-login-induction></v-login-induction>
  </v-menu>
</template>

<script>
import VFile from '~/components/atoms/VFile'
import VLoginInduction from '~/components/molecules/VLoginInduction'
export default {
  components: {
    VFile,
    VLoginInduction
  },

  props: {
    icon: {
      type: String,
      default: 'mdi-image'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    color() {
      if (this.disabled) {
        return 'grey lighten-1'
      }
      return ''
    }
  },

  methods: {
    onClick() {
      if (!this.disabled) {
        this.$refs.file.onClick()
      }
    },

    onLoad(file) {
      this.$emit('onload', file)
    }
  }
}
</script>

<style></style>
