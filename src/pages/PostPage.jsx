import { Link, useParams } from 'react-router-dom'
import PostNavigation from '../components/PostNavigation'
import TagList from '../components/TagList'
import { getAdjacentPosts, getPostBySlug } from '../utils/postUtils'
import { formatDate } from '../utils/formatDate'

function PostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>This post does not exist in the local mock dataset.</p>
        <Link to="/">Return home</Link>
      </section>
    )
  }

  const { previousPost, nextPost } = getAdjacentPosts(slug)

  return (
    <article className="post-detail">
      <Link to="/" className="back-link">← Back to all posts</Link>
      <h1>{post.title}</h1>
      <p className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <TagList tags={post.tags} />
      <div className="post-content">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <PostNavigation previousPost={previousPost} nextPost={nextPost} />
    </article>
  )
}

export default PostPage
