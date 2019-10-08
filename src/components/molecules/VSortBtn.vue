<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-sort-descending</v-icon>
      </v-btn>
    </template>
    <v-list flat>
      <v-subheader>Sorted By</v-subheader>
      <v-list-item-group :value="sortedByName" color="indigo darken-1">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item.title"
          @click="SORTED_BY(item.sortBy)"
        >
          <v-icon class="mr-2" v-text="item.icon"></v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SORTED_BY } from '~/store/user/mutation-types'
export default {
  data() {
    return {
      items: [
        {
          title: 'Latest',
          sortBy: 'LATEST',
          icon: 'mdi-clock-fast'
        },
        {
          title: 'Hot',
          sortBy: 'HOT',
          icon: 'mdi-fire'
        },
        {
          title: 'Quantity',
          sortBy: 'QUANTITY',
          icon: 'mdi-comment-text-multiple'
        }
      ]
    }
  },

  computed: {
    ...mapGetters('user', ['sortedByName'])
  },

  methods: {
    ...mapActions('user', [SORTED_BY])
  }
}
</script>

<style></style>
