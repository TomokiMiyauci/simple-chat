<template>
  <div>
    <!-- If not logged in, set it to v-oters-message -->
    <template v-if="!isSignin()">
      <template v-for="(message, index) in messages">
        <v-others-message :key="index" :message="message"></v-others-message>
      </template>
    </template>
    <!-- If logged in -->
    <template v-for="(message, index) in messages" v-else>
      <v-others-message
        v-if="isOwnPost(message)"
        :key="index"
        :message="message"
      >
        {{ message }}
      </v-others-message>

      <v-own-message v-else :key="index" :message="message"></v-own-message>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VOthersMessage from '~/components/organisms/VOthersMessage'
import VOwnMessage from '~/components/organisms/VOwnMessage'

export default {
  components: {
    VOthersMessage,
    VOwnMessage
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState('user', ['isAuth', 'id'])
  },
  methods: {
    isSignin() {
      if (this.isAuth) {
        return true
      }
    },
    isOwnPost(val) {
      if (this.id === val.userID) {
        return true
      }
    }
  }
}
</script>
