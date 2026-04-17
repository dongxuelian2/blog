import PostListItem from '../components/PostListItem'
import { getSortedPosts } from '../utils/postUtils'

function HomePage() {
  const postList = getSortedPosts()

  return (
    <section>
      <h1>Latest posts</h1>
      <div className="post-list">
        {postList.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
