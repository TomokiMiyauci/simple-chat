import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VBtnImage from '~/components/molecules/VBtnImage'

const localVue = createLocalVue()
describe('VBtnImage', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should trigger event', () => {
    const wrapper = shallowMount(VBtnImage, { localVue, vuetify })

    console.log(wrapper.emitted())
    expect(wrapper.emitted().onload).toBeTruthy()
  })
})
