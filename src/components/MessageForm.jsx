import { useState } from 'react'

export default function MessageForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      await onSubmit(name, message)
      setName('')
      setMessage('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2500)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <p className="message-form-title">방명록 남기기</p>
      <div className="message-form-grid">
        <input
          className="message-form-input"
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
        />
        <textarea
          className="message-form-textarea"
          placeholder="내용을 입력해 주세요 (최대 50자)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={50}
          rows={3}
        />
        <button className="message-form-btn" type="submit" disabled={submitting}>
          {submitting ? '...' : '등록'}
        </button>
      </div>
      {error && <p className="message-form-feedback message-form-error">{error}</p>}
      {success && <p className="message-form-feedback message-form-success">등록됐어요!</p>}
    </form>
  )
}
