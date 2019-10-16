<template>
  <div>
    <div v-if="isOwn">
      <div class="timestamp pr-2 overline">
        {{ message.timestamp | toHHMM }}
      </div>
      <v-callout v-if="message.audioURL" :is-left="false"
        ><v-audio :src="message.audioURL"></v-audio
      ></v-callout>
      <v-callout v-else-if="message.text" :is-left="false">{{
        message.text
      }}</v-callout>
      <v-callout v-else :is-left="false"
        ><v-img :src="message.imageURL"></v-img
      ></v-callout>
    </div>

    <template v-else>
      <div class="avatar">
        <v-menu>
          <template #activator="{on}">
            <v-hover #default="{hover}">
              <v-avatar :class="hover ? 'elevation-5' : ''" v-on="on">
                <v-img
                  :src="
                    message.profilePicUrl
                      ? message.profilePicUrl
                      : require('~/assets/images/anonymous.jpg')
                  "
                  alt="avatar"
                />
              </v-avatar>
            </v-hover>
          </template>
          <v-card max-width="200px" class="elevation-10">
            <div style="width:200px;">
              <v-row justify="center">
                <v-col cols="auto">
                  <v-avatar class="text-center" size="100">
                    <v-img
                      :src="
                        message.profilePicUrl
                          ? message.profilePicUrl
                          : require('~/assets/images/anonymous.jpg')
                      "
                      alt="avatar"
                    />
                  </v-avatar>
                </v-col>
              </v-row>

              <p class="text-center">{{ message.name || 'Anonimus' }}</p>
            </div>
            <v-divider />
            <v-card-actions>
              <v-btn text>invite</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
      <div class="nameMessage">
        <div class="overline py-1">
          {{ message.name || 'Anonimus' }}
        </div>
        <v-callout v-if="message.audioURL"
          ><v-audio :src="message.audioURL"></v-audio
        ></v-callout>
        <v-callout v-else-if="message.text">{{ message.text }}</v-callout>
        <v-callout v-else><v-img :src="message.imageURL"></v-img></v-callout>
        <div class="timestamp overline">{{ message.timestamp | toHHMM }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import VCallout from '~/components/atoms/VCallout'
import VAudio from '~/components/atoms/VAudio'
export default {
  components: {
    VCallout,
    VAudio
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
