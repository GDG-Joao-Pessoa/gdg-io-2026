'use client'

import { useRef, useState } from 'react'
import FormHeader from '@/components/FormHeader'
import Toast from '@/components/Toast'
import { api } from '@/lib/api'

export default function CallForPapers() {
  const formRef = useRef<HTMLFormElement>(null)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  function checkValidity() {
    setFormValid(formRef.current?.checkValidity() ?? false)
  }

  function closeSuccess() {
    setDone(false)
    formRef.current?.reset()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity()
      return
    }

    setSubmitting(true)
    setToast(null)

    const fd = new FormData(formRef.current)
    try {
      await api.proposals.create({
        nome:    fd.get('nome'),
        email:   fd.get('email'),
        whats:   (fd.get('whats') as string | null)?.replace(/\D/g, '') ?? '',
        cargo:   fd.get('cargo') || null,
        social:  fd.get('social') || null,
        bio:     fd.get('bio'),
        titulo:  fd.get('titulo'),
        formato: fd.get('formato'),
        nivel:   fd.get('nivel'),
        trilha:  fd.get('trilha'),
        resumo:  fd.get('resumo'),
      })
      setDone(true)
    } catch (err) {
      setToast({ type: 'error', message: err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.' })
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
          <div className="fcard">
            <form className="fform" ref={formRef} onSubmit={handleSubmit} onChange={checkValidity} noValidate>

              <div className="fsection-title">Sobre você</div>
              <div className="fgrid">
                <div className="field">
                  <label htmlFor="nome">Nome <span className="hint">— será usado nos cards de divulgação</span><span className="req">*</span></label>
                  <input id="nome" name="nome" type="text" placeholder="Seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail<span className="req">*</span></label>
                  <input id="email" name="email" type="email" placeholder="voce@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="whats">WhatsApp <span className="hint">— pra falarmos com você sobre a palestra</span><span className="req">*</span></label>
                  <input id="whats" name="whats" type="tel" inputMode="numeric" placeholder="(83) 99999-9999" required />
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
                  <label htmlFor="bio">Mini bio<span className="req">*</span></label>
                  <textarea id="bio" name="bio" placeholder="Resumo curto sobre sua trajetória (2–3 frases)" style={{ minHeight: 90 }} required />
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

              <div className="fnote">
                <span className="pin" />
                <span>As propostas passam por curadoria do GDG João Pessoa. Os resultados serão divulgados até <strong>30 de junho</strong>.</span>
              </div>

              <div className="factions">
                <button type="submit" className="btn btn-light" disabled={submitting || !formValid}>
                  <span className="dot" style={{ background: 'var(--red)' }} />
                  {submitting ? 'Enviando…' : 'Enviar proposta'}
                </button>
                <span className="req-note"><span className="req">*</span> campos obrigatórios</span>
              </div>
            </form>

          </div>
        </div>
      </main>

      <div className={`fsuccess${done ? ' show' : ''}`}>
        <div className="fsuccess-box">
          <div className="ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2>Proposta enviada!</h2>
          <p>Valeu por compartilhar! Sua proposta entrou na curadoria. Os resultados serão divulgados até <strong>30 de junho</strong> — fique de olho no e-mail.</p>
          <div className="factions">
            <button className="btn btn-light" onClick={closeSuccess}>
              <span className="dot" style={{ background: 'var(--blue)' }} />
              Enviar outra proposta
            </button>
            <a className="btn btn-ghost" href="/" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>Voltar ao site</a>
          </div>
        </div>
      </div>

      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </div>
  )
}
