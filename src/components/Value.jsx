import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/**
 * Answers "what's in it for me?" for a specific reader.
 *
 * Split deliberately into what you gain *now* and what you gain *at launch*.
 * A venture with no facility, no platforms and no funding cannot answer that
 * question with one promise without overclaiming — and the split turns the
 * pre-launch stage from an apology into the reason to engage early.
 */
export function WhatYouGet({ who, headline, now, later, cta, nowLabel = 'What you get now', laterLabel = 'What you get when we open' }) {
  return (
    <Reveal className="value-prop">
      <div className="value-prop__head">
        <span className="value-prop__who">{who}</span>
        <p className="value-prop__headline">{headline}</p>
      </div>

      <div className="value-prop__cols">
        <div className="value-prop__col value-prop__col--now">
          <p className="value-prop__label">{nowLabel}</p>
          <ul className="check-list">
            {now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="value-prop__divider" />

        <div className="value-prop__col value-prop__col--later">
          <p className="value-prop__label">{laterLabel}</p>
          <ul className="check-list check-list--cyan">
            {later.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {cta && <div className="value-prop__foot">{cta}</div>}
    </Reveal>
  )
}

/**
 * Homepage router. A visitor should not have to work out which of nine pages
 * is theirs — each card names the reader and states their gain in one line.
 */
export function AudienceRouter({ items }) {
  return (
    <Reveal className="audiences">
      {items.map((item) => (
        <Link className="audience" to={item.to} key={item.who}>
          <span className="audience__who">{item.who}</span>
          <span className="audience__what">{item.what}</span>
          {item.note && <span className="audience__note">{item.note}</span>}
          <span className="audience__foot">
            <span className="link-arrow">{item.cta}</span>
          </span>
        </Link>
      ))}
    </Reveal>
  )
}
