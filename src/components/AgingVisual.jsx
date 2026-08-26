/**
 * Active Aging stage — the companionable counterpart to HeroVisual.
 *
 * Same skeleton system as the competition hero, but deliberately inverted:
 * the two figures stand side by side in the SAME pose facing the SAME way,
 * on a bright floor rather than opposing lanes. The competitive hero says
 * "across from you"; this one says "beside you".
 *
 * Abstract and geometric on purpose — no frailty cues, no medical setting.
 */

// Upright, arms-open stance. Origin (0,0) between the feet, y is up-negative.
const POSE = {
  head: { cx: 3, cy: -232, r: 19 },
  spine: 'M2,-208 L0,-120',
  armNear: 'M9,-200 L36,-180 L54,-201',
  armFar: 'M-5,-201 L-30,-181 L-48,-202',
  legNear: 'M2,-118 L11,-62 L13,-2',
  legFar: 'M-5,-118 L-15,-62 L-19,-2',
  joints: [
    [9, -200], [36, -180], [54, -201],
    [-5, -201], [-30, -181], [-48, -202],
    [2, -118], [11, -62], [13, -2],
    [-15, -62], [-19, -2],
  ],
}

function PersonFigure() {
  const p = POSE
  return (
    <g stroke="var(--human)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx={p.head.cx} cy={p.head.cy} r={p.head.r} fill="var(--human)" stroke="none" />
      <path d={p.spine} strokeWidth="17" />
      <path d={p.armFar} opacity="0.5" />
      <path d={p.legFar} opacity="0.5" />
      <path d={p.armNear} />
      <path d={p.legNear} />
    </g>
  )
}

function RobotFigure() {
  const p = POSE
  const cyan = '#1899b4' // deeper cyan so the figure holds up on a light floor
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={cyan} strokeWidth="12" opacity="0.45">
        <path d={p.armFar} />
        <path d={p.legFar} />
      </g>
      <g stroke={cyan} strokeWidth="12">
        <path d={p.armNear} />
        <path d={p.legNear} />
      </g>

      <path d={p.spine} stroke={cyan} strokeWidth="20" opacity="0.22" />
      <path d={p.spine} stroke={cyan} strokeWidth="8" />
      <rect x="-15" y="-196" width="32" height="42" rx="5" fill="#ffffff" stroke={cyan} strokeWidth="3" />
      <line x1="-9" y1="-183" x2="11" y2="-183" stroke={cyan} strokeWidth="3" opacity="0.7" />
      <line x1="-9" y1="-172" x2="5" y2="-172" stroke={cyan} strokeWidth="3" opacity="0.4" />

      <rect
        x={p.head.cx - 20} y={p.head.cy - 20} width="40" height="39" rx="11"
        fill="#ffffff" stroke={cyan} strokeWidth="4"
      />
      <rect x={p.head.cx - 13} y={p.head.cy - 6} width="26" height="7" rx="3.5" fill={cyan} />

      <g fill="#ffffff" stroke={cyan} strokeWidth="3">
        {p.joints.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" />
        ))}
      </g>
    </g>
  )
}

export default function AgingVisual() {
  return (
    <figure className="stage-figure">
      <div className="stage stage--bright">
        <span className="stage__corner stage__corner--tl" />
        <span className="stage__corner stage__corner--tr" />
        <span className="stage__corner stage__corner--bl" />
        <span className="stage__corner stage__corner--br" />

        <svg
          viewBox="0 0 800 640"
          role="img"
          aria-label="Illustration of a person and a humanoid robot standing side by side in the same open-armed stance, facing the same direction on a bright studio floor, with a repetition counter and session-progress readout alongside them."
        >
          <defs>
            <linearGradient id="agingFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b0e12" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#0b0e12" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="agingGlow">
              <stop offset="0%" stopColor="#ffb38a" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffb38a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="agingShadow">
              <stop offset="0%" stopColor="#0b0e12" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0b0e12" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* --- bright room: window light, no clinical cues ---------------- */}
          <circle cx="690" cy="120" r="185" fill="url(#agingGlow)" />
          <g stroke="rgba(11,14,18,0.10)" strokeWidth="1.5" fill="none">
            <rect x="614" y="48" width="150" height="186" rx="6" />
            <line x1="689" y1="48" x2="689" y2="234" />
            <line x1="614" y1="141" x2="764" y2="141" />
          </g>

          {/* floor */}
          <rect x="0" y="505" width="800" height="135" fill="url(#agingFloor)" />
          <line x1="0" y1="505" x2="800" y2="505" stroke="rgba(11,14,18,0.16)" strokeWidth="1.5" />
          <ellipse cx="360" cy="514" rx="112" ry="15" fill="url(#agingShadow)" />
          <ellipse cx="580" cy="514" rx="112" ry="15" fill="url(#agingShadow)" />

          {/* --- the pair: same pose, same direction, side by side ---------- */}
          <g transform="translate(360 505) scale(1.22)">
            <PersonFigure />
          </g>
          <g transform="translate(580 505) scale(1.22)">
            <RobotFigure />
          </g>

          {/* --- gentle session read-out ------------------------------------ */}
          <g>
            <rect
              x="60" y="70" width="196" height="96" rx="8"
              fill="#ffffff" stroke="rgba(11,14,18,0.13)" strokeWidth="1.5"
            />
            <text x="80" y="98" fill="#5f6b79" className="svg-label">TODAY&rsquo;S GOAL</text>
            <text x="80" y="136" fill="#c8410f" style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em' }}>
              6
            </text>
            <text x="112" y="136" fill="#5f6b79" className="svg-label">CHAIR STANDS</text>
            {/* progress pips: four of six complete */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={80 + i * 26} y={148} width={20} height={5} rx={2.5}
                fill={i < 4 ? '#1899b4' : 'rgba(11,14,18,0.16)'}
              />
            ))}
          </g>

          <g>
            <rect
              x="60" y="330" width="176" height="74" rx="8"
              fill="#ffffff" stroke="rgba(11,14,18,0.13)" strokeWidth="1.5"
            />
            <text x="80" y="358" fill="#5f6b79" className="svg-label">PERSONAL BEST</text>
            <text x="80" y="390" fill="#0b0e12" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
              6 &middot; 16 SEC
            </text>
          </g>

          {/* pacing link between the two figures */}
          <path
            d="M432,-40 L508,-40"
            transform="translate(0 420)"
            stroke="#1899b4"
            strokeWidth="1.5"
            className="telemetry-dash"
            opacity="0.7"
          />
          <circle cx="470" cy="380" r="3.5" fill="#1899b4" className="blip" />
        </svg>
      </div>

      <figcaption className="stage__caption">
        <span>Concept visual — indicative only</span>
        <span>Proposed capability · not yet validated</span>
      </figcaption>
    </figure>
  )
}
