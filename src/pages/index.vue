<template>
  <div>
    <v-pull-to-refresh :callback="loadMore"></v-pull-to-refresh>
    <the-messages :messages="messages.slice().reverse()"> </the-messages>
  </div>
</template>

<script>
import VPullToRefresh from '~/components/organisms/VPullToRefresh'
import TheMessages from '~/components/organisms/TheMessages'
import firebase from '~/plugins/firebase'

export default {
  components: {
    TheMessages,
    VPullToRefresh
  },
  data() {
    return {
      messages: [],
      lastVisible: null,
      pading: {
        limit: 5,
        isEnd: false,
        isLoading: false
      }
    }
  },
  created() {
    const firstQuery = this.query().limit(this.pading.limit)
    this.$bind('messages', firstQuery)
    firstQuery.get().then((documentSnapshots) => {
      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
      this.lastVisible = lastVisible
      this.scrollBottom()
    })
  },
  methods: {
    queryHandler(ref) {
      return new Promise((resolve, reject) => {
        ref.get().then((documentSnapshots) => {
          if (documentSnapshots.empty) {
            this.pading.isEnd = true
            resolve()
          }
          if (this.pading.isEnd) {
            resolve()
            return
          }
          this.lastVisible = documentSnapshots.docs[documentSnapshots.size - 1]
          documentSnapshots.forEach((res) => this.messages.push(res.data()))
          resolve()
        })
      })
    },
    loadMore() {
      return new Promise((resolve, reject) => {
        const nextQuery = this.query()
          .startAfter(this.lastVisible)
          .limit(this.pading.limit)
        this.pading.isLoading = true
        this.queryHandler(nextQuery).then(() => {
          this.pading.isLoading = false
          resolve()
        })
      })
    },
    query() {
      return firebase
        .firestore()
        .collection('messages')
        .orderBy('timestamp', 'desc')
    },
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    }
  }
}
</script>

<style></style>
