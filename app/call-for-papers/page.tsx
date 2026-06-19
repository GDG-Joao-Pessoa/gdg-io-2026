'use client'

import { useRef, useState } from 'react'
import FormHeader from '@/components/FormHeader'
import { api } from '@/lib/api'

export default function CallForPapers() {
  const formRef = useRef<HTMLFormElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity()
      return
    }

    setSubmitting(true)
    setError(null)

    const fd = new FormData(formRef.current)
    try {
      await api.proposals.create({
        nome:    fd.get('nome'),
        email:   fd.get('email'),
        cargo:   fd.get('cargo') || null,
        social:  fd.get('social') || null,
        bio:     fd.get('bio') || null,
        titulo:  fd.get('titulo'),
        formato: fd.get('formato'),
        nivel:   fd.get('nivel'),
        trilha:  fd.get('trilha'),
        resumo:  fd.get('resumo'),
      })
      cardRef.current?.classList.add('done')
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="form-page">
      <FormHeader
        eyebrow="Chamada de palestras · C4P"
        eyebrowColor="var(--yellowH)"
        title="Enviar proposta"
        description="Compartilhe seu conhecimento no palco do I/O Extended. Conte sobre você e sobre a sua palestra."
        backHref="/#c4p"
        factbar={[
          { pin: 'var(--blueH)', label: '18 JUL · Sábado' },
          { pin: 'var(--greenH)', label: 'UNIESP · Cabedelo-PB' },
        ]}
        decorations={<>
          <div className="sh" style={{ position: 'absolute', width: 420, height: 420, left: -150, top: -180, background: 'radial-gradient(circle,rgba(66,133,244,.6),transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 120, height: 120, right: '8%', top: 40, background: 'var(--red)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div className="sh" style={{ position: 'absolute', width: 60, height: 60, right: '24%', bottom: 34, background: 'var(--yellow)', borderRadius: '50%', pointerEvents: 'none' }} />
        </>}
      />

      <main className="fbody">
        <div className="wrap">
          <div className="fcard" ref={cardRef}>
            <form className="fform" ref={formRef} onSubmit={handleSubmit} noValidate>

              <div className="fsection-title">Sobre você</div>
              <div className="fgrid">
                <div className="field">
                  <label htmlFor="nome">Nome completo<span className="req">*</span></label>
                  <input id="nome" name="nome" type="text" placeholder="Seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail<span className="req">*</span></label>
                  <input id="email" name="email" type="email" placeholder="voce@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="cargo">Cargo / Empresa</label>
                  <input id="cargo" name="cargo" type="text" placeholder="Ex.: Dev na Acme" />
                </div>
                <div className="field">
                  <label htmlFor="social">LinkedIn ou @ <span className="hint">— pra te conhecermos</span></label>
                  <input id="social" name="social" type="text" placeholder="linkedin.com/in/voce" />
                </div>
                <div className="field full">
                  <label htmlFor="bio">Mini bio</label>
                  <textarea id="bio" name="bio" placeholder="Resumo curto sobre sua trajetória (2–3 frases)" style={{ minHeight: 90 }} />
                </div>
              </div>

              <div className="fsection-title">Sobre a palestra</div>
              <div className="fgrid">
                <div className="field full">
                  <label htmlFor="titulo">Título da palestra<span className="req">*</span></label>
                  <input id="titulo" name="titulo" type="text" placeholder="Um título que chame atenção" required />
                </div>
                <div className="field">
                  <label htmlFor="formato">Formato<span className="req">*</span></label>
                  <select id="formato" name="formato" required>
                    <option value="">Selecione</option>
                    {['Palestra', 'Oficina', 'Workshop'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="nivel">Nível do público<span className="req">*</span></label>
                  <select id="nivel" name="nivel" required>
                    <option value="">Selecione</option>
                    {['Iniciante', 'Intermediário', 'Avançado', 'Todos os níveis'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field full">
                  <label>Trilha / tema<span className="req">*</span> <span className="hint">— escolha a principal</span></label>
                  <div className="chips" style={{ marginTop: 4 }}>
                    {['IA & Dados', 'Mobile', 'Web & Cloud', 'Carreira'].map((t) => (
                      <label className="chip" key={t}>
                        <input type="radio" name="trilha" value={t} required />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="field full">
                  <label htmlFor="resumo">Resumo da palestra<span className="req">*</span></label>
                  <textarea id="resumo" name="resumo" placeholder="O que o público vai aprender? Qual o problema, a abordagem e o que levam pra casa." required />
                </div>
              </div>

              {error && (
                <div className="fnote" style={{ color: 'var(--red)', marginTop: 16 }}>
                  <span className="pin" style={{ background: 'var(--red)' }} />
                  <span>{error}</span>
                </div>
              )}

              <div className="fnote">
                <span className="pin" />
                <span>As propostas passam por curadoria do GDG João Pessoa. Avisaremos por e-mail o resultado e os próximos passos dentro do prazo do Call for Papers.</span>
              </div>

              <div className="factions">
                <button type="submit" className="btn btn-light" disabled={submitting}>
                  <span className="dot" style={{ background: 'var(--red)' }} />
                  {submitting ? 'Enviando…' : 'Enviar proposta'}
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
              <h2>Proposta enviada!</h2>
              <p>Valeu por compartilhar! Sua proposta entrou na curadoria. Avisaremos o resultado por e-mail dentro do prazo do Call for Papers.</p>
              <a className="btn btn-light" href="/">Voltar ao site</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
