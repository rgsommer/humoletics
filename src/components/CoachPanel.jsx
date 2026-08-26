import Reveal from './Reveal'

/**
 * Illustrative session-progression panel for HUMOLETICS PERFORMANCE.
 * Fitness / recreation framing only — no health, medical or rehabilitation claims.
 */
export default function CoachPanel({
  exercise = 'Bodyweight squat',
  previous = 20,
  target = 22,
  best = 24,
  note = 'Example session data. Illustrative only.',
}) {
  return (
    <Reveal>
      <div className="panel">
        <div className="panel__head">
          <span>Session profile</span>
          <span>{exercise}</span>
        </div>
        <div className="panel__body">
          <div className="stat-row">
            <span className="stat-row__label">Previous session</span>
            <span className="stat-row__value">{previous} reps</span>
          </div>
          <div className="stat-row stat-row--target">
            <span className="stat-row__label">Today&rsquo;s target</span>
            <span className="stat-row__value">{target} reps</span>
          </div>
          <div className="stat-row stat-row--best">
            <span className="stat-row__label">Personal best</span>
            <span className="stat-row__value">{best} reps</span>
          </div>
        </div>
      </div>
      {note && <p className="illustrative-note">{note}</p>}
    </Reveal>
  )
}
