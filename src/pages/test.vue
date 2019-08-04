<template>
  <div>
    <v-avatar class="a" @click="c">
      <v-img src="https://vuetifyjs.com/apple-touch-icon-180x180.png"></v-img>
    </v-avatar>
  </div>
</template>

<script>
export default {
  methods: {
    c() {
      alert()
    }
  }
}
</script>

<style>
.a {
  position: fixed;
  top: 40px;
  right: 10px;
  z-index: 10;
}
.a:hover {
  background: rgb(172, 172, 172);
}
</style>
