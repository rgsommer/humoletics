/**
 * Abstract Human-vs-Humanoid competition stage, drawn as inline SVG.
 *
 * Deliberately geometric rather than illustrative: no manufacturer likeness,
 * no cartoon robot. The two figures share one skeleton — the humanoid is the
 * same pose rendered as segmented hardware — which is the whole brand idea.
 * Replace with commissioned art or photography when it exists.
 */

// One skeleton, drawn twice. Origin (0,0) is between the feet, y is up-negative.
const SKELETON = {
  head: { cx: 28, cy: -230, r: 19 },
  spine: 'M18,-206 L-10,-120',
  armFront: 'M16,-199 L46,-171 L34,-141',
  armBack: 'M10,-201 L-22,-177 L-31,-146',
  legFront: 'M-10,-118 L27,-70 L18,-2',
  legBack: 'M-10,-118 L-47,-73 L-63,-5',
  joints: [
    [16, -199], [46, -171], [34, -141],
    [10, -201], [-22, -177], [-31, -146],
    [-10, -118], [27, -70], [18, -2],
    [-47, -73], [-63, -5],
  ],
}

function HumanFigure() {
  const s = SKELETON
  return (
    <g stroke="var(--human)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx={s.head.cx} cy={s.head.cy} r={s.head.r} fill="var(--human)" stroke="none" />
      <path d={s.spine} strokeWidth="17" />
      <path d={s.armBack} opacity="0.55" />
      <path d={s.legBack} opacity="0.55" />
      <path d={s.armFront} />
      <path d={s.legFront} />
    </g>
  )
}

function HumanoidFigure() {
  const s = SKELETON
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* limbs: outlined hardware rather than solid mass */}
      <g stroke="var(--humanoid)" strokeWidth="12" opacity="0.5">
        <path d={s.armBack} />
        <path d={s.legBack} />
      </g>
      <g stroke="var(--humanoid)" strokeWidth="12">
        <path d={s.armFront} />
        <path d={s.legFront} />
      </g>

      {/* torso shell */}
      <path d={s.spine} stroke="var(--humanoid)" strokeWidth="20" opacity="0.28" />
      <path d={s.spine} stroke="var(--humanoid)" strokeWidth="8" />
      <rect x="-14" y="-196" width="34" height="42" rx="5" fill="#07090c" stroke="var(--humanoid)" strokeWidth="3" />
      <line x1="-8" y1="-183" x2="14" y2="-183" stroke="var(--humanoid)" strokeWidth="3" opacity="0.75" />
      <line x1="-8" y1="-172" x2="8" y2="-172" stroke="var(--humanoid)" strokeWidth="3" opacity="0.45" />

      {/* head: visor, not a face */}
      <rect
        x={s.head.cx - 21} y={s.head.cy - 20} width="40" height="39" rx="11"
        fill="#0b1418" stroke="var(--humanoid)" strokeWidth="4"
      />
      <rect x={s.head.cx - 13} y={s.head.cy - 6} width="26" height="7" rx="3.5" fill="var(--humanoid)" />

      {/* articulation points */}
      <g fill="#07090c" stroke="var(--humanoid)" strokeWidth="3">
        {s.joints.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" />
        ))}
      </g>
    </g>
  )
}

function Bracket({ x, y, label, value, tone }) {
  const color = tone === 'human' ? 'var(--human)' : 'var(--humanoid)'
  return (
    <g>
      <path
        d={`M${x},${y + 13} L${x},${y} L${x + 15},${y}`}
        stroke={color} strokeWidth="1.5" fill="none"
      />
      <text x={x + 24} y={y + 5} fill={color} className="svg-label">{label}</text>
      <text x={x + 24} y={y + 24} fill="#7e8b99" className="svg-value">{value}</text>
    </g>
  )
}

