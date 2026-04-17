import { Link } from 'react-router-dom'

function PostNavigation({ previousPost, nextPost }) {
  return (
    <nav className="post-nav" aria-label="Post navigation">
      <div>
        {previousPost ? (
          <Link to={`/post/${previousPost.slug}`}>← Previous: {previousPost.title}</Link>
        ) : (
          <span className="post-nav-empty">No previous post</span>
        )}
      </div>
      <div>
        {nextPost ? (
          <Link to={`/post/${nextPost.slug}`}>Next: {nextPost.title} →</Link>
        ) : (
          <span className="post-nav-empty">No next post</span>
        )}
      </div>
    </nav>
  )
}

export default PostNavigation
