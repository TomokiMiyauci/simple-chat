<template>
  <the-messages :messages="messages.slice().reverse()"> </the-messages>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { INIT } from '~/store/message/mutation-types'
import TheMessages from '~/components/organisms/TheMessages'

export default {
  components: {
    TheMessages
  },

  computed: {
    ...mapState('message', ['messages'])
  },
  created() {
    this.INIT()
  },
  methods: {
    ...mapActions('message', [INIT])
  }
}
</script>

<style></style>
