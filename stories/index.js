// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import VFailure from '~/components/atoms/VFailure.vue'

storiesOf('VFailure', module).add('default', () => ({
  components: { VFailure },
  template: '<v-failure />'
}))

// @TODO:research how to apply for vuetify color
