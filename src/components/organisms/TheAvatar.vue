<template>
  <div :class="{ active: isActive }">
    <v-btn v-if="!isAuth" fab color="purple" to="/user/login">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <v-avatar
      v-else
      size="56px"
      absolute
      @click="$router.push('/user/settings')"
    >
      <v-img :src="photoSrc" alt="avatar" />
    </v-avatar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapState('user', ['isAuth']),
    ...mapGetters('user', ['photoURL']),

    photoSrc() {
      if (this.photoURL) {
        return this.photoURL
      } else {
        return require('~/assets/images/anonymous.jpg')
      }
    }
  },

  methods: {
    ...mapActions('dialog', ['SHOW'])
  }
}
</script>

<style>
.active {
  position: absolute;
  left: -26px;
  top: 4px;
}
</style>
