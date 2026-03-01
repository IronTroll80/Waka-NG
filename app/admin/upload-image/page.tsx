'use client'

import { useState } from 'react'

export default function AdminImageUpload() {
  const [slug, setSlug] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')
  const [message, setMessage] = useState('')

  const handleUpload = async () => {
    if (!slug || !file) {
      alert('Provide both slug and file')
      return
    }

    setUploading(true)
    setMessage('')

    try {
      const formData = new FormData()
      formData.append('slug', slug)
      formData.append('file', file)

      const res = await fetch('/api/upload', { method: 'POST', body: formData })

      let data
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        data = await res.json()
      } else {
        const text = await res.text()
        throw new Error(`Unexpected response: ${text.substring(0, 200)}...`)
      }

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      setPreviewUrl(data.url)
      setMessage('Upload successful!')
      setFile(null)
      setSlug('')
    } catch (err: any) {
      console.error(err)
      setMessage('Upload failed: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Admin Image Upload</h1>

      <input
        type="text"
        placeholder="Enter product slug"
        value={slug}
        onChange={e => setSlug(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={e => e.target.files && setFile(e.target.files[0])}
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <button onClick={handleUpload} disabled={uploading} style={{ padding: '0.5rem 1rem' }}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {message && <p style={{ marginTop: '1rem', color: uploading ? 'gray' : 'green' }}>{message}</p>}

      {previewUrl && (
        <div style={{ marginTop: '1rem' }}>
          <p>Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  )
}