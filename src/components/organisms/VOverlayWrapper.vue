<template>
  <v-overlay :value="isHas(name)" @update:return-value="HIDE(name)">
    <slot></slot>
  </v-overlay>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('modal', ['isHas']),

    name() {
      return this.$options._componentTag
    }
  },

  methods: {
    ...mapActions('modal', ['HIDE'])
  }
}
</script>

<style scoped></style>
