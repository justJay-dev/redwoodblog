import { render } from '@redwoodjs/testing/web'

import { standard } from '../ArticleCell/ArticleCell.mock'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={standard().article} summary={false} />)
    }).not.toThrow()
  })
})
