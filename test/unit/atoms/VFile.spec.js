import { shallowMount } from '@vue/test-utils'
import VFile from '~/components/atoms/VFile'

describe('VFile', () => {
  it('should have props as default', () => {
    const wrapper = shallowMount(VFile)
    expect(wrapper.props().accept).toBe('image/*')
  })

  it('should apply display none', () => {
    const wrapper = shallowMount(VFile)
    expect(wrapper.isVisible()).toBe(false)
  })

  // it('input click should ', () => {
  //   const wrapper = shallowMount(VFile)
  //   console.log(wrapper)
  //   const input = wrapper.find('input')
  //   console.log(input)
  //   input.trigger('click')
  // })
})
