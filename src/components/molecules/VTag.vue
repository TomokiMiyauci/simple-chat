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
export default {
  data() {
    return {
      checker: null,
      subheader: 'Chose Tag',
      tags: [
        { icon: 'mdi-alert', text: 'Emergency', color: 'purple' },
        { icon: 'mdi-hand-okay', text: 'OK', color: 'success' },
        { icon: 'mdi-thumb-up', text: 'Like', color: 'red darken-1' },
        { icon: 'mdi-thumb-down', text: 'Bad', color: 'blue darken-1' }
      ]
    }
  },

  methods: {
    click(payload) {
      if (this.isDuplicate(payload)) {
        this.$emit('onload', {})
        this.checker = null
      } else {
        this.$emit('onload', payload)
        this.checker = payload
      }
    },

    isDuplicate(payload) {
      if (this.checker && this.checker.icon === payload.icon) {
        return true
      }
    }
  }
}
</script>

<style></style>
