<template>
  <v-btn icon :disabled="disabled" @click="onClick">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
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
