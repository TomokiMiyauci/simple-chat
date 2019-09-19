<template>
  <v-app-bar dark app>
    <v-toolbar-title>Roomy</v-toolbar-title>
    <v-spacer />
    <the-avatar />

    <template v-slot:extension>
      <the-create-room></the-create-room>
      <v-btn-icon class="ml-12" icon="mdi-comment-search"></v-btn-icon>

      <v-spacer />
      <v-btn-icon icon="mdi-sort-descending"></v-btn-icon>
      <v-toggle-btn></v-toggle-btn>
    </template>
  </v-app-bar>
</template>
<script>
import VToggleBtn from '~/components/molecules/VToggleBtn'
import VBtnIcon from '~/components/atoms/VBtnIcon'
import TheAvatar from '~/components/organisms/TheAvatar'
import TheCreateRoom from '~/components/organisms/TheCreateRoom'
export default {
  components: {
    TheAvatar,
    TheCreateRoom,
    VBtnIcon,
    VToggleBtn
  }
}
</script>
