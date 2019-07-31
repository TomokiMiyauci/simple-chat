import Vue from 'vue'

Vue.filter('toHHMM', function(val) {
  if (!val) {
    return
  }
  const date = val.toDate()
  return date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
})
