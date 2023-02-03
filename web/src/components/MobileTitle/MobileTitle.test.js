import { render } from '@redwoodjs/testing/web'

import MobileTitle from './MobileTitle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileTitle />)
    }).not.toThrow()
  })
})
