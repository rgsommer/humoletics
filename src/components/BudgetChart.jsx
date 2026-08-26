import { useState } from 'react'
import Reveal from './Reveal'
import { useInView } from '../lib/hooks'

/**
 * Proposed Phase I budget.
 *
 * Form: sorted horizontal bars (the job is magnitude across line items) plus a
 * part-to-whole strip for the three spending groups. Colour encodes the GROUP —
 * identity, not rank — so filtering never repaints a survivor. The three hues
 * were validated for colour-vision separation against this light surface.
 * Every value is also available in the table view, so nothing is gated on colour.
 */

const GROUPS = {
  a: { key: 'a', name: 'Canadian software, AI & measurement' },
  b: { key: 'b', name: 'Robotics hardware & facilities' },
  c: { key: 'c', name: 'Partnerships, market & compliance' },
}

const ITEMS = [
  {
    label: 'Canadian software / AI development',
    amount: 120000,
    group: 'a',
    note: 'The largest single line, and deliberately so. This is the human–humanoid interaction platform: participant profiles, adaptive difficulty, robot performance limits, scoring, personal records and event management. It is the part of Phase I that stays in Canada.',
  },
  {
    label: 'Technical / engineering labour',
    amount: 90000,
    group: 'a',
    note: 'Engineering time to integrate platforms, build application layers, run test cycles and support pilots — the expertise that is hardest to buy in and most valuable to retain.',
  },
  {
    label: 'Humanoid robots & robotics hardware',
    amount: 90000,
    group: 'b',
    note: 'Acquisition or lease of 2–3 commercially available humanoid platforms plus supporting hardware. Likely manufactured internationally; the platforms are the instrument, not the product.',
  },
  {
    label: 'Computer vision & sensing',
    amount: 45000,
    group: 'a',
    note: 'Cameras, sensors and the measurement software to evaluate movement, timing, repetitions, reaction and position. Measurement is what turns a demonstration into evidence.',
  },
  {
    label: 'Pilot facility / pop-up environments',
    amount: 45000,
    group: 'b',
    note: 'Temporary and pop-up environments for controlled public demonstrations and the industrial application lab, ahead of any permanent site decision.',
  },
  {
    label: 'Safety systems & prototype equipment',
    amount: 35000,
    group: 'b',
    note: 'Controlled interaction environments, physical separation where required, emergency controls and activity-specific safety equipment. This is a precondition for public operation, not an optional extra.',
  },
  {
    label: 'Research & testing partnerships',
    amount: 30000,
    group: 'c',
    note: 'Contributions to collaborative work with colleges, universities and research partners — including the kinesiology, gerontology and rehabilitation research questions we cannot and should not answer alone.',
  },
  {
    label: 'Commercialization & market validation',
    amount: 25000,
    group: 'c',
    note: 'Structured validation with Canadian SMEs and public audiences: willingness to pay, repeat participation, educational demand and operational requirements.',
  },
  {
    label: 'Legal / IP / regulatory / insurance',
    amount: 20000,
    group: 'c',
    note: 'Corporate, intellectual-property, regulatory and insurance work — including establishing ownership of Canadian-developed application IP before pilots begin.',
  },
]

const TOTAL = ITEMS.reduce((sum, item) => sum + item.amount, 0)
const MAX = Math.max(...ITEMS.map((i) => i.amount))

const groupTotal = (key) =>
  ITEMS.filter((i) => i.group === key).reduce((sum, i) => sum + i.amount, 0)

const money = (n) => `$${n.toLocaleString('en-CA')}`
const share = (n) => `${Math.round((n / TOTAL) * 100)}%`

const DEFAULT_DETAIL = {
  group: null,
  text: (
    <>
      <b>51% of the proposed budget is Canadian software, AI, measurement and
      engineering labour.</b>{' '}
      The robots themselves are instruments. The value we intend to keep in Canada is
      the application layer built on top of them. Select any line for detail.
    </>
  ),
}

export default function BudgetChart() {
  const [ref, inView] = useInView()
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState(null)

  const detail = selected
    ? { group: selected.group, text: <><b>{selected.label} — {money(selected.amount)}.</b> {selected.note}</> }
    : DEFAULT_DETAIL

  const toggleFilter = (key) => setFilter((cur) => (cur === key ? null : key))

  return (
    <Reveal>
      <div className={`budget ${filter ? 'is-filtered' : ''}`} ref={ref}>
        <div className="budget__hero">
          <p className="budget__total">{money(TOTAL)}</p>
          <p className="budget__total-label">Proposed Phase I budget · 12–18 months</p>
        </div>

        {/* part-to-whole: three groups */}
        <div className="budget__strip">
          {Object.values(GROUPS).map((g) => (
            <button
              key={g.key}
              type="button"
              className={`budget__seg budget__seg--${g.key} ${filter === g.key ? 'is-active' : ''}`}
              style={{ width: `${(groupTotal(g.key) / TOTAL) * 100}%` }}
              onClick={() => toggleFilter(g.key)}
              aria-pressed={filter === g.key}
              aria-label={`${g.name}: ${money(groupTotal(g.key))}, ${share(groupTotal(g.key))} of the proposed budget`}
            />
          ))}
        </div>

        <ul className="budget__legend">
          {Object.values(GROUPS).map((g) => (
            <li key={g.key}>
              <button
                type="button"
                className={`budget__legend-btn ${filter === g.key ? 'is-active' : ''}`}
                onClick={() => toggleFilter(g.key)}
                aria-pressed={filter === g.key}
              >
                <span className="budget__swatch" style={{ background: `var(--bud-${g.key})` }} />
                {g.name}
                <span className="budget__legend-amount">
                  {money(groupTotal(g.key))} · {share(groupTotal(g.key))}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="budget__rows">
          {ITEMS.map((item) => {
            const active = !filter || filter === item.group
            return (
              <button
                type="button"
                key={item.label}
                className={`budget__row ${active ? 'is-active' : ''}`}
                onClick={() => setSelected((cur) => (cur?.label === item.label ? null : item))}
                aria-pressed={selected?.label === item.label}
              >
                <span className="budget__label">{item.label}</span>
                <span className="budget__track">
                  <span
                    className={`budget__bar budget__bar--${item.group}`}
                    style={{ width: inView ? `${(item.amount / MAX) * 100}%` : '0%' }}
                  />
                </span>
                <span className="budget__amount">
                  {money(item.amount)}
                  <span className="budget__share">{share(item.amount)}</span>
                </span>
              </button>
            )
          })}
        </div>

        <p
          className={`budget__detail ${detail.group ? `budget__detail--${detail.group}` : ''}`}
          aria-live="polite"
        >
          {detail.text}
        </p>

        <details className="budget__table-toggle">
          <summary>View as table</summary>
          <div className="table-scroll">
            <table className="data-table">
              <caption>Proposed Phase I budget allocation</caption>
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Group</th>
                  <th scope="col" className="num">Proposed budget</th>
                  <th scope="col" className="num">Share</th>
                </tr>
              </thead>
              <tbody>
                {ITEMS.map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td>{GROUPS[item.group].name}</td>
                    <td className="num">{money(item.amount)}</td>
                    <td className="num">{share(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td />
                  <td className="num">{money(TOTAL)}</td>
                  <td className="num">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
      </div>

      <p className="illustrative-note">
        Illustrative Phase I budget — subject to partner input and funding-program
        eligibility. Not every line would be eligible for reimbursement under any given
        program.
      </p>
    </Reveal>
  )
}
