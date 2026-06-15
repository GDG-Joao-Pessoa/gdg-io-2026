import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Palestrantes · GDG João Pessoa — I/O Extended + Build with AI',
  description: 'Conheça os palestrantes do I/O Extended + Build with AI — 18 de julho, UNIESP, Cabedelo-PB.',
}

export default function Palestrantes() {
  return (
    <>
      <Nav />

      <header className="spk-page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--redH)' }}>Quem vai falar</span>
          <h1>Palestrantes</h1>
          <p>
            Estamos finalizando a lista de convidados. Em breve anunciamos os palestrantes confirmados —
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
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="spk soon" key={i}>
                <div className="q">?</div>
                <div className="mono">Em breve</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
