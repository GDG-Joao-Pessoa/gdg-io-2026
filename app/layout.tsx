import type { Metadata } from 'next'
import { Manrope, Roboto_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'GDG João Pessoa · I/O Extended + Build with AI — 18 de julho',
  description: 'O maior encontro de desenvolvedores da Paraíba. Google I/O Extended + Build with AI — 18 de julho, no UNIESP, Cabedelo-PB.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
