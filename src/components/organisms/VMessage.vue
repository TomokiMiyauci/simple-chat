<template>
  <div>
    <!-- If not logged in, set it to v-oters-message -->
    <template v-if="!isSignin">
      <template v-for="(message, index) in messages">
        <v-message-date
          v-show="changeMessageNo.includes(index)"
          :key="index + 'surfix'"
          :message="message"
        ></v-message-date>
        <v-others-message :key="index" :message="message"></v-others-message>
      </template>
    </template>
    <!-- If logged in -->
    <template v-for="(message, index) in messages" v-else>
      <v-message-date
        v-show="changeMessageNo.includes(index)"
        :key="index + 'surfix'"
        :message="message"
      ></v-message-date>
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
import { mapState, mapGetters } from 'vuex'
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
  data: () => ({ timestamps: [], changeMessageNo: [] }),
  computed: {
    ...mapState('user', ['isAuth', 'id']),
    ...mapGetters('user', ['isSignin'])
  },
  watch: {
    messages() {
      this.refreshRender()
    }
  },

  methods: {
    isOwnPost(val) {
      if (this.id === val.userID) {
        return true
      }
    },
    refreshRender() {
      this.timestamps = []
      this.changeMessageNo = []
      this.messages.forEach((res, index) => {
        if (
          res.timestamp &&
          !this.timestamps.includes(res.timestamp.toDate().getDate())
        ) {
          this.timestamps.push(res.timestamp.toDate().getDate())
          this.changeMessageNo.push(index)
        }
      })
    }
  }
}
</script>
