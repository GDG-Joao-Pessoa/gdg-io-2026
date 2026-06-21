const BACKEND = 'https://api.gdgjoaopessoa.com.br'

// Proxy do upload público de imagens (Call for Papers) → API Go.
export async function POST(request: Request) {
  const form = await request.formData()
  try {
    const res = await fetch(`${BACKEND}/v1/public/uploads`, {
      method: 'POST',
      body: form,
      signal: AbortSignal.timeout(20_000),
    })
    const data = await res.json().catch(() => ({ error: 'Erro desconhecido' }))
    return Response.json(data, { status: res.status })
  } catch {
    return Response.json({ error: 'Serviço indisponível. Tente novamente em alguns instantes.' }, { status: 503 })
  }
}
