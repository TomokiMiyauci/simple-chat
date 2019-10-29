<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <the-messages> </the-messages>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheMessages from '~/components/organisms/TheMessages'

export default {
  layout: 'msg',
  components: {
    TheMessages
  },

  validate({ store }) {
    return !!store.state.room.uid
  },

  created() {},

  methods: {
    af() {}
  }
}
</script>

<style></style>
