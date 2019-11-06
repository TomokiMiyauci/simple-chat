<template>
  <v-container>
    <v-row justify="start">
      <v-col cols="12" sm="8" md="8" lg="5" xl="4">
        <v-card>
          <v-card-title>Taking</v-card-title>
          <v-container>
            <v-row justify="space-around">
              <v-col v-for="i in 5" :key="i" cols="auto">
                <v-card height="200px" width="200px">This is a mock</v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8" lg="5" xl="4">
        <v-card>
          <v-card-title>Archives</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'msg',
  components: {},

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
