import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}

interface Props {
  article: Post
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{summary ? truncate(article.body, 100) : article.body}</div>
      <div>Posted at: {article.createdAt}</div>
      {!summary && (
        <div>
          <br />
          <CommentsCell />
        </div>
      )}
    </article>
  )
}

export default Article
