import { storiesOf } from '@storybook/vue'
import VFailure from '~/components/atoms/VFailure'

storiesOf('atoms/VFailure', module).add('default', () => ({
  components: { VFailure },
  template: '<v-failure />'
}))
