import { render } from '@redwoodjs/testing/web'

import IntroButtons from './IntroButtons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IntroButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntroButtons />)
    }).not.toThrow()
  })
})
