<template>
  <div>
    <the-pull-to-refresh :callback="loadMore"></the-pull-to-refresh>
    <the-messages :messages="messages.slice().reverse()"> </the-messages>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import TheMessages from '~/components/organisms/TheMessages'
import firebase from '~/plugins/firebase'

export default {
  components: {
    TheMessages,
    ThePullToRefresh
  },
  data() {
    return {
      lastVisible: null
    }
  },
  computed: {
    ...mapState('message', ['messages', 'limit', 'isEnd', 'isLoading'])
  },
  created() {
    const firstQuery = this.query().limit(this.limit)
    this.QUERY_SNAPSHOT()
    firstQuery.get().then((documentSnapshots) => {
      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
      this.lastVisible = lastVisible
    })
  },
  methods: {
    ...mapMutations('message', ['GET', 'end', 'loading']),
    ...mapActions('message', ['QUERY_SNAPSHOT']),
    queryHandler(ref) {
      return new Promise((resolve, reject) => {
        ref.get().then((documentSnapshots) => {
          if (documentSnapshots.empty) {
            this.end(true)
            resolve()
          }
          if (this.isEnd) {
            resolve()
            return
          }
          this.lastVisible = documentSnapshots.docs[documentSnapshots.size - 1]
          documentSnapshots.forEach((res) => this.GET(res.data()))
          resolve()
        })
      })
    },
    loadMore() {
      return new Promise((resolve, reject) => {
        const nextQuery = this.query()
          .startAfter(this.lastVisible)
          .limit(this.limit)
        this.loading(true)
        this.queryHandler(nextQuery).then(() => {
          this.loading(false)
          resolve()
        })
      })
    },
    query() {
      return firebase
        .firestore()
        .collection('messages')
        .orderBy('timestamp', 'desc')
    }
  }
}
</script>

<style></style>
