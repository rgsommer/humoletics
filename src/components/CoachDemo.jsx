import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { useInView } from '../lib/hooks'

const LINES = [
  'Good morning, Margaret.',
  'Last session you completed five chair stands.',
  'Today’s goal is six.',
  'Ready?',
]

const TARGET = 6
const LINE_GAP = 950
const REP_GAP = 700

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Conceptual interface demonstration for a humanoid movement coach.
 *
 * The dialogue text is always present in the DOM (only opacity animates), so the
 * sequence is fully available to assistive tech without waiting for the timers.
 * Under prefers-reduced-motion it renders in its completed state immediately.
 */
export default function CoachDemo() {
  const [wrapRef, inView] = useInView()
  const [lines, setLines] = useState(0)
  const [reps, setReps] = useState(0)
  const [best, setBest] = useState(false)
  const timers = useRef([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const run = useCallback(() => {
    clearTimers()
    if (prefersReducedMotion()) {
      setLines(LINES.length)
      setReps(TARGET)
      setBest(true)
      return
    }

    setLines(0)
    setReps(0)
    setBest(false)

    LINES.forEach((_, i) => {
      timers.current.push(setTimeout(() => setLines(i + 1), i * LINE_GAP))
    })

    const repsStart = LINES.length * LINE_GAP + 400
    for (let r = 1; r <= TARGET; r += 1) {
      timers.current.push(setTimeout(() => setReps(r), repsStart + (r - 1) * REP_GAP))
    }
    timers.current.push(
      setTimeout(() => setBest(true), repsStart + TARGET * REP_GAP)
    )
  }, [])

  useEffect(() => {
    if (inView) run()
    return clearTimers
  }, [inView, run])

  return (
    <Reveal>
      <div className="coach" ref={wrapRef}>
        <div className="coach__head">
          <span className="coach__who">
            <span className="dot-live" aria-hidden="true" />
            Humanoid coach
          </span>
          <span>Session 08</span>
        </div>

        <div className="coach__body">
          <div className="coach__thread">
            {LINES.map((line, i) => (
              <p key={line} className={`coach__bubble ${i < lines ? 'is-shown' : ''}`}>
                &ldquo;{line}&rdquo;
              </p>
            ))}
          </div>

          <div className="coach__counter">
            <p className="coach__count">
              {reps}
              <small>/ {TARGET} REPS</small>
            </p>
            <div className="coach__pips" aria-hidden="true">
              {Array.from({ length: TARGET }, (_, i) => (
                <i key={i} className={i < reps ? 'is-done' : ''} />
              ))}
            </div>
          </div>

          <p className={`coach__pb ${best ? 'is-shown' : ''}`}>New personal best</p>
        </div>

        <div className="coach__foot">
          <span className="coach__note">Conceptual interface — not a shipping product</span>
          <button type="button" className="btn btn--ghost btn--sm" onClick={run}>
            Replay
          </button>
        </div>
      </div>
    </Reveal>
  )
}
