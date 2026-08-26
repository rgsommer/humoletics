/**
 * HUMOLETICS HOME stage — the third reading of the same figure system.
 *
 *   Arena:       facing each other, competing.
 *   Active Aging: side by side, same pose.
 *   Home:        facing each other, one handing something to the other.
 *
 * A domestic room rather than a lane or a studio: warm lamp light, a chair, a
 * window, and the robot's mapped path across a clear floor. The handover is the
 * whole idea — assistance, at human scale, in an ordinary room.
 */

const PERSON = {
  head: { cx: 6, cy: -232, r: 19 },
  spine: 'M4,-208 L0,-120',
  armReach: 'M12,-198 L44,-186 L70,-178', // extended to receive
  armRest: 'M-4,-200 L-22,-166 L-20,-134',
  legNear: 'M2,-118 L10,-62 L12,-2',
  legFar: 'M-4,-118 L-16,-62 L-22,-2',
}

const ROBOT = {
  head: { cx: 6, cy: -232, r: 19 },
  spine: 'M4,-208 L0,-120',
  armReach: 'M12,-198 L46,-188 L74,-178', // extended to offer
  armRest: 'M-4,-200 L-24,-168 L-22,-136',
  legNear: 'M2,-118 L10,-62 L12,-2',
  legFar: 'M-4,-118 L-16,-62 L-22,-2',
  joints: [
    [12, -198], [44, -186], [70, -178],
    [-4, -200], [-22, -166], [-20, -134],
    [0, -120], [10, -62], [12, -2],
    [-16, -62], [-22, -2],
  ],
}

function PersonFigure() {
  const p = PERSON
  return (
    <g stroke="var(--human)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx={p.head.cx} cy={p.head.cy} r={p.head.r} fill="var(--human)" stroke="none" />
      <path d={p.spine} strokeWidth="17" />
      <path d={p.armRest} opacity="0.5" />
      <path d={p.legFar} opacity="0.5" />
      <path d={p.legNear} />
      <path d={p.armReach} />
    </g>
  )
}

function RobotFigure() {
  const r = ROBOT
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke="var(--humanoid)" strokeWidth="12" opacity="0.45">
        <path d={r.armRest} />
        <path d={r.legFar} />
      </g>
      <g stroke="var(--humanoid)" strokeWidth="12">
        <path d={r.legNear} />
        <path d={r.armReach} />
      </g>

      <path d={r.spine} stroke="var(--humanoid)" strokeWidth="20" opacity="0.26" />
      <path d={r.spine} stroke="var(--humanoid)" strokeWidth="8" />
      <rect x="-13" y="-196" width="32" height="42" rx="5" fill="#0b1418" stroke="var(--humanoid)" strokeWidth="3" />
      <line x1="-7" y1="-183" x2="13" y2="-183" stroke="var(--humanoid)" strokeWidth="3" opacity="0.72" />
      <line x1="-7" y1="-172" x2="7" y2="-172" stroke="var(--humanoid)" strokeWidth="3" opacity="0.42" />

      <rect
        x={r.head.cx - 20} y={r.head.cy - 20} width="40" height="39" rx="11"
        fill="#0b1418" stroke="var(--humanoid)" strokeWidth="4"
      />
      <rect x={r.head.cx - 13} y={r.head.cy - 6} width="26" height="7" rx="3.5" fill="var(--humanoid)" />

      <g fill="#07090c" stroke="var(--humanoid)" strokeWidth="3">
        {r.joints.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" />
        ))}
      </g>
    </g>
  )
}

