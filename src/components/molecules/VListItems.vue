<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      @click="click(item)"
    >
      <v-list-item-title
        ><v-icon class="pr-2">{{ item.icon }}</v-icon
        >{{ item.text }}</v-list-item-title
      >
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    click: {
      type: Function,
      required: true
    }
  }
}
</script>

<style></style>
