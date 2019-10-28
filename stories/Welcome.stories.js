import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/vue'

import Welcome from './Welcome'

storiesOf('welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('atoms/vfailure') }
}))
