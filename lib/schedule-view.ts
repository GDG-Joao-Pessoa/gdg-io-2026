import type { ApiRoom, ApiSession } from './api'

// Estrutura que a página /programacao consome (espelha o shape antigo do data/).
export interface ViewItem {
  time: string
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
    title: s.title,
    sub,
    tba: !s.speaker && !s.description,
    type: typeClass(s.type),
    label: TYPE_LABEL[s.type] ?? 'Atividade',
    coffee: s.type === 'coffee',
  }
}

/** Converte a resposta da API na visão por períodos (manhã/tarde/encerramento). */
export function buildScheduleView(rooms: ApiRoom[], sessions: ApiSession[]): ScheduleView {
  const sorted = [...sessions].sort(
    (a, b) => a.startTime.localeCompare(b.startTime) || a.sort - b.sort,
  )
  const isPlenary = (s: ApiSession) => s.isPlenary || !s.roomId
  const plenary = sorted.filter(isPlenary)
  const parallel = sorted.filter((s) => !isPlenary(s))

  const lastParallel = parallel.length
    ? parallel[parallel.length - 1].startTime
    : undefined

  const closing = plenary.filter(
    (s) => lastParallel !== undefined && s.startTime > lastParallel,
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
