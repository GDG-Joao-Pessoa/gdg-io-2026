'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap">
        <Link className="brand" href="/#top">
          <Image src="/assets/gdg-icon.png" alt="GDG" width={28} height={28} />
          <span className="chap">GDG João Pessoa</span>
        </Link>
        <div className={`links${open ? ' open' : ''}`} id="navlinks">
          <a href="/#sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="/#agenda" onClick={() => setOpen(false)}>Agenda</a>
          <a href="/#palestrantes" onClick={() => setOpen(false)}>Palestrantes</a>
          <a href="/#c4p" onClick={() => setOpen(false)}>Call for Papers</a>
          <a href="/#voluntarios" onClick={() => setOpen(false)}>Voluntários</a>
          <a href="/#local" onClick={() => setOpen(false)}>Local</a>
          <a href="/#faq" onClick={() => setOpen(false)}>FAQ</a>
        </div>
        <a className="btn btn-primary nav-cta" href="/#ingressos" style={{ fontSize: '15px', padding: '11px 22px' }}>
          Inscreva-se
        </a>
        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
