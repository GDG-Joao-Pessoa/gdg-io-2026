import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Kit de Patrocínio · GDG João Pessoa — I/O Extended + Build with AI',
}

const tiers = [
  { cls: 'd', name: 'DIAMANTE', value: 'R$ 7.000', bg: 'var(--blue)', color: '#fff' },
  { cls: 'o', name: 'OURO', value: 'R$ 5.000', bg: 'var(--yellow)', color: 'var(--ink)' },
  { cls: 'p', name: 'PRATA', value: 'R$ 3.000', bg: '#9aa0a6', color: '#fff' },
  { cls: 'a', name: 'BRONZE', value: 'R$ 1.000', bg: '#a86b3c', color: '#fff' },
]

const tableRows = [
  { label: 'Logo no site do evento', d: true, o: true, p: true, a: true },
  { label: 'Logo nos materiais de divulgação', d: true, o: true, p: true, a: true },
  { label: 'Menção nas redes sociais', d: true, o: true, p: true, a: true },
  { label: 'Logo no telão (intervalos)', d: true, o: true, p: true, a: true },
  { label: 'Certificado de empresa apoiadora', d: true, o: true, p: true, a: false },
  { label: 'Cupom / oferta no grupo do evento', d: true, o: true, p: true, a: false },
  { label: 'Brinde no kit do participante', d: true, o: true, p: true, a: false },
  { label: 'Estande no evento', d: true, o: true, p: false, a: false },
  { label: 'Espaço para recrutamento', d: true, o: true, p: false, a: false },
  { label: 'Tempo de palco / pitch', d: true, o: false, p: false, a: false },
  { label: 'Cota destacada (exclusiva)', d: true, o: false, p: false, a: false },
  { label: 'Vagas de cortesia', d: '6', o: '4', p: '2', a: '1' },
]

