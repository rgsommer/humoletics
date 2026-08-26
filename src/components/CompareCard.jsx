import Reveal from './Reveal'

const ROWS = [
  { metric: 'Chair stands', prev: '5', next: '6', unit: '' },
  { metric: 'Balance hold', prev: '14', next: '16', unit: 'sec' },
  { metric: 'Steps', prev: '320', next: '350', unit: '' },
]

/**
 * "The competitor is yesterday" — an illustrative participant profile showing
 * last session against today's goal. Progression against your own record,
 * never against a younger or fitter participant.
 */
export default function CompareCard({
  best = '6 chair stands · 16 sec hold',
  note = 'Example participant profile. Figures are illustrative and do not represent measured results.',
}) {
  return (
    <Reveal>
      <div className="compare">
        <div className="compare__cols">
          <div className="compare__col">
            <p className="compare__head">Previous session</p>
            {ROWS.map((row) => (
              <div className="compare__row" key={`prev-${row.metric}`}>
                <span className="compare__metric">{row.metric}</span>
                <span className="compare__val">
                  {row.prev}
                  {row.unit && <span className="compare__unit">{row.unit}</span>}
                </span>
              </div>
            ))}
          </div>

          <div className="compare__divider" />

          <div className="compare__col compare__col--today">
            <p className="compare__head">Today&rsquo;s goal</p>
            {ROWS.map((row) => (
              <div className="compare__row" key={`next-${row.metric}`}>
                <span className="compare__metric">{row.metric}</span>
                <span className="compare__val">
                  {row.next}
                  {row.unit && <span className="compare__unit">{row.unit}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="compare__pb">
          <span>Personal best</span>
          <b>{best}</b>
        </p>
      </div>
      {note && <p className="illustrative-note">{note}</p>}
    </Reveal>
  )
}
