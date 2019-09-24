<template>
  <v-btn-icon
    absolute
    left
    fab
    bottom
    btn-color="purple"
    icon="mdi-plus-box-multiple"
    @click="CREATE_PRIVATE"
  ></v-btn-icon>
</template>

<script>
import { mapActions } from 'vuex'
import VBtnIcon from '~/components/atoms/VBtnIcon'
export default {
  components: {
    VBtnIcon
  },

  methods: {
    ...mapActions('room', ['CREATE_PRIVATE'])
  }
}
</script>

<style></style>
