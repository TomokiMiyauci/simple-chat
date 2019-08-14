<template>
  <v-speed-dial
    v-model="fab"
    direction="top"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-badge v-model="isShowBadge" :color="badgeColor" overlap>
        <template v-slot:badge>
          <v-icon dark>{{ badgeIcon }}</v-icon>
        </template>
        <v-btn v-model="fab" icon>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-tag</v-icon>
        </v-btn>
      </v-badge>
    </template>
    <v-btn
      v-for="icon in icons"
      :key="icon.icon"
      :color="icon.backColor"
      fab
      dark
      small
      @click="switchBadge(icon)"
    >
      <v-icon>{{ icon.icon }}</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data() {
    return {
      isShowBadge: false,
      badgeIcon: null,
      badgeColor: null,
      fab: false,
      icons: [
        { icon: 'mdi-alert', backColor: 'yellow darken-1' },
        { icon: 'mdi-thumb-down', backColor: 'red darken-1' },
        { icon: 'mdi-thumb-up', backColor: 'blue darken-1' }
      ]
    }
  },
  methods: {
    switchBadge(val) {
      if (this.badgeIcon === val.icon) {
        this.isShowBadge = !this.isShowBadge
      } else {
        this.badgeColor = val.backColor
        this.badgeIcon = val.icon
        this.isShowBadge = true
      }
    }
  }
}
</script>

<style></style>
