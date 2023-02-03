import { render } from '@redwoodjs/testing/web'

import Maps from './Maps'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Maps', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Maps />)
    }).not.toThrow()
  })
})
