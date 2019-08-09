<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm11 md9 lg6 xl4>
          <v-layout wrap>
            <v-flex d-flex xs2 sm1>
              <v-avatar>
                <v-img
                  :src="
                    message.profilePicUrl
                      ? message.profilePicUrl
                      : require('~/assets/images/anonymous.jpg')
                  "
                />
              </v-avatar>
            </v-flex>

            <div>
              <div class="name pl-1 overline">
                {{ message.name || 'Anonimus' }}
              </div>
              <div>
                <v-callout>{{ message.text }}</v-callout>
                <div class="timestamp pl-2 overline">
                  {{ message.timestamp | toHHMM }}
                </div>
              </div>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
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
    }
  }
}
</script>

<style>
.name {
  position: relative;
  left: 15px;
}
.timestamp {
  display: inline-block;
}
</style>
