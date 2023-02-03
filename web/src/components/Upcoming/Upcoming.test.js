import { render } from '@redwoodjs/testing/web'

import Upcoming from './Upcoming'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Upcoming', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Upcoming />)
    }).not.toThrow()
  })
})
