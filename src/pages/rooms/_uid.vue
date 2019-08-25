<template>
  <the-messages :messages="messages.slice().reverse()"> </the-messages>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { INIT } from '~/store/message/mutation-types'
import TheMessages from '~/components/organisms/TheMessages'

export default {
  components: {
    TheMessages
  },

  computed: {
    ...mapState('room', ['messages'])
  },
  created() {
    const uid = this.$route.params.uid
    this.setUid(uid)
    this.INIT()
  },
  methods: {
    ...mapMutations('room', ['setUid']),
    ...mapActions('room', [INIT])
  }
}
</script>

<style></style>
