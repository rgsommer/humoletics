import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/* ---------- interior page hero ------------------------------------------- */
/**
 * `tone="light"` switches the hero to the bright palette (Active Aging).
 * `visual` puts a figure beside the copy instead of below it.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
  facts = [],
  actions,
  tone,
  visual,
  titleClass = 'h1',
}) {
  const copy = (
    <div>
      <Reveal>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={`${titleClass} page-hero__title`}>{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
      </Reveal>
      {facts.length > 0 && (
        <Reveal delay={120}>
          <ul className="tag-list page-hero__facts">
            {facts.map((f) => (
              <li key={f} className="tag">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
      {actions && (
        <Reveal delay={160}>
          <div className="btn-row">{actions}</div>
        </Reveal>
      )}
    </div>
  )

  return (
    <section className={`page-hero ${tone === 'light' ? 'page-hero--light' : ''}`}>
      <div className="container page-hero__inner">
        {breadcrumb && (
          <p className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            {breadcrumb}
          </p>
        )}
        {visual ? (
          <div className="page-hero__split">
            {copy}
            <Reveal delay={140}>{visual}</Reveal>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  )
}

/* ---------- the three layers of the venture ------------------------------ */
export function Layers({ items }) {
  return (
    <Reveal className="layers">
      {items.map((item, i) => (
        <div className={`layer layer--${['a', 'b', 'c'][i] || 'a'}`} key={item.name}>
          <span className="layer__num">{item.num}</span>
          <h3 className="layer__name">{item.name}</h3>
          <p className="layer__desc">{item.desc}</p>
        </div>
      ))}
    </Reveal>
  )
}

/* ---------- vertical value chain ----------------------------------------- */
export function VFlow({ nodes }) {
  return (
    <Reveal className="vflow">
      {nodes.map((node, i) => (
        <span key={node.label} style={{ display: 'contents' }}>
          <span className={`vflow__node ${node.hero ? 'vflow__node--hero' : ''}`}>
            {node.label}
            {node.sub && <small>{node.sub}</small>}
          </span>
          {i < nodes.length - 1 && (
            <span className="vflow__arrow" aria-hidden="true">
              ↓
            </span>
          )}
        </span>
      ))}
    </Reveal>
  )
}

/* ---------- numbered process flow ---------------------------------------- */
export function Flow({ steps, wide = false }) {
  return (
    <Reveal>
      <ol className={`flow ${wide ? 'flow--7' : ''}`}>
        {steps.map((step, i) => (
          <li className="flow__step" key={step.title}>
            <span className="flow__step-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="flow__step-title">{step.title}</h3>
            <p className="flow__step-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

/* ---------- big arrow chain: Demo → Test → Pilot → Deploy ----------------- */
export function Chain({ nodes }) {
  return (
    <Reveal className="chain">
      {nodes.map((node, i) => (
        <span className="chain__item" key={node}>
          <span className={`chain__node ${i === nodes.length - 1 ? 'chain__node--last' : ''}`}>
            {node}
          </span>
          {i < nodes.length - 1 && (
            <span className="chain__arrow" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </Reveal>
  )
}

/* ---------- development-stage transparency notice ------------------------ */
export function Notice({ tag = 'Status', children }) {
  return (
    <Reveal className="notice">
      <span className="notice__tag">{tag}</span>
      <span>{children}</span>
    </Reveal>
  )
}

/* ---------- inline CTA band ---------------------------------------------- */
export function CtaBand({ title, body, actions }) {
  return (
    <Reveal className="cta-band">
      <div>
        <h2 className="h3">{title}</h2>
        {body && <p className="body-copy mt-s">{body}</p>}
      </div>
      <div className="btn-row" style={{ marginTop: 0 }}>
        {actions}
      </div>
    </Reveal>
  )
}

/* ---------- scrolling capability ticker ---------------------------------- */
export function Ticker({ items }) {
  const doubled = [...items, ...items]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span className="ticker__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- closing full-bleed CTA --------------------------------------- */
export function Finale({ title, sub, actions }) {
  return (
    <section className="finale">
      <div className="container">
        <Reveal>
          <h2 className="finale__title">{title}</h2>
          {sub && <p className="finale__sub">{sub}</p>}
          <div className="btn-row btn-row--center">{actions}</div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- FAQ / disclosure list ---------------------------------------- */
export function Faq({ items }) {
  return (
    <Reveal className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </Reveal>
  )
}

/* ---------- the organising pathway: Demonstrate → Test → Develop → Deploy -- */
export function Pathway({ stages }) {
  return (
    <Reveal className="pathway">
      {stages.map((stage, i) => (
        <div className="pathway__stage" key={stage.name}>
          <span className="pathway__step">STEP {String(i + 1).padStart(2, '0')}</span>
          <span className="pathway__name">{stage.name}</span>
          <span className="pathway__desc">{stage.desc}</span>
        </div>
      ))}
      <span className="pathway__rail" aria-hidden="true">
        <span className="pathway__pulse" />
      </span>
    </Reveal>
  )
}

/* ---------- plain-spoken project status board ---------------------------- */
const STATUS_CLASS = {
  done: 'done',
  progress: 'progress',
  dev: 'dev',
  seeking: 'seeking',
}

export function StatusBoard({ rows }) {
  return (
    <Reveal className="status-board">
      {rows.map((row) => (
        <div className="status-row" key={row.name}>
          <div>
            <p className="status-name">{row.name}</p>
            {row.note && <p className="status-note">{row.note}</p>}
          </div>
          <span className={`status-pill status-pill--${STATUS_CLASS[row.state] || 'dev'}`}>
            {row.label}
          </span>
        </div>
      ))}
    </Reveal>
  )
}

/* ---------- principle pullquote ------------------------------------------ */
export function Principle({ children, attrib }) {
  return (
    <Reveal className="principle">
      <p className="principle__text">{children}</p>
      {attrib && <p className="principle__attrib">{attrib}</p>}
    </Reveal>
  )
}

/* ---------- feasibility question grid ------------------------------------ */
export function Questions({ items }) {
  return (
    <Reveal className="questions">
      {items.map((q, i) => (
        <div className="question" key={q}>
          <span className="question__q">Q{String(i + 1).padStart(2, '0')}</span>
          <span className="question__text">{q}</span>
        </div>
      ))}
    </Reveal>
  )
}
