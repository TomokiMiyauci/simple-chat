<template>
  <div>
    <the-messages :messages="messages.slice().reverse()"> </the-messages>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { INIT } from '~/store/message/mutation-types'
import TheMessages from '~/components/organisms/TheMessages'

export default {
  layout: 'message',
  components: {
    TheMessages
  },

  computed: {
    ...mapState('message', ['messages'])
  },
  created() {
    const uid = this.$route.params.uid
    this.setUid(uid)
    this.INIT()
  },
  methods: {
    ...mapMutations('room', ['setUid']),
    ...mapActions('message', [INIT])
  }
}
</script>

<style></style>
