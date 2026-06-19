import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SPEAKERS, TOTAL_SLOTS } from '@/lib/speakers'

export const metadata: Metadata = {
  title: 'Palestrantes · GDG João Pessoa — I/O Extended + Build with AI',
  description: 'Conheça os palestrantes do I/O Extended + Build with AI — 18 de julho, UNIESP, Cabedelo-PB.',
}

export default function Palestrantes() {
  const soonCount = Math.max(0, TOTAL_SLOTS - SPEAKERS.length)

  return (
    <>
      <Nav />

      <header className="spk-page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--redH)' }}>Quem vai falar</span>
          <h1>Palestrantes</h1>
          <p>
            Já confirmamos os primeiros nomes. Em breve anunciamos mais —
            fique de olho no{' '}
            <a href="https://instagram.com/gdgjoaopessoa" target="_blank" rel="noopener">
              @gdgjoaopessoa
            </a>.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="speakers">
            {SPEAKERS.map((s, i) => (
              <div key={s.nome} className="spk-card">
                <div className="spk">
                  <div className="spk-photo">
                    <Image src={s.foto} alt={s.nome} width={480} height={640} priority={i === 0} />
                  </div>
                  <div className="spk-overlay">
                    <div className="nm">{s.nome}</div>
                    <div className="ro">{s.cargo}</div>
                  </div>
                </div>
                <p className="spk-bio">{s.bio}</p>
              </div>
            ))}
            {Array.from({ length: soonCount }).map((_, i) => (
              <div key={`soon-${i}`} className="spk-card">
                <div className="spk soon">
                  <div className="q">?</div>
                  <div className="mono">Em breve</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
