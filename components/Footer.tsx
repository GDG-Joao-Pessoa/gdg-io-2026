import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="brand">
            <Image src="/assets/gdg-logo-white.png" alt="Google Developer Groups" width={180} height={34} />
            <p>GDG João Pessoa — comunidade de desenvolvedores Google na Paraíba. I/O Extended + Build with AI, 18 de julho, UNIESP.</p>
            <div className="socials">
              <a href="https://instagram.com/gdgjoaopessoa" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="mailto:gdgjpb@gmail.com" aria-label="E-mail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="fcols">
            <div className="fcol">
              <h4>Evento</h4>
              <a href="/#sobre">Sobre</a>
              <a href="/#agenda">Agenda</a>
              <a href="/palestrantes">Palestrantes</a>
              <a href="/#ingressos">Inscrição</a>
            </div>
            <div className="fcol">
              <h4>Participe</h4>
              <a href="/#c4p">Call for Papers</a>
              <a href="/#voluntarios">Voluntários</a>
              <a href="/#parceiros">Seja parceiro</a>
              <a href="/#faq">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GDG João Pessoa · I/O Extended + Build with AI</span>
          <span>Feito pela comunidade · #IOExtendedJP</span>
        </div>
      </div>
    </footer>
  )
}
