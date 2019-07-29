<template>
  <div>
    <v-container v-for="(message, index) in messages" :key="index">
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
            <v-flex xs4 sm2>
              <div class="pl-1">
                Anonimus
              </div>
              <v-chip> {{ message.text }}</v-chip>
            </v-flex>
            <v-flex xs4 sm2 align-self-end>
              <span class="pl-2 overline">
                {{ message.timestamp | getHHMM }}
              </span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  filters: {
    getHHMM(val) {
      if (!val) {
        return
      }
      const date = val.toDate()
      return date.getHours() + ':' + date.getMinutes()
    }
  },
  data() {
    return {
      messages: [],
      src: require('~/assets/images/anonymous.jpg')
    }
  },
  firestore: {
    messages: firebase
      .firestore()
      .collection('messages')
      .orderBy('timestamp')
  }
}
</script>

<style></style>
