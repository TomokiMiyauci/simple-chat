<template>
  <v-btn
    :x-large="xlarge"
    :color="btnColor"
    :icon="!fab && !btnText && !!icon"
    :fab="fab"
    :bottom="bottom"
    :left="left"
    :absolute="absolute"
    @click.prevent="click"
  >
    <v-icon v-if="icon">{{ icon }}</v-icon>
    {{ btnText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    btnColor: {
      type: String,
      default: ''
    },

    btnText: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    fab: {
      type: Boolean,
      default: false
    },

    absolute: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      defautl: false
    },

    bottom: {
      type: Boolean,
      defautl: false
    },

    xlarge: {
      type: Boolean,
      defualt: false
    }
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style></style>