export default function HeroVisual() {
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
        aria-label="Illustration of a human athlete and a humanoid robot facing each other in ready stances on opposing lanes of a competition floor, overlaid with telemetry graphics."
      >
        <defs>
          <linearGradient id="floorFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ad2e6" stopOpacity="0" />
            <stop offset="45%" stopColor="#5ad2e6" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#5ad2e6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="humanLane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff4d18" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ff4d18" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="robotLane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ad2e6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#5ad2e6" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="scanBeam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="contactGlow">
            <stop offset="0%" stopColor="#000" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- floor: two lanes in perspective ---------------------------- */}
        <g>
          <polygon points="330,470 130,640 -40,640 275,470" fill="url(#humanLane)" />
          <polygon points="470,470 670,640 840,640 525,470" fill="url(#robotLane)" />
          <g stroke="rgba(255,255,255,0.10)" strokeWidth="1">
            <line x1="0" y1="470" x2="800" y2="470" />
            <line x1="-30" y1="520" x2="830" y2="520" opacity="0.7" />
            <line x1="-60" y1="580" x2="860" y2="580" opacity="0.5" />
          </g>
          <g stroke="rgba(255,255,255,0.13)" strokeWidth="1.5">
            <line x1="275" y1="470" x2="-40" y2="640" />
            <line x1="330" y1="470" x2="130" y2="640" />
            <line x1="470" y1="470" x2="670" y2="640" />
            <line x1="525" y1="470" x2="840" y2="640" />
          </g>
          {/* centre line — the meeting point */}
          <line x1="400" y1="440" x2="400" y2="640" stroke="url(#floorFade)" strokeWidth="2" />
        </g>

        {/* --- contact shadows -------------------------------------------- */}
        <ellipse cx="250" cy="505" rx="92" ry="15" fill="url(#contactGlow)" />
        <ellipse cx="550" cy="505" rx="92" ry="15" fill="url(#contactGlow)" />

        {/* --- figures ----------------------------------------------------- */}
        <g transform="translate(250 505)">
          <HumanFigure />
        </g>
        {/* mirrored so the two face each other across the centre line */}
        <g transform="translate(550 505) scale(-1 1)">
          <HumanoidFigure />
        </g>

        {/* --- telemetry overlay ------------------------------------------- */}
        <g className="svg-hud">
          <Bracket x={92} y={214} label="HUMAN" value="LANE 01 · READY" tone="human" />
          <Bracket x={598} y={214} label="HUMANOID" value="LANE 02 · CALIBRATED" tone="humanoid" />

          {/* framing reticles */}
          <rect
            x="150" y="240" width="200" height="286" rx="3"
            fill="none" stroke="var(--human)" strokeWidth="1" opacity="0.28"
            className="telemetry-dash"
          />
          <rect
            x="450" y="240" width="200" height="286" rx="3"
            fill="none" stroke="var(--humanoid)" strokeWidth="1" opacity="0.28"
            className="telemetry-dash"
          />

          {/* centre gate */}
          <g transform="translate(400 132)">
            <rect x="-58" y="-20" width="116" height="40" rx="4" fill="rgba(7,9,12,0.75)" stroke="rgba(255,255,255,0.18)" />
            <text x="0" y="-2" textAnchor="middle" fill="#98a4b3" className="svg-label">CHALLENGE</text>
            <text x="0" y="13" textAnchor="middle" fill="#f4f6f8" className="svg-strong">20 M SPRINT</text>
          </g>

          {/* adaptive-level read-outs */}
          <g transform="translate(150 560)">
            <text x="0" y="0" fill="#6b7887" className="svg-label">PERF. LEVEL</text>
            <text x="0" y="20" fill="var(--human)" className="svg-strong">742</text>
          </g>
          <g transform="translate(650 560)" textAnchor="end">
            <text x="0" y="0" fill="#6b7887" className="svg-label">ROBOT LIMIT</text>
            <text x="0" y="20" fill="var(--humanoid)" className="svg-strong">SET 6 / 10</text>
          </g>

          {/* signal blips along the centre line */}
          <circle cx="400" cy="300" r="3" fill="var(--humanoid)" className="blip" />
          <circle cx="400" cy="360" r="3" fill="var(--humanoid)" className="blip blip--b" />
          <circle cx="400" cy="420" r="3" fill="var(--humanoid)" className="blip blip--c" />
        </g>

        {/* --- slow scan sweep --------------------------------------------- */}
        <rect x="-80" y="0" width="180" height="640" fill="url(#scanBeam)" className="scanline" />
      </svg>

      </div>

      {/* caption sits below the frame so it can never collide with the telemetry text */}
      <figcaption className="stage__caption">
        <span>Concept visual — indicative only</span>
        <span>Adaptive difficulty · v0.1</span>
      </figcaption>
    </figure>
  )
}
