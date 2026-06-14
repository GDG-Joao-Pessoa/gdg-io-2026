import Image from 'next/image'
import Link from 'next/link'

interface Props {
  eyebrow: string
  eyebrowColor: string
  title: string
  description: string
  backHref: string
  backLabel?: string
  factbar?: { pin: string; label: string }[]
  decorations?: React.ReactNode
}

export default function FormHeader({
  eyebrow,
  eyebrowColor,
  title,
  description,
  backHref,
  backLabel = 'Voltar ao site',
  factbar,
  decorations,
}: Props) {
  return (
    <header className="fhead">
      {decorations}
      <div className="wrap">
        <div className="topline">
          <Link className="brand" href="/">
            <Image src="/assets/gdg-icon.png" alt="GDG" width={28} height={28} />
            <span className="chap">GDG João Pessoa</span>
          </Link>
          <Link className="back" href={backHref}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {backLabel}
          </Link>
        </div>
        <span className="eyebrow" style={{ color: eyebrowColor }}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {factbar && (
          <div className="factbar">
            {factbar.map((f, i) => (
              <span className="f" key={i}>
                <span className="pin" style={{ background: f.pin }} />
                {f.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
