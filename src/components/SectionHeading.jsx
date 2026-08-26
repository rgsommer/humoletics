import Reveal from './Reveal'

/**
 * Standard section header: eyebrow + heading + optional lede.
 * `layout` — 'default' | 'center' | 'split' (lede sits beside the heading).
 */
export default function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  lede,
  layout = 'default',
  level = 2,
  headingClass = 'h2',
  children,
}) {
  const Tag = `h${level}`
  const cls = [
    'section-head',
    layout === 'center' ? 'section-head--center' : '',
    layout === 'split' ? 'section-head--split' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const heading = (
    <div>
      {eyebrow && (
        <p className={`eyebrow ${eyebrowTone === 'cyan' ? 'eyebrow--cyan' : ''}`}>{eyebrow}</p>
      )}
      <Tag className={headingClass}>{title}</Tag>
      {layout !== 'split' && lede && <p className="lede">{lede}</p>}
    </div>
  )

  return (
    <Reveal className={cls}>
      {heading}
      {layout === 'split' && (lede || children) && (
        <div>
          {lede && <p className="lede">{lede}</p>}
          {children}
        </div>
      )}
      {layout !== 'split' && children}
    </Reveal>
  )
}
