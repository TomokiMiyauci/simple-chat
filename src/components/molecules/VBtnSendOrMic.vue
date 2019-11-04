<template>
  <v-menu :disabled="!disabled" offset-y open-on-hover top :nudge-right="-107">
    <template v-slot:activator="{ on: menu }">
      <v-tooltip top :disabled="disabled">
        <template #activator="{on: tooltip}">
          <v-btn
            :color="color"
            icon
            v-on="{ ...tooltip, ...menu }"
            @click="onClick"
          >
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ tooltip }}</span>
      </v-tooltip>
    </template>
    <v-login-induction></v-login-induction>
  </v-menu>
</template>

<script>
import VLoginInduction from '~/components/molecules/VLoginInduction'
export default {
  components: {
    VLoginInduction
  },

  props: {
    text: {
      type: String,
      default: ''
    },

    isAuth: {
      type: Boolean,
      defautl: false
    },

    iconSend: {
      type: String,
      default: 'mdi-send'
    },

    iconMic: {
      type: String,
      default: 'mdi-microphone'
    }
  },

  computed: {
    icon() {
      return this.text ? this.iconSend : this.iconMic
    },

    disabled() {
      return this.icon === this.iconMic && !this.isAuth
    },

    tooltip() {
      if (this.icon === this.iconSend) {
        return 'Send'
      }
      return 'Voice Message'
    },

    color() {
      if (this.disabled) {
        return 'grey lighten-1'
      }
      return ''
    }
  },

  methods: {
    onClick() {
      switch (this.icon) {
        case this.iconSend:
          return this.$emit('click', 'SEND')
        case this.iconMic:
          return this.$emit('click', 'MIC')
      }
    }
  }
}
</script>

<style></style>
