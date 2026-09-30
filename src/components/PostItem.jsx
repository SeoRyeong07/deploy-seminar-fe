function formatDate(iso) {
  return new Date(iso).toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function PostItem({ post }) {
  const isDeploy = post.type === 'deploy'
  return (
    <li className={`post-item ${isDeploy ? 'post-item-deploy' : 'post-item-message'}`}>
      <div className="post-item-header">
        <span className="post-item-name">{post.name}</span>
        {isDeploy && <span className="post-item-badge">배포 성공</span>}
        <span className="post-item-date">{formatDate(post.createdAt)}</span>
      </div>
      <p className="post-item-text">{post.message}</p>
    </li>
  )
}
