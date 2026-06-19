'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const OPENS_AT = new Date('2026-06-19T18:00:00-03:00').getTime()

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function getRemaining() {
  const diff = OPENS_AT - Date.now()
  if (diff <= 0) return null
  const h = Math.floor(diff / 3_600_000)
  const m = Math.floor((diff % 3_600_000) / 60_000)
  const s = Math.floor((diff % 60_000) / 1_000)
  return { h, m, s }
}

export default function C4PCountdown() {
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    if (!remaining) return
    const id = setInterval(() => {
      const r = getRemaining()
      setRemaining(r)
      if (!r) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [remaining])

  if (!remaining) {
    return (
      <Link className="btn btn-on-dark" href="/call-for-papers">
        <span className="dot" style={{ background: 'var(--red)' }} />Enviar proposta
      </Link>
    )
  }

  const { h, m, s } = remaining
  const label = h > 0
    ? `${h}h ${pad(m)}m ${pad(s)}s`
    : `${pad(m)}m ${pad(s)}s`

  return (
    <button className="btn btn-on-dark c4p-countdown" disabled>
      <span className="dot" style={{ background: 'var(--red)' }} />
      <span className="c4p-countdown-text">
        <span className="c4p-countdown-label">Abre hoje às 18h</span>
        <span className="c4p-countdown-timer" suppressHydrationWarning>{label}</span>
      </span>
    </button>
  )
}
