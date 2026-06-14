'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--ink)',
        color: '#fff',
        border: 0,
        fontFamily: 'var(--display), system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 16,
        padding: '15px 24px',
        borderRadius: 999,
        cursor: 'pointer',
        boxShadow: '0 12px 30px rgba(0,0,0,.25)',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M6 14h12v7H6z" />
      </svg>
      Salvar / imprimir PDF
    </button>
  )
}
