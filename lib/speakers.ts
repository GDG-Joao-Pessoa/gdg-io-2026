export interface Speaker {
  nome: string
  cargo: string
  badge?: string
  trilha: string
  bio: string
  palestra: string
  formato: string
  foto: string
}

export const SPEAKERS: Speaker[] = [
  {
    nome: 'Arnaldo Gualberto',
    cargo: 'Engenheiro Sênior de IA Generativa · PhD',
    badge: 'Google Developer Expert em IA',
    trilha: 'IA & Dados',
    bio: 'Quase 10 anos de experiência em Machine Learning, Deep Learning e MLOps. Top Voice de ML no LinkedIn e criador de um curso com +2,6 mil alunos.',
    palestra: '5 Níveis de Agentes de IA com Google ADK',
    formato: 'Keynote · Palestra + Workshop',
    foto: '/assets/palestrantes/arnaldo-gualberto.jpg',
  },
  {
    nome: 'Rodolfo De Bonis',
    cargo: 'Software Engineer na Loft',
    trilha: 'IA & Dados',
    bio: 'Engenheiro de software sênior em backend, arquitetura de sistemas e soluções com IA. Trabalha com Go, Python, TypeScript, Docker e Kubernetes.',
    palestra: 'Como o Google "adivinha" o que você quer? O poder da busca semântica e híbrida',
    formato: 'Palestra',
    foto: '/assets/palestrantes/rodolfo-de-bonis.jpg',
  },
]

export const TOTAL_SLOTS = 8
