<template>
  <v-card class="wrapper">
    <template v-if="!uid">
      <span class="grey--text no-select display-1">
        <p class="text-center">
          <v-icon class="text-center" size="50">mdi-forum</v-icon>
        </p>

        Select Room</span
      >
    </template>

    <template v-else>
      <v-alert
        v-if="!messages.length"
        outlined
        type="success"
        prominent
        border="left"
        icon="mdi-alert-decagram"
        transition="scale-transition"
        dismissible
        dense
      >
        A new room has been created, but there is nothing yet.
      </v-alert>
      <div class="page-body">
        <template v-for="(message, index) in messages">
          <v-message-date
            v-show="changeMessageNo.includes(index)"
            :key="index + 'date'"
            :message="message"
          ></v-message-date>
          <v-message-line :key="index" :message="message"></v-message-line>
        </template>
      </div>
      <the-post> </the-post>
    </template>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ThePost from '~/components/organisms/ThePost'
import VMessageDate from '~/components/organisms/VMessageDate'
import VMessageLine from '~/components/organisms/VMessageLine'

export default {
  components: {
    VMessageLine,
    VMessageDate,
    ThePost
  },

  data: () => ({ timestamps: [], changeMessageNo: [] }),

  computed: {
    ...mapGetters('user', ['isSignin']),

    ...mapGetters('message', ['messages']),

    ...mapState('room', ['uid'])
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

<style>
.wrapper {
  height: 74vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
}

.page-body {
  flex-grow: 1;
}

.no-select {
  position: absolute;
  top: 50%;
  left: 43%;
}
</style>
