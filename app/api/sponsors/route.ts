const BACKEND = 'https://api.gdg.rodolfodebonis.com.br'

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const res = await fetch(`${BACKEND}/v1/sponsors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(12_000),
    })
    const data = await res.json().catch(() => ({ error: 'Erro desconhecido' }))
    return Response.json(data, { status: res.status })
  } catch {
    return Response.json({ error: 'Serviço indisponível. Tente novamente em alguns instantes.' }, { status: 503 })
  }
}
