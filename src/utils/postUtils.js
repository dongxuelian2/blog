import { posts } from '../data/posts'

export function getSortedPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return getSortedPosts().find((post) => post.slug === slug)
}

export function getAdjacentPosts(slug) {
  const sorted = getSortedPosts()
  const index = sorted.findIndex((post) => post.slug === slug)

  if (index === -1) {
    return { previousPost: null, nextPost: null }
  }

  return {
    previousPost: sorted[index + 1] ?? null,
    nextPost: sorted[index - 1] ?? null,
  }
}
