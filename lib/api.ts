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
