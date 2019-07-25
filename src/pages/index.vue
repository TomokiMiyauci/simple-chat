<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6 xl5>
          <v-layout column pa-1>
            <v-flex v-for="(message, index) in messages" :key="index" py-3>
              <v-avatar>
                <v-img
                  :src="
                    message.profilePicUrl
                      ? message.profilePicUrl
                      : require('~/assets/images/anonymous.jpg')
                  "
                />
              </v-avatar>
              <v-chip> {{ message.text }} </v-chip>
              <span class="pl-1 overline">{{
                message.timestamp | getHHMM
              }}</span>
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
      .limit(10)
  }
}
</script>

<style></style>
