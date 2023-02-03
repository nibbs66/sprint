import { render } from '@redwoodjs/testing/web'

import Sponsors from './Sponsors'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sponsors', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sponsors />)
    }).not.toThrow()
  })
})
