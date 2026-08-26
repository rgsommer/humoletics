import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { useCountUp } from '../lib/hooks'

/* ---------- generic feature card (optionally a link) ---------------------- */
export function Card({ index, title, children, to, cta, delay = 0, tone }) {
  const inner = (
    <>
      {index && <span className="card__index">{index}</span>}
      <h3 className="card__title" style={tone ? { color: `var(--${tone})` } : undefined}>
        {title}
      </h3>
      <p className="card__body">{children}</p>
      {cta && (
        <span className="card__foot">
          <span className="link-arrow">{cta}</span>
        </span>
      )}
    </>
  )

  return (
    <Reveal delay={delay}>
      {to ? (
        <Link to={to} className="card">
          {inner}
        </Link>
      ) : (
        <div className="card">{inner}</div>
      )}
    </Reveal>
  )
}

/* ---------- the five homepage pillars ------------------------------------ */
export function Pillar({ num, name, desc, to, tone, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={to} className={`pillar ${tone === 'cyan' ? 'pillar--cyan' : ''}`}>
        <span className="pillar__num">{num}</span>
        <span className="pillar__name">{name}</span>
        <span className="pillar__desc">{desc}</span>
        <span className="pillar__foot">
          <span className="link-arrow">Explore</span>
        </span>
      </Link>
    </Reveal>
  )
}

/* ---------- metric card with count-up ------------------------------------ */
export function Metric({ value, decimals = 0, suffix = '', prefix = '', label, note, delay = 0 }) {
  const [ref, animated] = useCountUp(value, { decimals })
  return (
    <Reveal delay={delay}>
      <div className="metric" ref={ref}>
        <div className="metric__value">
          {prefix}
          {animated}
          {suffix}
        </div>
        <div className="metric__label">{label}</div>
        {note && <p className="metric__note">{note}</p>}
      </div>
    </Reveal>
  )
}

/* ---------- static metric (no animation, for non-numeric values) --------- */
export function FactCard({ value, label, note, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="metric">
        <div className="metric__value">{value}</div>
        <div className="metric__label">{label}</div>
        {note && <p className="metric__note">{note}</p>}
      </div>
    </Reveal>
  )
}

/* ---------- arena discipline tiles --------------------------------------- */
const ICONS = {
  run: 'M4 20l5-7 4 2 3-6M14 4h.01',
  react: 'M12 3v4M12 17v4M3 12h4M17 12h4M12 9a3 3 0 100 6 3 3 0 000-6z',
  balance: 'M12 3v18M5 9h14M7 9l-3 6h6l-3-6zM17 9l-3 6h6l-3-6z',
  lift: 'M4 10v4M20 10v4M7 8v8M17 8v8M7 12h10',
  move: 'M12 3l3 3-3 3M12 21l-3-3 3-3M3 12l3-3 3 3M21 12l-3 3-3-3',
  compete: 'M7 4h10v5a5 5 0 01-10 0V4zM9 19h6M12 14v5M5 5h2M17 5h2',
}

export function Discipline({ icon = 'run', word, note, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="discipline">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d={ICONS[icon] || ICONS.run} />
        </svg>
        <div>
          <div className="discipline__word">{word}</div>
          {note && <div className="discipline__note">{note}</div>}
        </div>
      </div>
    </Reveal>
  )
}

/* ---------- future-location card ----------------------------------------- */
export function LocationCard({ city, status, launch = false, note, delay = 0 }) {
  const bars = launch ? [8, 14, 20, 26] : [8, 11, 9, 7]
  return (
    <Reveal delay={delay}>
      <div className={`location ${launch ? 'location--launch' : ''}`}>
        <div>
          <div className="location__city">{city}</div>
          <div className="location__status">{status}</div>
        </div>
        {note && <p className="card__body" style={{ fontSize: '0.86rem' }}>{note}</p>}
        <div className="location__bars" aria-hidden="true">
          {bars.map((h, i) => (
            <i key={i} style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
