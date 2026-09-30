const API_URL = import.meta.env.VITE_API_URL

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/api/posts`)
  if (!res.ok) throw new Error('게시글을 불러오지 못했어요.')
  return res.json()
}

export async function createPost(data) {
  const res = await fetch(`${API_URL}/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error || '등록에 실패했어요.')
  return json
}
