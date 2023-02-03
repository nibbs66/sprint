import { render } from '@redwoodjs/testing/web'

import MobileNavbar from './MobileNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileNavbar />)
    }).not.toThrow()
  })
})
