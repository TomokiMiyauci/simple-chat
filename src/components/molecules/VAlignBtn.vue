<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-subheader>Aligned By</v-subheader>
      <v-btn-toggle :value="alignedBy" mandatory>
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :value="item.alignedBy"
          @click="ALIGNED_BY(item.alignedBy)"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ALIGNED_BY } from '~/store/user/mutation-types'
export default {
  data() {
    return {
      items: [
        {
          alignedBy: 'LINE',
          icon: 'mdi-ballot-outline'
        },
        {
          alignedBy: 'BLOCK',
          icon: 'mdi-view-grid'
        }
      ]
    }
  },

  computed: {
    ...mapGetters('user', ['alignedBy'])
  },

  methods: {
    ...mapActions('user', [ALIGNED_BY])
  }
}
</script>

<style></style>
