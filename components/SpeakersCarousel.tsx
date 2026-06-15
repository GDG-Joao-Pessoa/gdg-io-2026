'use client'

import { useRef } from 'react'
import Link from 'next/link'

const CARDS = 4

export default function SpeakersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'prev' | 'next') => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.spk') as HTMLElement
    if (!card) return
    trackRef.current.scrollBy({ left: dir === 'next' ? card.offsetWidth + 20 : -(card.offsetWidth + 20), behavior: 'smooth' })
  }

  return (
    <div className="spk-carousel">
      <div className="spk-track" ref={trackRef}>
        {Array.from({ length: CARDS }).map((_, i) => (
          <div className="spk soon" key={i}>
            <div className="q">?</div>
            <div className="mono">Em breve</div>
          </div>
        ))}
      </div>

      <div className="spk-nav">
        <button className="spk-btn" onClick={() => scroll('prev')} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="spk-btn" onClick={() => scroll('next')} aria-label="Próximo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="spk-more">
        <Link className="btn btn-light" href="/palestrantes">
          <span className="dot" style={{ background: 'var(--red)' }} />Ver todos os palestrantes
        </Link>
      </div>
    </div>
  )
}
