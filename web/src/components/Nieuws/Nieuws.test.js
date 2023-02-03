import { render } from '@redwoodjs/testing/web'

import Nieuws from './Nieuws'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nieuws', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nieuws />)
    }).not.toThrow()
  })
})
