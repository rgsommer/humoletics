import Reveal from './Reveal'

/**
 * Capability tiering for HUMOLETICS HOME.
 *
 * The whole page depends on the reader believing us, so what a humanoid can do
 * today, what is emerging, and what needs professional and regulatory validation
 * are separated explicitly rather than blurred into one hopeful list. Visual
 * weight falls as certainty falls: solid cyan, amber, then a dashed grey card.
 */

const TIER_META = {
  now: { badge: 'Available today', cls: 'now' },
  soon: { badge: 'Emerging', cls: 'soon' },
  future: { badge: 'Future — requires validation', cls: 'future' },
}

export function CapabilityTiers({ tiers }) {
  return (
    <Reveal className="tiers">
      {tiers.map((tier) => {
        const meta = TIER_META[tier.tier]
        return (
          <div className={`tier tier--${meta.cls}`} key={tier.title}>
            <span className={`tier-badge tier-badge--${meta.cls}`}>{meta.badge}</span>
            <h3 className="tier__title">{tier.title}</h3>
            <ul className={`check-list ${tier.tier === 'now' ? 'check-list--cyan' : ''}`}>
              {tier.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {tier.caveat && <p className="tier__caveat">{tier.caveat}</p>}
          </div>
        )
      })}
    </Reveal>
  )
}

/**
 * The boundary list. Deliberately styled as a statement rather than fine print —
 * being specific about what these machines will not do is the reason to trust
 * what we say they will.
 */
export function Limits({ title, lede, items }) {
  return (
    <Reveal className="limits">
      <h3 className="limits__title">{title}</h3>
      <p className="limits__lede">{lede}</p>
      <ul className="limits__grid">
        {items.map((item) => (
          <li className="limits__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
