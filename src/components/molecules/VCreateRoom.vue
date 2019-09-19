<template>
  <v-card>
    <v-toolbar>
      <v-btn icon @click="click">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>New Room</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :disabled="disabled" text @click="create">Create</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-tabs v-model="select" icons-and-text grow>
      <v-tab href="#quick"> Quick <v-icon>mdi-clock-fast</v-icon> </v-tab>

      <v-tab href="#custom"> Customize<v-icon>mdi-tools</v-icon> </v-tab>

      <v-tabs-items v-model="select">
        <v-tab-item value="quick">
          <v-container class="fill-height" grid-list-xs>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="8" md="4">
                <v-create-room-quickly @valid="valid"></v-create-room-quickly>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item value="custom">
          <v-container class="fill-height" grid-list-xs>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="8" md="4">
                <v-create-room-custom></v-create-room-custom> </v-col
            ></v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import VCreateRoomQuickly from '~/components/molecules/VCreateRoomQuickly'
import VCreateRoomCustom from '~/components/molecules/VCreateRoomCustom'
import { CREATE } from '~/store/room/mutation-types'
export default {
  components: {
    VCreateRoomCustom,
    VCreateRoomQuickly
  },

  data() {
    return {
      select: null,
      disabled: false
    }
  },
  methods: {
    ...mapActions('room', [CREATE]),
    click() {
      this.$emit('click')
    },
    create() {
      this.CREATE()
      this.click()
    },

    valid(payload) {
      this.disabled = payload
    }
  }
}
</script>

<style scoped>
.v-tab__items,
.v-window-item,
.v-window >>> div.v-window__container {
  /* ここが重要 */
  height: 100%;
}
</style>
