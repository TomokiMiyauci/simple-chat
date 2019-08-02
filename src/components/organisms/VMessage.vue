<template>
  <div>
    <!-- If not logged in, set it to v-oters-message -->
    <template v-if="!isSignin()">
      <template v-for="(message, index) in messages">
        <v-message-date
          v-show="c.includes(index)"
          :key="index + 'surfix'"
          :message="message"
        ></v-message-date>
        <v-others-message :key="index" :message="message"></v-others-message>
      </template>
    </template>
    <!-- If logged in -->
    <template v-for="(message, index) in messages" v-else>
      <v-own-message
        v-if="isOwnPost(message)"
        :key="index"
        :message="message"
      ></v-own-message>

      <v-others-message v-else :key="index" :message="message">
        {{ message }}
      </v-others-message>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VMessageDate from '~/components/organisms/VMessageDate'
import VOthersMessage from '~/components/organisms/VOthersMessage'
import VOwnMessage from '~/components/organisms/VOwnMessage'

export default {
  components: {
    VOthersMessage,
    VOwnMessage,
    VMessageDate
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({ b: [], c: [] }),
  computed: {
    ...mapState('user', ['isAuth', 'id'])
  },
  watch: {
    messages() {
      this.refreshRender()
    }
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
    },
    refreshRender() {
      this.b = []
      this.c = []
      this.messages.forEach((res, index) => {
        // console.log(res, index)

        if (
          res.timestamp &&
          !this.b.includes(res.timestamp.toDate().getDate())
        ) {
          this.b.push(res.timestamp.toDate().getDate())
          this.c.push(index)
          // console.log('pushed')
        }
      })
      console.log(this.b)
      console.log(this.c)
    }
  }
}
</script>
