import type { Metadata } from 'next'
import Link from 'next/link'
import FormHeader from '@/components/FormHeader'
import { scheduleItems } from '@/data'

export const metadata: Metadata = {
  title: 'Programação · GDG João Pessoa — I/O Extended + Build with AI',
}

const pinSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
)

export default function Programacao() {
  return (
    <div className="form-page">
      <FormHeader
        eyebrow="18 de julho · Sábado · 08h–17h30"
        eyebrowColor="var(--greenH)"
        title="Programação"
        description="De manhã, todos juntos no palco principal para as keynotes. À tarde, o evento se divide em trilhas paralelas — cada uma na sua sala. Grade preliminar; nomes &quot;a confirmar&quot; em finalização."
        backHref="/"
        decorations={<>
          <div className="sh" style={{ position: 'absolute', width: 420, height: 420, left: -150, top: -180, background: 'radial-gradient(circle,rgba(52,168,83,.5),transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 120, height: 120, right: '8%', top: 40, background: 'var(--blue)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 60, height: 60, right: '24%', bottom: 34, background: 'var(--yellow)', borderRadius: '50%', pointerEvents: 'none' }} />
        </>}
      />

      <main className="fbody">
        <div className="wrap">

          {/* MANHÃ */}
          <div className="ph am" style={{ marginTop: 36 }}>
            <h2>Manhã</h2>
            <span className="pr">Palco Principal · 08h–12h</span>
          </div>
          <div className="sched-list">
            {scheduleItems.morning.map((item, i) => (
              <div className={`item ${item.type}`} key={i}>
                <div className="itime">{item.time}</div>
                <div className="ibody">
                  <div className="t">{item.title}</div>
                  <div className="s">
                    {(item as any).tba ? <span className="tba">{item.sub}</span> : item.sub}
                  </div>
                </div>
                <span className={`ctype track ${item.type === 'k' ? 'keynote' : item.type === 't' ? 'talk' : item.type === 'w' ? 'workshop' : 'break'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="coffee">☕ Coffee break · 12h00</div>

          {/* TARDE */}
          <div className="ph pm">
            <h2>Tarde</h2>
            <span className="pr">Slots: 13h00 · 13h40 · 14h20</span>
          </div>
          <p className="phnote">
            Slots às <strong>13h00</strong>, <strong>13h40</strong> e <strong>14h20</strong> nas trilhas paralelas.
            As oficinas nos laboratórios têm 2h de duração (13h00–15h00). Circule conforme seu interesse.
          </p>

          {scheduleItems.afternoon.map((track) => (
            <div key={track.trackName}>
              <div className={`trk ${track.trackClass}`}>
                <span className="tn">{track.trackName}</span>
                <span className="loc">{pinSvg}{track.location}</span>
              </div>
              <div className="sched-list">
                {track.items.map((item, i) => (
                  <div className={`item ${item.type}`} key={i}>
                    <div className="itime">{item.time}</div>
                    <div className="ibody">
                      <div className="t">{item.title}</div>
                      <div className="s">
                        {(item as any).tba ? <span className="tba">{item.sub}</span> : item.sub}
                      </div>
                    </div>
                    <span className={`ctype track ${item.type === 'k' ? 'keynote' : item.type === 't' ? 'talk' : item.type === 'w' ? 'workshop' : 'break'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="coffee">☕ Coffee break · 15h00</div>

          {/* ENCERRAMENTO */}
          <div className="ph end">
            <h2>Encerramento</h2>
            <span className="pr">Palco Principal · 15h30–17h30</span>
          </div>
          <div className="sched-list">
            {scheduleItems.closing.map((item, i) => (
              <div className={`item ${item.type}`} key={i}>
                <div className="itime">{item.time}</div>
                <div className="ibody">
                  <div className="t">{item.title}</div>
                  <div className="s">
                    {(item as any).tba ? <span className="tba">{item.sub}</span> : item.sub}
                  </div>
                </div>
                <span className={`ctype track ${item.type === 'k' ? 'keynote' : 'break'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="prog-cta">
            <div className="sh" style={{ width: 240, height: 240, right: -60, bottom: -90, background: 'rgba(66,133,244,.32)' }} />
            <div className="sh" style={{ width: 90, height: 90, left: '38%', top: -30, background: 'rgba(249,171,0,.4)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3>Garanta sua vaga</h3>
              <p>As inscrições acontecem por lotes — o 1º começa 15 de junho, às 12h.</p>
            </div>
            <Link className="btn btn-on-dark" href="/#ingressos">
              <span className="dot" style={{ background: 'var(--red)' }} />Quero participar
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
