import { mapMutations } from 'vuex'
import { SET_TITLE } from '~/store/navbar/mutation-types'
export const mixin = {
  created() {
    this.SET_TITLE(this.title)
  },
  methods: {
    ...mapMutations('navbar', [SET_TITLE])
  }
}
