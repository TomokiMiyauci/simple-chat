<template>
  <v-card class="mx-auto" flat>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title" :to="`/rooms/${item.uuid}`">
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle> {{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="index" :inset="item.inset" />
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  layout: 'index',
  data: () => ({
    items: [
      {
        uuid: '0000000001',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Simple Chat is testing',
        subtitle:
          'This project is currently under development.If you like, please pull request.'
      }
    ]
  })
}
</script>
