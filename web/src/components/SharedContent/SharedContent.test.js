import { render } from '@redwoodjs/testing/web'

import SharedContent from './SharedContent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharedContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SharedContent />)
    }).not.toThrow()
  })
})
