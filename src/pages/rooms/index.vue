<template>
  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader
        v-if="item.header"
        :key="item.header"
        v-text="item.header"
      ></v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item v-else :key="item.title" @click="a">
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
export default {
  layout: 'index',
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }
    ]
  }),
  methods: {
    a() {
      this.$router.push('/rooms/123')
    }
  }
}
</script>
