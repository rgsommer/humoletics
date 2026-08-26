import { Link } from 'react-router-dom'

/**
 * Temporary text-based brand treatment.
 * Mark = two competition lanes (human ember / humanoid cyan) bridged by a crossbar —
 * a stylised H that also reads as human-vs-humanoid symmetry. Easy to swap later.
 */
export function LogoMark({ className = '' }) {
  return (
    <svg className={`logo__mark ${className}`} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="6" height="26" rx="1" fill="var(--human)" />
      <rect x="23" y="3" width="6" height="26" rx="1" fill="var(--humanoid)" />
      <rect x="9" y="13.5" width="14" height="5" rx="1" fill="currentColor" />
    </svg>
  )
}

export default function Logo({ size = 'md', to = '/' }) {
  return (
    <Link to={to} className={`logo ${size === 'lg' ? 'logo--lg' : ''}`} aria-label="HUMOLETICS — home">
      <LogoMark />
      <span className="logo__word" aria-hidden="true">
        <span className="lo">HUMO</span>LETICS<span className="tm">™</span>
      </span>
    </Link>
  )
}
