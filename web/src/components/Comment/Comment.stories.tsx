import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'bob commenter',
        body: 'this is a comment',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export default { title: 'Components/Comment' }
