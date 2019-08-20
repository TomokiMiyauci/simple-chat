<template>
  <div>
    <the-pull-to-refresh :callback="loadMore"></the-pull-to-refresh>
    <the-messages :messages="messages.slice().reverse()"> </the-messages>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { baseQuery } from '~/store/message/actions'
import ThePullToRefresh from '~/components/organisms/ThePullToRefresh'
import TheMessages from '~/components/organisms/TheMessages'

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
    this.QUERY_SNAPSHOT()
    this.init()
  },
  methods: {
    ...mapMutations('message', ['GET', 'end', 'loading']),
    ...mapActions('message', ['QUERY_SNAPSHOT']),
    async init() {
      const firstQuery = baseQuery().limit(this.limit)
      const documentSnapshots = await firstQuery.get()
      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]
      this.lastVisible = lastVisible
    },
    async queryHandler(ref) {
      const documentSnapshots = await ref.get()
      if (documentSnapshots.empty) {
        this.end(true)
      }
      if (this.isEnd) {
        return
      }
      this.lastVisible = documentSnapshots.docs[documentSnapshots.size - 1]
      documentSnapshots.forEach((res) => this.GET(res.data()))
    },
    async loadMore() {
      const nextQuery = baseQuery()
        .startAfter(this.lastVisible)
        .limit(this.limit)

      this.loading(true)
      await this.queryHandler(nextQuery)
      this.loading(false)
    }
  }
}
</script>

<style></style>
