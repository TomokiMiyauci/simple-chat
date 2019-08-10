<template>
  <div>
    <template v-for="(message, index) in messages">
      <v-message-date
        v-show="changeMessageNo.includes(index)"
        :key="index + 'date'"
        :message="message"
      ></v-message-date>
      <v-message-line :key="index" :message="message"></v-message-line>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VMessageDate from '~/components/organisms/VMessageDate'
import VMessageLine from '~/components/organisms/VMessageLine'

export default {
  components: {
    VMessageLine,
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
    ...mapGetters('user', ['isSignin'])
  },
  watch: {
    messages() {
      this.refreshRender()
    }
  },

  methods: {
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
