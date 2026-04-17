function TagList({ tags }) {
  return (
    <ul className="tag-list" aria-label="Post tags">
      {tags.map((tag) => (
        <li key={tag} className="tag-item">#{tag}</li>
      ))}
    </ul>
  )
}

export default TagList
