import PostItem from './PostItem'

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="post-empty">아직 게시글이 없어요.</p>
  }
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}
