<template>
  <v-card>
    <v-toolbar>
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
    <v-tabs v-model="select" fixed-tabs>
      <v-tab href="#profile">
        <v-icon>mdi-account-edit</v-icon>
      </v-tab>
      <v-tab href="#props">
        <v-icon>mdi-settings</v-icon>
      </v-tab>

      <v-tabs-items v-model="select">
        <v-tab-item value="profile">
          <v-container class="fill-height" grid-list-xs>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="8" md="4">
                <v-settings-profile
                  ref="profile"
                  @close="close"
                ></v-settings-profile> </v-col
            ></v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item value="props">
          <v-container class="fill-height" grid-list-xs>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="8" md="4">
                <v-settings-props></v-settings-props> </v-col
            ></v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import VSettingsProfile from '~/components/molecules/VSettingsProfile'
import VSettingsProps from '~/components/molecules/VSettingsProps'
export default {
  components: {
    VSettingsProfile,
    VSettingsProps
  },

  data() {
    return {
      select: null
    }
  },

  methods: {
    close() {
      this.$emit('close')
    },

    open() {
      this.$refs.profile.init()
    }
  }
}
</script>

<style></style>
