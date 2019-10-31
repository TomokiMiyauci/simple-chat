import { shallowMount } from '@vue/test-utils'
import VBtnBack from '~/components/atoms/VBtnBack'

describe('VBtnBack', () => {
  it('should have mdi-arrow-left icon as default', () => {
    const wrapper = shallowMount(VBtnBack)
    expect(wrapper.attributes().icon).toBe('mdi-arrow-left')
  })
})
