<template>
  <v-menu offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-avatar v-on="on">
        <v-img :src="photoSrc" alt="avatar" />
      </v-avatar>
    </template>
    <v-list-items :items="items" :click="click"></v-list-items>
  </v-menu>
</template>

<script>
import { mapActions } from 'vuex'
import VListItems from '~/components/molecules/VListItems'
export default {
  components: {
    VListItems
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: () => ({
    items: [
      { text: 'Profile', icon: 'mdi-account-circle', to: '/profile' },
      { text: 'Logout', icon: 'mdi-logout-variant' }
    ]
  }),
  computed: {
    photoSrc() {
      if (!this.src) {
        return require('~/assets/images/anonymous.jpg')
      } else {
        return this.src
      }
    }
  },
  methods: {
    ...mapActions('user', ['LOGOUT']),
    click(val) {
      if (val.to) {
        this.$router.push(val.to)
      } else {
        this.LOGOUT()
      }
    }
  }
}
</script>

<style></style>
