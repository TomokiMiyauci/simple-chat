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
            <v-flex xs4 sm2>
              <div class="pl-1 overline">
                {{ message.name || 'Anonimus' }}
              </div>
              <v-chip> {{ message.text }}</v-chip>
              <span class="pl-2 overline">
                {{ message.timestamp | toHHMM }}
              </span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