export default function KitDePatrocinio() {
  return (
    <>
      <style>{`
        body { background: #caccd0; padding: 40px 16px 100px; }
        .page { width: 820px; min-height: 1160px; margin: 0 auto 28px; background: #fff; position: relative; overflow: hidden; box-shadow: 0 18px 50px rgba(0,0,0,.16); }
        .page.dark { background: var(--ink); color: var(--off); }
        .pad { padding: 72px 72px; }
        .eyebrow { font-family: var(--mono), ui-monospace, monospace; font-size: 13px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); }
        .sh-kit { position: absolute; pointer-events: none; border-radius: 50%; }
        h2 { font-size: 44px; font-weight: 800; letter-spacing: -.03em; line-height: 1.02; }
        .lead { font-size: 18px; color: #3c4043; margin-top: 18px; max-width: 600px; }
        .cover .pad { display: flex; flex-direction: column; min-height: 1160px; }
        .cover .logo { height: 40px; }
        .cover .mid { margin-top: auto; }
        .cover .eyebrow { color: var(--yellowH); }
        .cover h1 { font-size: 84px; font-weight: 800; letter-spacing: -.04em; line-height: .92; margin-top: 18px; }
        .cover h1 .plus { color: var(--blueH); }
        .cover .kt { font-family: var(--mono), ui-monospace, monospace; font-size: 24px; letter-spacing: .08em; margin-top: 30px; color: #e6e8eb; }
        .cover .facts { display: flex; flex-wrap: wrap; gap: 14px 30px; margin-top: 36px; font-family: var(--mono), ui-monospace, monospace; font-size: 17px; }
        .cover .facts .f { display: flex; align-items: center; gap: 10px; color: #e6e8eb; }
        .cover .facts .f .pin { width: 13px; height: 13px; border-radius: 50%; display: inline-block; }
        .cover .foot { margin-top: auto; display: flex; justify-content: space-between; align-items: flex-end; font-family: var(--mono), ui-monospace, monospace; font-size: 14px; color: #9aa0a6; padding-top: 50px; }
        .stats-kit { display: grid; grid-template-columns: repeat(2,1fr); gap: 26px; margin-top: 44px; }
        .stat-kit { border-top: 2px solid; padding-top: 16px; }
        .stat-kit .n { font-size: 48px; font-weight: 800; letter-spacing: -.02em; }
        .stat-kit .l { font-family: var(--mono), ui-monospace, monospace; font-size: 14px; color: var(--muted); margin-top: 6px; }
        .why { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; margin-top: 44px; }
        .why .w { border: 1.5px solid var(--line); border-radius: 18px; padding: 28px; }
        .why .w .ic { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; font-weight: 800; color: #fff; font-size: 22px; }
        .why .w h3 { font-size: 22px; font-weight: 700; letter-spacing: -.01em; margin-top: 18px; }
        .why .w p { color: var(--muted); margin-top: 8px; font-size: 15px; }
        .tiers-wrap { margin-top: 40px; border: 1.5px solid var(--line); border-radius: 18px; overflow: hidden; }
        .tiers-wrap table { width: 100%; border-collapse: collapse; }
        .tiers-wrap th, .tiers-wrap td { text-align: left; padding: 16px 14px; border-bottom: 1px solid var(--line); font-size: 14px; }
        .tiers-wrap thead th { background: #fafafa; font-family: var(--mono), ui-monospace, monospace; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink); font-weight: 700; }
        .tiers-wrap thead th.tier-th { text-align: center; }
        .tiers-wrap tbody td { text-align: center; color: var(--ink); }
        .tiers-wrap tbody td:first-child { text-align: left; font-weight: 600; }
        .tier-yes { font-weight: 800; }
        .tier-no { color: #bdc1c6; }
        .tiers-wrap tbody tr:last-child td { border-bottom: 0; }
        .tier-cards { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-top: 24px; }
        .tc { border-radius: 14px; padding: 18px; font-weight: 800; }
        .tc .n { font-family: var(--mono), ui-monospace, monospace; font-size: 13px; letter-spacing: .1em; opacity: .85; font-weight: 500; }
        .tc .v { font-size: 24px; margin-top: 6px; }
        .ways { display: flex; flex-direction: column; gap: 0; margin-top: 36px; }
        .way { display: flex; gap: 18px; align-items: flex-start; padding: 20px 0; border-top: 1px solid rgba(255,255,255,.1); }
        .way:last-child { border-bottom: 1px solid rgba(255,255,255,.1); }
        .way .b { width: 14px; height: 14px; border-radius: 50%; margin-top: 5px; flex: 0 0 auto; display: inline-block; }
        .way .t { font-size: 19px; font-weight: 700; }
        .way .d { color: #9aa0a6; font-size: 15px; margin-top: 3px; }
        .contact .pad { display: flex; flex-direction: column; min-height: 1160px; }
        .contact .mid { margin-top: auto; margin-bottom: auto; }
        .contact h2 { font-size: 56px; }
        .cbox { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px; }
        .cc { border: 1.5px solid rgba(255,255,255,.2); border-radius: 18px; padding: 28px; }
        .cc .k { font-family: var(--mono), ui-monospace, monospace; font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: #9aa0a6; }
        .cc .v { font-size: 24px; font-weight: 700; margin-top: 8px; word-break: break-word; }
        .cc .v a { color: var(--blueH); text-decoration: none; }
        .cbtn { display: inline-flex; align-items: center; gap: 12px; background: var(--off); color: var(--ink); font-weight: 800; font-size: 19px; padding: 18px 32px; border-radius: 999px; text-decoration: none; margin-top: 40px; }
        .cbtn .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--red); display: inline-block; }
        .kit-foot { display: flex; justify-content: space-between; font-family: var(--mono), ui-monospace, monospace; font-size: 14px; color: #9aa0a6; padding-top: 50px; margin-top: auto; }
        .printbar { position: fixed; right: 24px; bottom: 24px; z-index: 99; }
        @media print {
          @page { size: A4; margin: 0; }
          body { background: #fff; padding: 0; }
          .page { box-shadow: none; margin: 0; width: 100%; min-height: 100vh; page-break-after: always; }
          .printbar { display: none; }
        }
        @media (max-width: 860px) {
          .page { width: 100%; }
          .pad { padding: 40px 28px; }
          .stats-kit, .why, .cbox, .tier-cards { grid-template-columns: 1fr; }
          .cover h1 { font-size: 56px; }
          .tiers-wrap { overflow-x: auto; }
        }
      `}</style>

      {/* 1 · CAPA */}
      <section className="page dark cover">
        <div className="sh-kit" style={{ width: 520, height: 520, left: -160, top: -200, background: 'rgba(66,133,244,.55)' }} />
        <div className="sh-kit" style={{ width: 130, height: 130, right: 90, top: 120, background: 'var(--yellow)' }} />
        <div className="sh-kit" style={{ width: 70, height: 70, right: 220, top: 300, background: 'var(--red)' }} />
        <div className="pad">
          <Image className="logo" src="/assets/gdg-logo-white.png" alt="Google Developer Groups" width={180} height={40} />
          <div className="mid">
            <span className="eyebrow">Kit de Patrocínio · 2026</span>
            <h1>I/O Extended<br /><span className="plus">+</span> Build with AI</h1>
            <div className="kt">GDG João Pessoa</div>
            <div className="facts">
              <span className="f"><span className="pin" style={{ background: 'var(--blueH)' }} />18 JUL · Sábado</span>
              <span className="f"><span className="pin" style={{ background: 'var(--greenH)' }} />08h às 17h</span>
              <span className="f"><span className="pin" style={{ background: 'var(--redH)' }} />UNIESP · Cabedelo-PB</span>
            </div>
          </div>
          <div className="foot">
            <span>#IOExtendedJP</span>
            <span>@gdgjoaopessoa</span>
          </div>
        </div>
      </section>

      {/* 2 · O EVENTO + NÚMEROS */}
      <section className="page">
        <div className="pad">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>O evento</span>
          <h2 style={{ marginTop: 14 }}>O maior encontro dev da Paraíba</h2>
          <p className="lead">
            O <strong>I/O Extended</strong> é a versão local do Google I/O, organizada por comunidades de desenvolvedores no mundo todo.
            Em João Pessoa, unimos o melhor do I/O ao programa <strong>Build with AI</strong> — um dia inteiro de palestras, workshops e networking com a comunidade técnica do estado.
          </p>
          <span className="eyebrow" style={{ color: 'var(--green)', display: 'block', marginTop: 56 }}>O público</span>
          <div className="stats-kit">
            {[
              { n: '+500', l: 'participantes esperados', c: 'var(--blue)' },
              { n: '12', l: 'palestras, talks e workshop', c: 'var(--red)' },
              { n: '8h', l: 'de evento e networking', c: 'var(--yellow)' },
              { n: '100%', l: 'comunidade técnica e estudantes', c: 'var(--green)' },
            ].map((s) => (
              <div className="stat-kit" key={s.n} style={{ borderColor: s.c }}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 40 }}>
            Desenvolvedores, estudantes de tecnologia, profissionais de TI, líderes técnicos e entusiastas de IA — exatamente o público que sua empresa quer alcançar, contratar e engajar.
          </p>
        </div>
      </section>

      {/* 3 · POR QUE PATROCINAR */}
      <section className="page">
        <div className="pad">
          <span className="eyebrow" style={{ color: 'var(--yellow)' }}>Por que patrocinar</span>
          <h2 style={{ marginTop: 14 }}>Sua marca onde a tech acontece</h2>
          <div className="why">
            {[
              { bg: 'var(--blue)', icon: '★', title: 'Visibilidade de marca', desc: 'Exposição da sua logo no site, materiais, redes sociais e no palco para um público qualificado.' },
              { bg: 'var(--red)', icon: '⚲', title: 'Atração de talentos', desc: 'Espaço para recrutamento e contato direto com desenvolvedores e estudantes da região.' },
              { bg: 'var(--green)', icon: '♥', title: 'Conexão com a comunidade', desc: 'Posicione sua empresa como apoiadora do ecossistema de tecnologia da Paraíba.' },
              { bg: 'var(--yellow)', icon: '↗', title: 'Geração de negócios', desc: 'Apresente produtos e serviços a decisores técnicos em um ambiente de alta receptividade.' },
            ].map((w) => (
              <div className="w" key={w.title}>
                <div className="ic" style={{ background: w.bg }}>{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · COTAS */}
      <section className="page">
        <div className="pad">
          <span className="eyebrow" style={{ color: 'var(--red)' }}>Cotas &amp; contrapartidas</span>
          <h2 style={{ marginTop: 14 }}>Escolha como apoiar</h2>
          <div className="tier-cards">
            {tiers.map((t) => (
              <div className="tc" key={t.cls} style={{ background: t.bg, color: t.color }}>
                <div className="n">{t.name}</div>
                <div className="v">{t.value}</div>
              </div>
            ))}
          </div>
          <div className="tiers-wrap">
            <table>
              <thead>
                <tr>
                  <th>Contrapartida</th>
                  <th className="tier-th" style={{ color: 'var(--blue)' }}>Diamante</th>
                  <th className="tier-th" style={{ color: 'var(--yellow)' }}>Ouro</th>
                  <th className="tier-th" style={{ color: 'var(--muted)' }}>Prata</th>
                  <th className="tier-th" style={{ color: '#a86b3c' }}>Bronze</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    {(['d', 'o', 'p', 'a'] as const).map((k) => {
                      const val = row[k]
                      if (typeof val === 'boolean') {
                        return <td key={k} className={val ? 'tier-yes' : 'tier-no'}>{val ? '✓' : '—'}</td>
                      }
                      return <td key={k}>{val}</td>
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lead" style={{ marginTop: 28, fontSize: 15, color: 'var(--muted)' }}>
            Valores por cota acima. Cotas personalizadas e contrapartidas adicionais sob consulta — podemos montar um pacote sob medida para os objetivos da sua empresa.
          </p>
        </div>
      </section>

      {/* 5 · OUTRAS FORMAS + CONTATO */}
      <section className="page dark contact">
        <div className="sh-kit" style={{ width: 420, height: 420, right: -150, bottom: -180, background: 'rgba(52,168,83,.4)' }} />
        <div className="sh-kit" style={{ width: 120, height: 120, left: 80, top: 90, background: 'rgba(249,171,0,.5)' }} />
        <div className="pad">
          <div className="mid">
            <span className="eyebrow" style={{ color: 'var(--yellowH)' }}>Outras formas de apoiar</span>
            <div className="ways">
              {[
                { pin: 'var(--blueH)', t: 'Apoio em espaço & estrutura', d: 'Coffee break, mobiliário, sinalização ou serviços.' },
                { pin: 'var(--greenH)', t: 'Brindes & sorteios', d: 'Produtos e prêmios para o kit e dinâmicas do evento.' },
                { pin: 'var(--redH)', t: 'Apoio de mídia', d: 'Divulgação do evento nos seus canais.' },
              ].map((w) => (
                <div className="way" key={w.t}>
                  <span className="b" style={{ background: w.pin }} />
                  <div>
                    <div className="t">{w.t}</div>
                    <div className="d">{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <h2 style={{ marginTop: 64 }}>Vamos conversar?</h2>
            <div className="cbox">
              <div className="cc">
                <div className="k">E-mail</div>
                <div className="v"><a href="mailto:gdgjpb@gmail.com">gdgjpb@gmail.com</a></div>
              </div>
              <div className="cc">
                <div className="k">Instagram</div>
                <div className="v"><a href="https://instagram.com/gdgjoaopessoa">@gdgjoaopessoa</a></div>
              </div>
            </div>
            <Link className="cbtn" href="/parceiro">
              <span className="dot" />Quero ser parceiro
            </Link>
          </div>
          <div className="kit-foot">
            <span>GDG João Pessoa · I/O Extended + Build with AI</span>
            <span>#IOExtendedJP</span>
          </div>
        </div>
      </section>

      <div className="printbar">
        <PrintButton />
      </div>
    </>
  )
}
