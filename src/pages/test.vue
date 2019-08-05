<template>
  <div>
    <v-pull-to-refresh :callback="a" />
    <ul>
      <li>
        sfkj
      </li>
    </ul>
  </div>
</template>

<script>
import VPullToRefresh from '~/components/organisms/VPullToRefresh'
export default {
  components: {
    VPullToRefresh
  },
  methods: {
    a() {
      alert()
    }
  }
}
</script>

<style></style>
