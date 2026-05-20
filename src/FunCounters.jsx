import { useEffect, useRef, useState } from 'react'
import './FunCounters.css'

// Lagzi kezdete: 2026.05.30. 19:00
const PARTY_START = new Date('2026-05-30T19:00:00')

function getElapsedMinutes() {
  const now = new Date()
  const diff = now - PARTY_START
  return diff > 0 ? diff / 60000 : 0
}

const counters = [
  {
    emoji: '🥃',
    label: 'Megivott feles',
    getValue: () => Math.floor(getElapsedMinutes() * 1.8),
    suffix: 'db',
    live: true,
  },
  {
    emoji: '😭',
    label: 'Örömkönny',
    getValue: () => Math.floor(getElapsedMinutes() * 0.4),
    suffix: 'csepp',
    live: true,
  },
  {
    emoji: '💃',
    label: 'Tánclépés',
    getValue: () => Math.floor(getElapsedMinutes() * 23),
    suffix: 'db',
    live: true,
  },
  {
    emoji: '❤️',
    label: 'Kimondott fogadalmi szó',
    getValue: () => 2,
    suffix: 'db',
    live: false,
  },
  {
    emoji: '🎂',
    label: 'Elfogyasztott sütemény',
    getValue: () => Math.floor(getElapsedMinutes() * 0.9),
    suffix: 'db',
    live: true,
  },
  {
    emoji: '🥂',
    label: 'Koccintás',
    getValue: () => Math.floor(getElapsedMinutes() * 2.1),
    suffix: 'db',
    live: true,
  },
]

function AnimatedCounter({ getValue, suffix, live }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const target = getValue()

    if (target === 0) {
      // Wedding not started yet – count up to a teaser number then back
      let frame = 0
      const id = setInterval(() => {
        frame++
        setDisplay(Math.floor(Math.random() * 999))
        if (frame > 20) { clearInterval(id); setDisplay('?') }
      }, 60)
      return () => clearInterval(id)
    }

    // Animate count-up
    const duration = 1200
    const steps = 40
    const increment = target / steps
    let current = 0
    const id = setInterval(() => {
      current = Math.min(current + increment, target)
      setDisplay(Math.floor(current))
      if (current >= target) clearInterval(id)
    }, duration / steps)
    return () => clearInterval(id)
  }, [started])

  // Live update every 30s
  useEffect(() => {
    if (!live || !started) return
    const id = setInterval(() => setDisplay(getValue()), 30000)
    return () => clearInterval(id)
  }, [live, started])

  return (
    <span ref={ref} className="counter-value">
      {display === '?' ? '🎉' : display.toLocaleString('hu-HU')}
      <span className="counter-suffix"> {suffix}</span>
    </span>
  )
}

export default function FunCounters() {
  return (
    <section className="section fun-counters-section">
      <h2 className="section-title">A lagzi számokban</h2>
      <p className="fun-counters-note">* becsült, tudományosan nem alátámasztott adatok 😄</p>
      <div className="fun-counters-grid">
        {counters.map((c, i) => (
          <div className="fun-counter-card" key={i}>
            <div className="fun-counter-emoji">{c.emoji}</div>
            <AnimatedCounter getValue={c.getValue} suffix={c.suffix} live={c.live} />
            <div className="fun-counter-label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
