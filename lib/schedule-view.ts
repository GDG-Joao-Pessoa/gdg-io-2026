import type { ApiRoom, ApiSession } from './api'

// Estrutura que a página /programacao consome (espelha o shape antigo do data/).
export interface ViewItem {
  time: string
  endTime?: string
  title: string
  sub: string
  tba: boolean
  type: 'k' | 't' | 'w' | 'br'
  label: string
  coffee: boolean
}

export interface ViewTrack {
  trackName: string
  trackClass: 'b' | 'r' | 'g' | 'y' | 'ink'
  location: string
  items: ViewItem[]
}

export interface ScheduleView {
  morning: ViewItem[]
  afternoon: ViewTrack[]
  closing: ViewItem[]
}

const TYPE_LABEL: Record<string, string> = {
  keynote: 'Keynote',
  palestra: 'Palestra',
  oficina: 'Oficina',
  workshop: 'Workshop',
  credenciamento: 'Credenciamento',
  abertura: 'Abertura',
  coffee: 'Coffee break',
  encerramento: 'Encerramento',
  outro: 'Atividade',
}

function typeClass(t: string): ViewItem['type'] {
  if (t === 'keynote') return 'k'
  if (t === 'palestra') return 't'
  if (t === 'oficina' || t === 'workshop') return 'w'
  return 'br'
}

function trilhaClass(t: string): ViewTrack['trackClass'] {
  if (t === 'IA & Dados') return 'b'
  if (t === 'Mobile') return 'r'
  if (t === 'Web & Cloud') return 'g'
  if (t === 'Carreira') return 'y'
  return 'ink'
}

function toItem(s: ApiSession): ViewItem {
  const sub = s.speaker || s.description || 'A definir'
  return {
    time: s.startTime,
    endTime: s.endTime || undefined,
    title: s.title,
    sub,
    tba: !s.speaker && !s.description,
    type: typeClass(s.type),
    label: TYPE_LABEL[s.type] ?? 'Atividade',
    coffee: s.type === 'coffee',
  }
}

// Extrai "HH:MM" de qualquer formato: "09h20", "09:20", ISO com offset ou UTC.
function getHHMM(t: string): string {
  let m = t.match(/T(\d{2}):(\d{2}):\d{2}[+-]\d{2}:\d{2}$/)
  if (m) return `${m[1]}:${m[2]}`
  m = t.match(/T(\d{2}):(\d{2}):\d{2}Z$/)
  if (m) {
    const h = (parseInt(m[1], 10) - 3 + 24) % 24
    return `${String(h).padStart(2, '0')}:${m[2]}`
  }
  m = t.match(/(\d{2})[h:](\d{2})/)
  if (m) return `${m[1]}:${m[2]}`
  return t.slice(0, 5)
}

/** Converte a resposta da API na visão por períodos (manhã/tarde/encerramento). */
export function buildScheduleView(rooms: ApiRoom[], sessions: ApiSession[]): ScheduleView {
  const sorted = [...sessions].sort(
    (a, b) => a.startTime.localeCompare(b.startTime) || a.sort - b.sort,
  )

  // Paralelas = têm sala própria, começam às 13h e terminam antes das 15h30
  // (coffee break às 15h separa tarde do encerramento).
  const isParallel = (s: ApiSession) =>
    !s.isPlenary && !!s.roomId &&
    getHHMM(s.startTime) >= '13:00' && getHHMM(s.startTime) < '15:30'

  const parallel = sorted.filter(isParallel)
  const plenary  = sorted.filter((s) => !isParallel(s))

  const lastParallelTime = parallel.length
    ? getHHMM(parallel[parallel.length - 1].startTime)
    : undefined

  const closing = plenary.filter(
    (s) => lastParallelTime !== undefined && getHHMM(s.startTime) > lastParallelTime,
  )
  const closingIds = new Set(closing.map((s) => s.id))
  const morning = plenary.filter((s) => !closingIds.has(s.id))

  const orderedRooms = [...rooms].sort((a, b) => a.sort - b.sort)
  const afternoon: ViewTrack[] = orderedRooms
    .map((r) => {
      const items = parallel.filter((s) => s.roomId === r.id).map(toItem)
      const trilha = parallel.find((s) => s.roomId === r.id)?.trilha ?? ''
      return {
        trackName: trilha || r.name,
        trackClass: trilhaClass(trilha),
        location: r.name,
        items,
      }
    })
    .filter((t) => t.items.length > 0)

  return { morning: morning.map(toItem), afternoon, closing: closing.map(toItem) }
}
