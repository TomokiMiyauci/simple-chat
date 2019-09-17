<template>
  <v-bottom-navigation v-model="bottomNav" dark app fixed>
    <v-btn v-for="item in items" :key="item.title" :to="item.to">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    bottomNav: null,
    items: [
      { title: 'Room', icon: 'mdi-hexagon-slice-2', to: '/rooms' },
      { title: 'Share', icon: 'mdi-share-variant', to: '/share' }
    ]
  })
}
</script>
