import { useEffect, useRef, useState } from 'react'
import './FunCounters.css'

const counters = [
  {
    emoji: '🥃',
    label: 'Megivott feles',
    base: 1400,
    increment: () => Math.floor(Math.random() * 3) + 1,
    suffix: 'db',
  },
  {
    emoji: '😭',
    label: 'Örömkönny',
    base: 312,
    increment: () => Math.floor(Math.random() * 8) + 3,
    suffix: 'csepp',
  },
  {
    emoji: '💃',
    label: 'Tánclépés',
    base: 2847,
    increment: () => Math.floor(Math.random() * 40) + 15,
    suffix: 'db',
  },
  {
    emoji: '❤️',
    label: 'Kimondott fogadalmi szó',
    base: 2,
    increment: () => 0,
    suffix: 'db',
  },
]

function AnimatedCounter({ base, increment, suffix }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const currentRef = useRef(base)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Animate count-up to base on first appear
  useEffect(() => {
    if (!started) return
    const steps = 35
    const duration = 1000
    let step = 0
    const id = setInterval(() => {
      step++
      setValue(Math.floor((base / steps) * step))
      if (step >= steps) { setValue(base); clearInterval(id) }
    }, duration / steps)
    return () => clearInterval(id)
  }, [started])

  // Increment every 10 seconds
  useEffect(() => {
    if (!started) return
    const id = setInterval(() => {
      const inc = increment()
      currentRef.current += inc
      setValue(currentRef.current)
    }, 3000)
    return () => clearInterval(id)
  }, [started])

  return (
    <span ref={ref} className="counter-value">
      {value.toLocaleString('hu-HU')}
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
            <AnimatedCounter base={c.base} increment={c.increment} suffix={c.suffix} />
            <div className="fun-counter-label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
