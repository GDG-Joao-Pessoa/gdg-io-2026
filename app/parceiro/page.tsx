'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import FormHeader from '@/components/FormHeader'

export default function Parceiro() {
  const formRef = useRef<HTMLFormElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity()
      return
    }
    cardRef.current?.classList.add('done')
    setDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="form-page">
      <FormHeader
        eyebrow="Parcerias & patrocínio"
        eyebrowColor="var(--yellowH)"
        title="Quero ser parceiro"
        description="Conecte sua marca a centenas de desenvolvedores da Paraíba. Conte sobre sua empresa e a gente envia o kit de patrocínio com as cotas."
        backHref="/#parceiros"
        factbar={[
          { pin: 'var(--blueH)', label: '18 JUL · Sábado' },
          { pin: 'var(--greenH)', label: '+500 participantes' },
          { pin: 'var(--redH)', label: 'UNIESP · Cabedelo-PB' },
        ]}
        decorations={<>
          <div className="sh" style={{ position: 'absolute', width: 420, height: 420, left: -150, top: -180, background: 'radial-gradient(circle,rgba(249,171,0,.5),transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 120, height: 120, right: '8%', top: 40, background: 'var(--green)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 60, height: 60, right: '24%', bottom: 34, background: 'var(--blue)', borderRadius: '50%', pointerEvents: 'none' }} />
        </>}
      />

      <main className="fbody">
        <div className="wrap">
          <div className="fcard" ref={cardRef}>
            <form className="fform" ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="fsection-title">Sua empresa</div>
              <div className="fgrid">
                <div className="field">
                  <label htmlFor="empresa">Nome da empresa<span className="req">*</span></label>
                  <input id="empresa" name="empresa" type="text" placeholder="Razão social ou nome fantasia" required />
                </div>
                <div className="field">
                  <label htmlFor="site">Site / Instagram</label>
                  <input id="site" name="site" type="text" placeholder="empresa.com.br" />
                </div>
                <div className="field full">
                  <label htmlFor="segmento">Segmento de atuação</label>
                  <input id="segmento" name="segmento" type="text" placeholder="Ex.: software, educação, fintech..." />
                </div>
              </div>

              <div className="fsection-title">Quem fala pela empresa</div>
              <div className="fgrid">
                <div className="field">
                  <label htmlFor="resp">Nome do responsável<span className="req">*</span></label>
                  <input id="resp" name="resp" type="text" placeholder="Seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="cargo">Cargo</label>
                  <input id="cargo" name="cargo" type="text" placeholder="Ex.: Marketing, RH, Diretoria" />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail<span className="req">*</span></label>
                  <input id="email" name="email" type="email" placeholder="voce@empresa.com" required />
                </div>
                <div className="field">
                  <label htmlFor="whats">WhatsApp<span className="req">*</span></label>
                  <input id="whats" name="whats" type="tel" placeholder="(83) 9 9999-9999" required />
                </div>
              </div>

              <div className="fsection-title">Como quer apoiar</div>
              <div className="field full">
                <label>Cota de interesse<span className="req">*</span> <span className="hint">— veja as contrapartidas no kit</span></label>
                <div className="chips" style={{ marginTop: 4 }}>
                  {['Diamante', 'Ouro', 'Prata', 'Bronze', 'Ainda não sei — quero conversar'].map((c) => (
                    <label className="chip" key={c}>
                      <input type="radio" name="cota" value={c} required />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="fgrid" style={{ marginTop: 22 }}>
                <div className="field full">
                  <label htmlFor="msg">Mensagem</label>
                  <textarea id="msg" name="msg" placeholder="Conte como sua empresa gostaria de apoiar o evento, dúvidas sobre cotas, etc. (opcional)" />
                </div>
              </div>

              <div className="fnote">
                <span className="pin" />
                <span>Ao enviar, a organização do GDG João Pessoa retorna com o kit de patrocínio completo e os próximos passos. Você também pode baixar o kit agora mesmo no botão abaixo.</span>
              </div>

              <div className="factions">
                <button type="submit" className="btn btn-light">
                  <span className="dot" style={{ background: 'var(--yellow)' }} />Enviar interesse
                </button>
                <Link className="btn btn-ghost" href="/kit-de-patrocinio" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>
                  Baixar kit de patrocínio
                </Link>
                <span className="req-note"><span className="req">*</span> campos obrigatórios</span>
              </div>
            </form>

            <div className={`fsuccess${done ? ' show' : ''}`}>
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2>Interesse enviado!</h2>
              <p>Obrigado! Em breve a organização entra em contato com o kit de patrocínio e as cotas disponíveis.</p>
              <div className="factions" style={{ justifyContent: 'center' }}>
                <Link className="btn btn-light" href="/kit-de-patrocinio">Baixar kit de patrocínio</Link>
                <a className="btn btn-ghost" href="/" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>Voltar ao site</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
