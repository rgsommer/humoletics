import Reveal from './Reveal'
import { useCountUp, useInView } from '../lib/hooks'

/**
 * Illustrative Human vs. Humanoid result card.
 * Every number here is an example of how a result would be presented —
 * it is not a measured performance figure.
 */
export default function Scoreboard({
  event = '20 M Sprint',
  humanTime = 4.28,
  robotTime = 4.35,
  level = 742,
  levelMax = 1000,
  note = 'Example result. Figures are illustrative and do not represent measured performance.',
}) {
  const [humanRef, human] = useCountUp(humanTime, { decimals: 2 })
  const [robotRef, robot] = useCountUp(robotTime, { decimals: 2, duration: 1700 })
  const [levelRef, levelValue] = useCountUp(level, { duration: 1800 })
  const [meterRef, meterIn] = useInView()

  const margin = Math.abs(humanTime - robotTime).toFixed(2)
  const humanWins = humanTime < robotTime

  return (
    <Reveal>
      <div className="scoreboard">
        <div className="scoreboard__bar">
          <span>Event · {event}</span>
          <span>Heat 03 · Final</span>
        </div>

        <div className="scoreboard__rows">
          <div className="scoreboard__side scoreboard__side--human">
            <div className="scoreboard__who">Human</div>
            <div className="scoreboard__time" ref={humanRef}>
              {human}
              <span className="scoreboard__unit">SEC</span>
            </div>
            <div className="scoreboard__detail">Participant · Age group 30–39</div>
          </div>

          <div className="scoreboard__divider" />

          <div className="scoreboard__side scoreboard__side--robot">
            <div className="scoreboard__who">Humanoid</div>
            <div className="scoreboard__time" ref={robotRef}>
              {robot}
              <span className="scoreboard__unit">SEC</span>
            </div>
            <div className="scoreboard__detail">Adaptive setting · 6 of 10</div>
          </div>
        </div>

        <div className="scoreboard__result">
          <span className="scoreboard__verdict">{humanWins ? 'Human wins' : 'Humanoid wins'}</span>
          <span className="scoreboard__margin">
            Margin +{margin} sec
          </span>
        </div>

        <div className="scoreboard__level">
          <span ref={levelRef}>Performance level {levelValue}</span>
          <span className="meter" ref={meterRef}>
            <span
              className="meter__fill"
              style={{ width: meterIn ? `${(level / levelMax) * 100}%` : '0%' }}
            />
          </span>
        </div>
      </div>
      {note && <p className="illustrative-note">{note}</p>}
    </Reveal>
  )
}