export default function HomeVisual() {
  return (
    <figure className="stage-figure">
      <div className="stage">
        <span className="stage__corner stage__corner--tl" />
        <span className="stage__corner stage__corner--tr" />
        <span className="stage__corner stage__corner--bl" />
        <span className="stage__corner stage__corner--br" />

        <svg
          viewBox="0 0 800 640"
          role="img"
          aria-label="Illustration of a humanoid robot handing a small light object to a person in an ordinary living room, with an armchair, a lamp and a window, and the robot's mapped route traced across a clear floor."
        >
          <defs>
            <radialGradient id="homeLamp">
              <stop offset="0%" stopColor="#ffb877" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#ffb877" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="homeFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9d5c" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#ff9d5c" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="homeShadow">
              <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* --- the room ---------------------------------------------------- */}
          <circle cx="678" cy="196" r="210" fill="url(#homeLamp)" />

          {/* window, left */}
          <g stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" fill="none">
            <rect x="72" y="86" width="146" height="176" rx="5" />
            <line x1="145" y1="86" x2="145" y2="262" />
            <line x1="72" y1="174" x2="218" y2="174" />
          </g>

          {/* floor lamp, right */}
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none">
            <path d="M678,152 L654,196 L702,196 Z" fill="rgba(255,184,119,0.16)" />
            <line x1="678" y1="196" x2="678" y2="470" />
            <line x1="656" y1="470" x2="700" y2="470" />
          </g>

          {/* armchair, left of the person */}
          <g stroke="rgba(255,255,255,0.16)" strokeWidth="2" fill="rgba(255,255,255,0.028)">
            <rect x="88" y="352" width="118" height="120" rx="10" />
            <rect x="76" y="386" width="24" height="70" rx="9" />
            <rect x="194" y="386" width="24" height="70" rx="9" />
          </g>

          {/* floor */}
          <rect x="0" y="470" width="800" height="170" fill="url(#homeFloor)" />
          <line x1="0" y1="470" x2="800" y2="470" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />

          {/* the robot's mapped route across a clear floor */}
          <path
            d="M660,556 C560,556 470,520 396,504"
            stroke="var(--humanoid)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.55"
            className="telemetry-dash"
          />

          <ellipse cx="298" cy="478" rx="96" ry="14" fill="url(#homeShadow)" />
          <ellipse cx="528" cy="478" rx="96" ry="14" fill="url(#homeShadow)" />

          {/* --- the handover ------------------------------------------------ */}
          <g transform="translate(298 470)">
            <PersonFigure />
          </g>
          <g transform="translate(528 470) scale(-1 1)">
            <RobotFigure />
          </g>

          {/* the object passing between them */}
          <g transform="translate(413 288)">
            <rect x="-19" y="-15" width="38" height="30" rx="5" fill="#0b1418" stroke="var(--humanoid)" strokeWidth="2.5" />
            <line x1="-19" y1="-4" x2="19" y2="-4" stroke="var(--humanoid)" strokeWidth="2" opacity="0.6" />
            <circle cx="0" cy="6" r="2.5" fill="var(--humanoid)" opacity="0.8" />
          </g>

          {/* --- gentle household read-outs ---------------------------------- */}
          <g>
            <rect x="560" y="70" width="196" height="82" rx="8" fill="rgba(7,9,12,0.82)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
            <text x="580" y="98" fill="#778491" className="svg-label">REMINDER · 2:00 PM</text>
            <text x="580" y="126" fill="#f4f6f8" style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}>
              Exercise set
            </text>
          </g>

          <g>
            <rect x="72" y="300" width="168" height="70" rx="8" fill="rgba(7,9,12,0.82)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
            <text x="92" y="327" fill="#778491" className="svg-label">CARRYING</text>
            <text x="92" y="352" fill="#5ad2e6" style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '0.01em' }}>
              LIGHT ITEM · 1.2 KG
            </text>
          </g>

          <circle cx="413" cy="352" r="3.5" fill="var(--humanoid)" className="blip" />
          <circle cx="413" cy="392" r="3.5" fill="var(--humanoid)" className="blip blip--b" />
        </svg>
      </div>

      <figcaption className="stage__caption">
        <span>Concept visual — indicative only</span>
        <span>Availability depends on platform capability &amp; certification</span>
      </figcaption>
    </figure>
  )
}
