'use client'

import { useEffect, useState } from 'react'
import { EVENT_DATE } from '@/data'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' })

  useEffect(() => {
    const target = new Date(EVENT_DATE).getTime()

    function tick() {
      const diff = target - Date.now()
      if (diff <= 0) {
        setTime({ d: '00', h: '00', m: '00', s: '00' })
        return
      }
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown">
      <div className="wrap">
        <div className="lab">Contagem regressiva para o evento</div>
        <div className="cd-row" aria-live="polite">
          <div className="cd-unit">
            <div className="cd-num">{time.d}</div>
            <div className="cd-lab">Dias</div>
          </div>
          <div className="cd-unit">
            <div className="cd-num">{time.h}</div>
            <div className="cd-lab">Horas</div>
          </div>
          <div className="cd-unit">
            <div className="cd-num">{time.m}</div>
            <div className="cd-lab">Min</div>
          </div>
          <div className="cd-unit">
            <div className="cd-num">{time.s}</div>
            <div className="cd-lab">Seg</div>
          </div>
        </div>
      </div>
    </div>
  )
}
