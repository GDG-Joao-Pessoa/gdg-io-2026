import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SPEAKERS, TOTAL_SLOTS } from '@/lib/speakers'
import { getSpeakers, type ApiSpeaker } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Palestrantes · GDG João Pessoa — I/O Extended + Build with AI',
  description: 'Conheça os palestrantes do I/O Extended + Build with AI — 18 de julho, UNIESP, Cabedelo-PB.',
}

function SoonCards({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={`soon-${i}`} className="spk-card">
          <div className="spk soon">
            <div className="q">?</div>
            <div className="mono">Em breve</div>
          </div>
        </div>
      ))}
    </>
  )
}

function DynamicSpeakers({ speakers }: { speakers: ApiSpeaker[] }) {
  const soonCount = Math.max(0, TOTAL_SLOTS - speakers.length)
  return (
    <div className="speakers">
      {speakers.map((s) => (
        <div key={s.id} className="spk-card">
          <div className="spk">
            <div className="spk-photo">
              {s.fotoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.fotoUrl} alt={s.nome} width={480} height={640} />
              ) : null}
            </div>
            <div className="spk-overlay">
              <div className="nm">{s.nome}</div>
              <div className="ro">{s.cargo}</div>
            </div>
          </div>
          {s.bio && <p className="spk-bio">{s.bio}</p>}
        </div>
      ))}
      <SoonCards count={soonCount} />
    </div>
  )
}

function FallbackSpeakers() {
  const soonCount = Math.max(0, TOTAL_SLOTS - SPEAKERS.length)
  return (
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
      <SoonCards count={soonCount} />
    </div>
  )
}

export default async function Palestrantes() {
  const speakers = await getSpeakers()
  const useApi = speakers && speakers.length > 0

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
          {useApi ? <DynamicSpeakers speakers={speakers!} /> : <FallbackSpeakers />}
        </div>
      </section>

      <Footer />
    </>
  )
}
