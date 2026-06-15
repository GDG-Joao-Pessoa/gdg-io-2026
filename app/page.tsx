import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SpeakersCarousel from '@/components/SpeakersCarousel'
import { stats, tracks, tickets, faqItems } from '@/data'

export default function Home() {
  return (
    <>
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
                <p>Tem um tema sobre desenvolvimento, IA, cloud, mobile ou comunidade? Envie sua proposta de palestra e suba no palco do I/O Extended.</p>
                <div className="cta-row">
                  <span className="tag-soon">Inscrições em breve</span>
                </div>
              </div>
              <div className="ill">
                <Image src="/assets/gdg-icon-solid-white.png" alt="" width={280} height={280} />
              </div>
            </div>

            <div className="band vol" id="voluntarios">
              <div className="bcopy">
                <span className="eyebrow" style={{ color: 'var(--green)' }}>Faça parte do time</span>
                <h3>Seja voluntário</h3>
                <p>O evento é construído por pessoas como você. Ajude na organização, recepção, conteúdo ou bastidores e viva o I/O por dentro.</p>
                <div className="cta-row">
                  <span className="tag-soon" style={{ color: 'var(--green)' }}>Inscrições em breve</span>
                </div>
              </div>
              <div className="ill">
                <Image src="/assets/gdg-icon.png" alt="" width={280} height={280} />
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
            <p>As inscrições acontecem por lotes. O 1º lote começa <strong>15 de junho, às 12h</strong>. Quanto antes, melhor o preço.</p>
          </div>
          <div className="tickets">
            {tickets.map((t) => (
              <div className={`tk${t.featured ? ' feature' : ''}`} key={t.id}>
                <span className="k">{t.name}</span>
                <div className="price">{t.price}</div>
                <ul className="lst">
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  className={`btn ${t.featured ? 'btn-on-dark' : 'btn-soon'}`}
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
