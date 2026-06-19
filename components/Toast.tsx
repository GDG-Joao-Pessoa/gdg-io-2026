'use client'

import { useEffect } from 'react'

interface ToastProps {
  type: 'success' | 'error'
  message: string
  onClose: () => void
}

export default function Toast({ type, message, onClose }: ToastProps) {
  useEffect(() => {
    if (type === 'success') {
      const t = setTimeout(onClose, 4000)
      return () => clearTimeout(t)
    }
  }, [type, onClose])

  return (
    <div className={`toast toast-${type}`} role="alert" aria-live="assertive">
      <div className="toast-icon">
        {type === 'success' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
        )}
      </div>
      <span className="toast-msg">{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
