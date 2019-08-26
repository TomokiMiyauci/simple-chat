<template>
  <v-card class="mx-auto" flat>
    <v-list two-line>
      <template v-for="(item, index) in rooms">
        <v-list-item :key="item.uid" :to="`/rooms/${item.uid}`">
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
  props: {
    rooms: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
