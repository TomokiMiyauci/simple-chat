<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8" lg="5" xl="4">
        <the-messages> </the-messages>
        <v-btm-sheet-wrapper>
          <v-audio-recorder></v-audio-recorder>
        </v-btm-sheet-wrapper>
      </v-col>
    </v-row>

    <v-overlay-wrapper>
      <v-row justify="start" align-content="start">
        <v-col cols="auto">
          <v-btn color="indigo" fab class="mr-10">
            <v-icon>
              mdi-phone-in-talk
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn fab color="cyan" class="ml-10" to="video">
            <v-icon>
              mdi-video
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align-content="center">
        <v-col cols="auto">
          <v-btn icon @click="HIDE('v-overlay-wrapper')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-overlay-wrapper>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import VOverlayWrapper from '~/components/organisms/VOverlayWrapper'
import VAudioRecorder from '~/components/molecules/VAudioRecorder'
import TheMessages from '~/components/organisms/TheMessages'
import VBtmSheetWrapper from '~/components/organisms/VBtmSheetWrapper'

export default {
  layout: 'msg',
  components: {
    VOverlayWrapper,
    VAudioRecorder,
    TheMessages,
    VBtmSheetWrapper
  },

  validate({ store }) {
    return !!store.state.room.uid
  },

  computed: {
    ...mapGetters('tab', ['value'])
  },

  created() {},

  methods: {
    ...mapActions('modal', ['HIDE'])
  }
}
</script>

<style></style>
