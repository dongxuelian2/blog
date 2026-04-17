import { Link } from 'react-router-dom'
import TagList from './TagList'
import { formatDate } from '../utils/formatDate'

function PostListItem({ post }) {
  return (
    <article className="post-card">
      <h2>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <p>{post.excerpt}</p>
      <TagList tags={post.tags} />
    </article>
  )
}

export default PostListItem
