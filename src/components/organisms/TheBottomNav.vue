<template>
  <v-bottom-navigation v-model="bottomNav" dark shift app fixed>
    <v-btn v-for="item in items" :key="item.title" :to="item.to">
      <span class="text-capitalize">{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    bottomNav: null,
    items: [
      { title: 'room', icon: 'home', to: '/rooms/' },
      { title: 'setting', icon: 'settings', to: '/settings/' }
    ]
  })
}
</script>
