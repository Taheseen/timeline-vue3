import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderTitle from '../HeaderTitle.vue'

describe('HeaderTitle', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderTitle, { props: { msg: 'Page title' } })
    expect(wrapper.text()).toContain('Page title')
  })
})
