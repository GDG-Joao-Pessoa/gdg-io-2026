import type { Metadata } from 'next'
import { Manrope, Roboto_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--display',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--mono',
  display: 'swap',
})

const SITE_URL = 'https://gdgjoaopessoa.com.br'
const TITLE = 'GDG João Pessoa · I/O Extended + Build with AI — 18 de julho'
const DESCRIPTION = 'O maior encontro de desenvolvedores da Paraíba. Google I/O Extended + Build with AI — 18 de julho, no UNIESP, Cabedelo-PB.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/assets/gdg-icon.png',
    apple: '/assets/gdg-icon.png',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'GDG João Pessoa',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/assets/hero-community.png',
        width: 1200,
        height: 630,
        alt: 'GDG João Pessoa · I/O Extended + Build with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/assets/hero-community.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-3T6T2FZ6JC" />
    </html>
  )
}
