import { render } from '@redwoodjs/testing/web'

import SingleMap from './SingleMap'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SingleMap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleMap />)
    }).not.toThrow()
  })
})
