<template>
  <v-card>
    <v-app-bar-close-btn enable-back>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-app-bar-close-btn>

    <v-dialog-wrapper fullscreen name="the-avatar-cropper">
      <the-avatar-cropper></the-avatar-cropper>
    </v-dialog-wrapper>

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
                <v-settings-profile ref="profile"></v-settings-profile> </v-col
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
import TheAvatarCropper from '~/components/organisms/TheAvatarCropper'
import VDialogWrapper from '~/components/molecules/VDialogWrapper'
import VAppBarCloseBtn from '~/components/molecules/VAppBarCloseBtn'
import VSettingsProfile from '~/components/molecules/VSettingsProfile'
import VSettingsProps from '~/components/molecules/VSettingsProps'
export default {
  components: {
    TheAvatarCropper,
    VDialogWrapper,
    VSettingsProfile,
    VSettingsProps,
    VAppBarCloseBtn
  },

  data() {
    return {
      select: null
    }
  },

  methods: {
    open() {
      this.$refs.profile.init()
    }
  }
}
</script>

<style></style>
