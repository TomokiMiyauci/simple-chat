<template>
  <v-overlay :absolute="true" :value="isHas($options._componentTag)">
    <v-btn fab @click="click">
      <v-icon>mdi-phone</v-icon>
    </v-btn>
    <v-btn class="ml-10" fab>
      <v-icon>mdi-video</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" fullscreen>
      <v-phone-video @close="close"></v-phone-video>
    </v-dialog>
  </v-overlay>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VPhoneVideo from '~/components/molecules/VPhoneVideo'
export default {
  components: {
    VPhoneVideo
  },

  data() {
    return {
      dialog: false
    }
  },

  computed: {
    ...mapGetters('overlay', ['isHas'])
  },

  methods: {
    ...mapActions('overlay', ['HIDE']),

    async click() {
      this.dialog = true
      await this.$nextTick()
    },

    close() {
      this.$emit('click')
      this.dialog = false
    }
  }
}
</script>

<style></style>
