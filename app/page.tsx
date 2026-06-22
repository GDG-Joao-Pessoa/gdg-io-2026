import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SpeakersCarousel from '@/components/SpeakersCarousel'
import C4PCountdown from '@/components/C4PCountdown'
import VolunteerCountdown from '@/components/VolunteerCountdown'
import { stats, tracks, tickets, faqItems } from '@/data'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Google I/O Extended João Pessoa + Build with AI',
  description: 'O maior encontro de desenvolvedores da Paraíba. Um dia inteiro de palestras, mão na massa com IA e comunidade.',
  startDate: '2026-07-18T08:00:00-03:00',
  endDate: '2026-07-18T17:30:00-03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'UNIESP Centro Universitário',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BR-230, Km 14 — Morada Nova',
      addressLocality: 'Cabedelo',
      addressRegion: 'PB',
      postalCode: '58109-303',
      addressCountry: 'BR',
    },
  },
  image: 'https://gdgjoaopessoa.com.br/assets/hero-community.png',
  url: 'https://gdgjoaopessoa.com.br',
  organizer: {
    '@type': 'Organization',
    name: 'GDG João Pessoa',
    url: 'https://gdgjoaopessoa.com.br',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.sympla.com.br/evento/google-i-o-extended-joao-pessoa/3464603',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-06-15T12:00:00-03:00',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <Hero />

      {/* ===== SOBRE ===== */}
      <section className="section alt" id="sobre">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Sobre o evento</span>
            <h2>Tecnologia, IA e comunidade num só dia.</h2>
            <p>
              O I/O Extended é a versão local do Google I/O, organizada por comunidades de desenvolvedores no mundo todo.
              Em João Pessoa, juntamos o melhor do I/O com o programa <strong>Build with AI</strong> — trazendo as novidades do Google,
              conteúdo prático e gente apaixonada por construir.
            </p>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.n}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AGENDA (teaser) ===== */}
      <section className="section" id="agenda">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Programação · 18 de julho</span>
            <h2>Quatro trilhas de conteúdo</h2>
            <p>De manhã, keynotes no palco principal. À tarde, o evento se divide em quatro trilhas paralelas — escolha a que mais combina com você.</p>
          </div>
          <div className="trk-cards">
            {tracks.map((t) => (
              <div className="trkc" key={t.name}>
                <div className="bar" style={{ background: t.color }} />
                <div className="in">
                  <span className="k">Trilha</span>
                  <div className="nm">{t.name}</div>
                  <div className="ds">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="agenda-more">
            <Link className="btn btn-light" href="/programacao">
              <span className="dot" style={{ background: 'var(--green)' }} />Ver programação completa
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PALESTRANTES ===== */}
      <section className="section alt" id="palestrantes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>Quem vai falar</span>
            <h2>Palestrantes</h2>
            <p>Estamos finalizando a lista de convidados. Em breve anunciamos os palestrantes confirmados — fique de olho no nosso Instagram.</p>
          </div>
          <SpeakersCarousel />
        </div>
      </section>

      {/* ===== C4P + VOLUNTÁRIOS ===== */}
      <section className="section" id="c4p">
        <div className="wrap">
          <div className="bands">
            <div className="band c4p">
              <div className="sh" style={{ width: 280, height: 280, right: -60, top: -80, background: 'radial-gradient(circle,rgba(66,133,244,.4),transparent 70%)' }} />
              <div className="bcopy">
                <span className="eyebrow" style={{ color: 'var(--yellowH)' }}>Chamada de palestras · C4P</span>
                <h3>Compartilhe seu conhecimento</h3>
                <p>Tem um tema sobre desenvolvimento, IA, cloud, mobile ou comunidade? Envie sua proposta de palestra e suba no palco do I/O Extended. Resultados até <strong>30 de junho</strong>.</p>
                <div className="cta-row">
                  <C4PCountdown />
                </div>
              </div>
              <div className="ill">
                <Image src="/assets/gdg-icon-solid-white.png" alt="" width={280} height={280} priority />
              </div>
            </div>

            <div className="band vol" id="voluntarios">
              <div className="bcopy">
                <span className="eyebrow" style={{ color: 'var(--green)' }}>Faça parte do time</span>
                <h3>Seja voluntário</h3>
                <p>O evento é construído por pessoas como você. Ajude na organização, recepção, conteúdo ou bastidores e viva o I/O por dentro.</p>
                <div className="cta-row">
                  <VolunteerCountdown />
                </div>
              </div>
              <div className="ill">
                <Image src="/assets/gdg-icon.png" alt="" width={280} height={280} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section className="section" id="beneficios">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>O que está incluído</span>
            <h2>Tudo que você ganha no evento</h2>
            <p>Um ingresso, uma experiência completa — do café da manhã ao certificado.</p>
          </div>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit-icon" style={{ background: 'rgba(52,168,83,.1)', color: 'var(--greenH)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <div className="benefit-body">
                <div className="benefit-title">Alimentação incluída</div>
                <div className="benefit-desc">Dois coffee breaks ao longo do dia, com café, lanches e frutas — sem custo extra.</div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" style={{ background: 'rgba(66,133,244,.1)', color: 'var(--blueH)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="benefit-body">
                <div className="benefit-title">Certificado de participação</div>
                <div className="benefit-desc">Certificado digital emitido para todos os participantes inscritos após o evento.</div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" style={{ background: 'rgba(249,171,0,.1)', color: 'var(--yellowH)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="benefit-body">
                <div className="benefit-title">Networking</div>
                <div className="benefit-desc">Conecte-se com +500 devs, designers e entusiastas de tecnologia da Paraíba e do Brasil.</div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" style={{ background: 'rgba(234,67,53,.1)', color: 'var(--redH)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <div className="benefit-body">
                <div className="benefit-title">Kit exclusivo do evento</div>
                <div className="benefit-desc">Material e brindes exclusivos preparados pelo GDG João Pessoa para todos os participantes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INGRESSOS ===== */}
      <section className="section alt" id="ingressos">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Inscrição</span>
            <h2>Garanta seu ingresso</h2>
            <p>As inscrições acontecem por lotes. <strong>1º lote aberto</strong> — quanto antes, melhor o preço.</p>
          </div>
          <div className="tickets">
            {tickets.map((t) => (
              <div className={`tk${t.featured ? ' feature' : ''}`} key={t.id}>
                <span className="k">
                  {t.name}
                  {(t as typeof t & { open?: boolean }).open && (
                    <span className="tk-open">Inscrições abertas</span>
                  )}
                </span>
                <div className="price">{t.price}</div>
                <ul className="lst">
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  className={`btn ${(t as typeof t & { open?: boolean }).open ? 'btn-on-dark' : 'btn-soon'}`}
                  href={t.ctaHref}
                  target="_blank"
                  rel="noopener"
                  style={{ justifyContent: 'center' }}
                >
                  {t.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARCEIROS ===== */}
      <section className="section" id="parceiros">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--yellow)' }}>Parcerias &amp; patrocínio</span>
            <h2>Apoie quem move a comunidade</h2>
            <p>Conecte sua marca a centenas de desenvolvedores e entusiastas de tecnologia da Paraíba. Temos cotas para todos os tamanhos de empresa.</p>
          </div>
          <div className="partner-cta">
            <div className="sh" style={{ width: 240, height: 240, left: -50, bottom: -80, background: 'rgba(52,168,83,.32)' }} />
            <div className="sh" style={{ width: 120, height: 120, right: 60, top: 40, background: 'rgba(249,171,0,.28)' }} />
            <h3>Seja um parceiro do I/O Extended</h3>
            <p>Baixe o nosso kit de patrocínio e descubra como sua empresa pode apoiar o evento.</p>
            <div className="tier-row">
              {['Diamante', 'Ouro', 'Prata', 'Bronze'].map((t) => (
                <span className="tier" key={t}>{t}</span>
              ))}
            </div>
            <div className="cta-row">
              <Link className="btn btn-on-dark" href="/parceiro">
                <span className="dot" style={{ background: 'var(--blue)' }} />Quero ser parceiro
              </Link>
              <Link className="btn btn-ghost" href="/kit-de-patrocinio" style={{ color: 'var(--off)' }}>
                Baixar kit de patrocínio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCAL ===== */}
      <section className="section alt" id="local">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Como chegar</span>
            <h2>O local</h2>
          </div>
          <div className="local-grid">
            <div className="local-info">
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em' }}>UNIESP Centro Universitário</div>
              <div className="addr">
                <span className="pin" />
                <span className="txt">BR-230, Km 14 — Morada Nova<br />Cabedelo · PB · 58109-303</span>
              </div>
              <div className="rating">
                <b>4,5</b>
                <span className="stars">★★★★½</span>
                <span>688 avaliações no Google</span>
              </div>
              <div className="cta-row" style={{ marginTop: 30 }}>
                <a className="btn btn-light" href="https://maps.app.goo.gl/jopXQE6BXDBoqLLWA" target="_blank" rel="noopener">
                  <span className="dot" style={{ background: 'var(--red)' }} />Abrir no Maps
                </a>
              </div>
            </div>
            <div className="local-map">
              <a href="https://maps.app.goo.gl/jopXQE6BXDBoqLLWA" target="_blank" rel="noopener">
                <Image
                  src="/assets/uniesp-local.png"
                  alt="UNIESP Centro Universitário — fachada"
                  width={600}
                  height={450}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 24, border: '1.5px solid var(--line)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>Dúvidas frequentes</span>
            <h2>FAQ</h2>
          </div>
          <div className="faq">
            {faqItems.map((item, i) => (
              <details key={i} open={item.open}>
                <summary>{item.q}<span className="ic" /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section className="section alt" id="contato">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Fale com a gente</span>
            <h2>Contato</h2>
            <p>Dúvidas, parcerias ou imprensa? A gente responde.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="k">Instagram</span>
              <span className="v">
                <a href="https://instagram.com/gdgjoaopessoa" target="_blank" rel="noopener">@gdgjoaopessoa</a>
              </span>
              <p style={{ color: 'var(--muted)', marginTop: 8 }}>Novidades, palestrantes e abertura de inscrições.</p>
            </div>
            <div className="contact-card">
              <span className="k">E-mail</span>
              <span className="v">
                <a href="mailto:gdgjpb@gmail.com">gdgjpb@gmail.com</a>
              </span>
              <p style={{ color: 'var(--muted)', marginTop: 8 }}>Parcerias, patrocínio e imprensa.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
