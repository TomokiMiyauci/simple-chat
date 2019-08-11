<template>
  <div>
    <div v-if="isOwn">
      <div class="timestamp pr-2 overline">
        {{ message.timestamp | toHHMM }}
      </div>
      <v-callout v-if="message.text" :is-left="false">{{
        message.text
      }}</v-callout>
      <v-callout v-else>{{ message.image }}</v-callout>
    </div>
    <template v-else>
      <div class="avatar">
        <v-avatar>
          <v-img
            :src="
              message.profilePicUrl
                ? message.profilePicUrl
                : require('~/assets/images/anonymous.jpg')
            "
            alt="avatar"
          />
        </v-avatar>
      </div>
      <div class="nameMessage">
        <div class="overline py-1">
          {{ message.name || 'Anonimus' }}
        </div>
        <v-callout v-if="message.text">{{ message.text }}</v-callout>
        <v-callout v-else><v-img :src="message.image"></v-img></v-callout>
        <div class="timestamp overline">{{ message.timestamp | toHHMM }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import VCallout from '~/components/atoms/VCallout'
export default {
  components: {
    VCallout
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    isOwn: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline;
  position: absolute;
}

.nameMessage {
  display: inline-block;
  position: relative;
  left: 70px;
}
.timestamp {
  display: inline-block;
}
</style>
