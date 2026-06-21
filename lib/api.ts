async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({ error: 'Erro desconhecido' }))

  if (!res.ok) {
    if (res.status === 409) throw new Error('Já existe uma inscrição com esse e-mail.')
    if (res.status === 429) throw new Error('Muitas tentativas. Aguarde alguns minutos e tente novamente.')
    if (res.status === 400) throw new Error(data.error ?? 'Dados inválidos. Verifique o formulário.')
    throw new Error(data.error ?? `Erro ${res.status}. Tente novamente.`)
  }

  return data
}

export const api = {
  proposals: {
    create: (body: Record<string, unknown>) => post<{ id: string; status: string }>('/api/proposals', body),
  },
  volunteers: {
    create: (body: Record<string, unknown>) => post<{ id: string; status: string }>('/api/volunteers', body),
  },
  sponsors: {
    create: (body: Record<string, unknown>) => post<{ id: string; status: string }>('/api/sponsors', body),
  },
}

// ---- Leitura pública (programação + palestrantes) --------------------------

const BACKEND = 'https://api.gdgjoaopessoa.com.br'

export interface ApiRoom {
  id: string
  name: string
  sort: number
}

export interface ApiSession {
  id: string
  title: string
  type: string
  speaker: string
  trilha: string
  roomId?: string
  isPlenary: boolean
  day: string
  startTime: string
  endTime: string
  description: string
  published: boolean
  sort: number
}

export interface ApiSpeaker {
  id: string
  nome: string
  cargo: string
  badge: string
  trilha: string
  bio: string
  palestra: string
  formato: string
  fotoUrl: string
}

// Busca server-side com ISR (revalida a cada 60s). Retorna null em falha para o
// chamador cair no conteúdo de fallback (hardcoded), garantindo resiliência.
export async function getSchedule(): Promise<{ rooms: ApiRoom[]; sessions: ApiSession[] } | null> {
  try {
    const res = await fetch(`${BACKEND}/v1/public/schedule`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return (await res.json()) as { rooms: ApiRoom[]; sessions: ApiSession[] }
  } catch {
    return null
  }
}

export async function getSpeakers(): Promise<ApiSpeaker[] | null> {
  try {
    const res = await fetch(`${BACKEND}/v1/public/speakers`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return (await res.json()) as ApiSpeaker[]
  } catch {
    return null
  }
}
