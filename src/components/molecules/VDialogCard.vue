<template>
  <v-dialog v-model="dialog" :width="dialogWidth">
    <template v-slot:activator="{ on }">
      <v-btn :color="buttonColor" icon dark v-on="on">
        <v-icon>
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <slot name="card" />
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogWidth: {
      type: [String, Number],
      default: 500
    },
    buttonColor: {
      type: String,
      default: 'black'
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
