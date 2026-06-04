import { useState } from 'react'

export default function SafeImage ({ src, alt, className = '', width, height }) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div
        className={`d-flex align-items-center justify-content-center border rounded bg-light text-secondary fw-semibold ${className}`}
        style={{
          width: width || '100%',
          height: height || '150px'
        }}
      >
        {alt || 'Image Not Found'}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  )
}
