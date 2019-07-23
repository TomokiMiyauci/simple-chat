<template>
  <v-app-bar dark app>
    <v-toolbar-title class="text-capitalize">
      {{ title }}
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('navbar', ['title'])
  }
}
</script>
