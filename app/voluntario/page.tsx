'use client'

import { useRef, useState } from 'react'
import FormHeader from '@/components/FormHeader'

export default function Voluntario() {
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
        eyebrow="Faça parte do time"
        eyebrowColor="var(--greenH)"
        title="Quero ser voluntário"
        description="Ajude a construir o maior encontro dev da Paraíba. Preencha seus dados e a organização entra em contato."
        backHref="/#voluntarios"
        factbar={[
          { pin: 'var(--blueH)', label: '18 JUL · Sábado' },
          { pin: 'var(--greenH)', label: '08h às 17h' },
          { pin: 'var(--redH)', label: 'UNIESP · Cabedelo-PB' },
        ]}
        decorations={<>
          <div className="sh" style={{ position: 'absolute', width: 420, height: 420, left: -140, top: -180, background: 'rgba(52,168,83,.5)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 120, height: 120, right: '8%', top: 40, background: 'var(--yellow)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 60, height: 60, right: '22%', bottom: 30, background: 'var(--red)', borderRadius: '50%', pointerEvents: 'none' }} />
        </>}
      />

      <main className="fbody">
        <div className="wrap">
          <div className="fcard" ref={cardRef}>
            <form className="fform" ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="fsection-title">Seus dados</div>
              <div className="fgrid">
                <div className="field full">
                  <label htmlFor="nome">Nome completo<span className="req">*</span></label>
                  <input id="nome" name="nome" type="text" placeholder="Como você quer ser chamado(a)" required />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail<span className="req">*</span></label>
                  <input id="email" name="email" type="email" placeholder="voce@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="whats">WhatsApp<span className="req">*</span></label>
                  <input id="whats" name="whats" type="tel" placeholder="(83) 9 9999-9999" required />
                </div>
                <div className="field">
                  <label htmlFor="cidade">Cidade</label>
                  <input id="cidade" name="cidade" type="text" placeholder="João Pessoa, PB" />
                </div>
                <div className="field">
                  <label htmlFor="camiseta">Tamanho de camiseta</label>
                  <select id="camiseta" name="camiseta">
                    <option value="">Selecione</option>
                    {['PP', 'P', 'M', 'G', 'GG', 'XG'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="fsection-title">Onde quer ajudar</div>
              <div className="field full">
                <label>Áreas de interesse <span className="hint">— marque quantas quiser</span></label>
                <div className="chips" style={{ marginTop: 4 }}>
                  {[
                    ['Recepção e credenciamento', 'Recepção & credenciamento'],
                    ['Apoio a palestrantes', 'Apoio a palestrantes'],
                    ['Conteúdo e redes sociais', 'Conteúdo & redes'],
                    ['Fotografia e registro', 'Fotografia & registro'],
                    ['Infraestrutura e bastidores', 'Infra & bastidores'],
                    ['Onde precisar', 'Onde precisar'],
                  ].map(([value, label]) => (
                    <label className="chip" key={value}>
                      <input type="checkbox" name="area" value={value} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="fgrid" style={{ marginTop: 22 }}>
                <div className="field">
                  <label htmlFor="disp">Disponibilidade</label>
                  <select id="disp" name="disp">
                    <option value="">Selecione</option>
                    {['Dia todo (08h–17h)', 'Apenas manhã', 'Apenas tarde', 'Também na montagem (sexta)'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="exp">Já foi voluntário(a) antes?</label>
                  <select id="exp" name="exp">
                    <option value="">Selecione</option>
                    {['Sim, em eventos de tecnologia', 'Sim, em outros eventos', 'Não, será a primeira vez'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="motiv">Por que você quer ser voluntário(a)?</label>
                  <textarea id="motiv" name="motiv" placeholder="Conte um pouco sobre você e o que te motiva (opcional)" />
                </div>
              </div>

              <div className="fnote">
                <span className="pin" />
                <span>As vagas de voluntariado são limitadas. Após a inscrição, a organização do GDG João Pessoa entra em contato pelo WhatsApp/e-mail informado.</span>
              </div>

              <div className="factions">
                <button type="submit" className="btn btn-light">
                  <span className="dot" style={{ background: 'var(--green)' }} />Enviar inscrição
                </button>
                <span className="req-note"><span className="req">*</span> campos obrigatórios</span>
              </div>
            </form>

            <div className={`fsuccess${done ? ' show' : ''}`}>
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2>Inscrição enviada!</h2>
              <p>Obrigado por querer fazer parte do time. Vamos analisar sua inscrição e entrar em contato em breve pelo WhatsApp.</p>
              <a className="btn btn-light" href="/">Voltar ao site</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
