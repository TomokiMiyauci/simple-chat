<template>
  <v-list>
    <v-subheader>{{ subheader }}</v-subheader>
    <v-chip-group column class="pl-2">
      <v-chip
        v-for="tag in tags"
        :key="tag.icon"
        label
        :color="tag.color"
        text-color="white"
        :value="tag"
        @click="click(tag)"
      >
        <v-icon left>{{ tag.icon }}</v-icon
        >{{ tag.text }}
      </v-chip>
    </v-chip-group>
  </v-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SET_TAG } from '~/store/post/mutation-types'
export default {
  data() {
    return {
      subheader: 'Chose Tag',
      tags: [
        {
          icon: 'mdi-flash-alert',
          text: 'Emergency',
          color: 'yellow darken-1'
        },
        { icon: 'mdi-alert-decagram', text: 'Important', color: 'purple' },
        { icon: 'mdi-hand-okay', text: 'OK', color: 'success' },
        { icon: 'mdi-thumb-up', text: 'Like', color: 'red darken-1' },
        { icon: 'mdi-thumb-down', text: 'Bad', color: 'blue darken-1' }
      ]
    }
  },

  computed: {
    ...mapState('post', ['tag'])
  },

  methods: {
    ...mapActions('post', [SET_TAG]),
    click(payload) {
      if (this.isDuplicate(payload)) {
        this.SET_TAG(null)
      } else {
        this.SET_TAG(payload)
      }
      this.$emit('onload')
    },

    isDuplicate(payload) {
      if (!this.tag) {
        return false
      } else if (this.tag.icon === payload.icon) {
        return true
      }
    }
  }
}
</script>

<style></style>
