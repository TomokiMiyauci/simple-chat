<template>
  <div>
    <v-message :messages="messages.slice().reverse()"> </v-message>
  </div>
</template>

<script>
import VMessage from '~/components/organisms/VMessage'
import firebase from '~/plugins/firebase'

export default {
  components: {
    VMessage
  },
  data: () => ({
    messages: [],
    initQuery: 10,
    isInitialized: false,
    paging: {
      queryPerPages: 5,
      isEnd: false,
      isLoading: false
    },
    ref: {
      questions: null,
      questionsNext: null
    }
  }),

  created() {
    /* Set common Firestore reference */
    this.ref.questions = firebase
      .firestore()
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .limit(this.initQuery)
    this.$bind('messages', this.ref.questions)

    /* Load first page */
    this.handleQuestions(this.ref.questions)
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    loadMore() {
      if (this.paging.isEnd) {
        return
      }

      this.paging.isLoading = true
      this.handleQuestions(this.ref.questionsNext).then((documentSnapshots) => {
        this.paging.isLoading = false

        if (documentSnapshots.empty) {
          /* If there is no more questions to load, set paging.end to true */
          this.paging.isEnd = true
        }
      })
    },
    handleQuestions(ref) {
      //  Fetch questions of given reference
      return new Promise((resolve, reject) => {
        ref.get().then((documentSnapshots) => {
          /* If documentSnapshots is empty, then we have loaded all of pages */
          if (documentSnapshots.empty) {
            this.paging.isEnd = true
            resolve(documentSnapshots)
          }
          if (this.isInitialized) {
            documentSnapshots.forEach((doc) => {
              const questionData = doc.data()
              questionData.id = doc.id
              this.messages.push(questionData)
            })
          } else {
            this.isInitialized = true
          }

          /* Build reference for next page */
          const lastVisible = documentSnapshots.docs[documentSnapshots.size - 1]

          if (!lastVisible) {
            return
          }

          this.ref.questionsNext = this.ref.questions
            .startAfter(lastVisible)
            .limit(this.paging.queryPerPages)

          resolve(documentSnapshots)
        })
      })
    },
    scrollHandler() {
      if (!document.documentElement.scrollTop) {
        this.loadMore()
      }
    }
  }
}
</script>

<style></style>
