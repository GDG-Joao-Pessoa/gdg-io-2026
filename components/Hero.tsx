'use client'

import { useState } from 'react'
import Image from 'next/image'
import Countdown from './Countdown'

export default function Hero() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <header className="hero" id="top">
      <div className="sh semiB" style={{ width: 520, height: 260, left: -140, top: -1, background: 'var(--blue)' }} />
      <div className="sh circ" style={{ width: 120, height: 120, right: '8%', top: 120, background: 'var(--yellow)' }} />
      <div className="sh circ" style={{ width: 64, height: 64, left: '46%', top: 80, background: 'var(--red)' }} />
      <Image
        className="sh"
        src="/assets/gdg-icon-solid-white.png"
        alt=""
        width={300}
        height={300}
        style={{ position: 'absolute', left: -40, bottom: 60, opacity: .05, pointerEvents: 'none' }}
      />

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow" style={{ color: 'var(--yellowH)' }}>
              Sábado · 18 de julho de 2026 · UNIESP
            </span>
            <h1>
              I/O Extended<br />
              <span className="plus">+</span> Build with AI
            </h1>
            <p className="lede">
              O maior encontro de desenvolvedores da Paraíba chega a João Pessoa. Um dia inteiro de palestras, mão na massa com IA e comunidade.
            </p>
            <div className="factbar">
              <span className="f"><span className="pin" style={{ background: 'var(--blueH)' }} />18 JUL · Sábado</span>
              <span className="f"><span className="pin" style={{ background: 'var(--greenH)' }} />08h às 17h30</span>
              <span className="f"><span className="pin" style={{ background: 'var(--redH)' }} />UNIESP · Cabedelo-PB</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-on-dark" href="https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603" target="_blank" rel="noopener">
                <span className="dot" style={{ background: 'var(--red)' }} />Quero participar
              </a>
              <a className="btn btn-ghost" href="#agenda">Ver agenda</a>
            </div>
          </div>

          <div className="hero-media">
            <div
              className="hero-photo"
              onClick={() => setLightboxSrc('/assets/hero-community.png')}
            >
              <Image
                src="/assets/hero-community.png"
                alt="Comunidade GDG João Pessoa reunida no evento"
                width={800}
                height={1000}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="badge">#IOExtendedJP</div>
          </div>
        </div>
      </div>

      <Countdown />

      {lightboxSrc && (
        <div className="lightbox open" onClick={() => setLightboxSrc(null)}>
          <button className="lb-close" aria-label="Fechar" onClick={() => setLightboxSrc(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img src={lightboxSrc} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </header>
  )
}
