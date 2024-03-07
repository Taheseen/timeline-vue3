import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AssignmentCards from '../AssignmentCards.vue'

describe('AssignmentCards', () => {
  it('renders properly', () => {
    const wrapper = mount(AssignmentCards, {
      props: {
        assignment: {
          id: 2,
          event: 'testevent',
          duration: '2217 - 2019',
          description: 'description',
          isPresent: false
        }
      }
    })
    const tempalte = wrapper.find('template')
    expect(tempalte).toBeTruthy()
    expect(wrapper.text()).toContain('testevent')
  })
})
