import { render } from '@redwoodjs/testing/web'

import SprintTypeNoOpacity from './SprintTypeNoOpacity'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SprintTypeNoOpacity', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SprintTypeNoOpacity />)
    }).not.toThrow()
  })
})
