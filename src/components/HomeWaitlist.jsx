import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const INQUIRY_EMAIL = 'hello@humoletics.com'
const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT

const USES = [
  'Home assistance',
  'Independent living',
  'Fitness / coaching',
  'Companionship',
  'Post-surgery / recovery support',
  'Other',
]

const TERMS = ['Short-term', 'Monthly', 'Long-term', 'Not sure yet']

const ORG_TYPES = [
  'Retirement residence',
  'Assisted-living organization',
  'Home-care provider',
  'Physiotherapy organization',
  'Hospital or recovery facility',
  'Other care organization',
]

const EMPTY = {
  path: 'household', // 'household' | 'organization'
  name: '',
  email: '',
  city: '',
  organization: '',
  orgType: '',
  term: '',
  uses: [],
  message: '',
  consent: false,
  company: '', // honeypot
}

/**
 * Waitlist capture for HUMOLETICS HOME, with a second path that routes
 * healthcare and home-care enquiries toward the future HUMOLETICS CARE offering.
 * Mirrors InquiryForm's validation and delivery behaviour so both forms on the
 * site behave identically.
 */
export default function HomeWaitlist({ id = 'home' }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)
  const [fallback, setFallback] = useState(null)
  const [copied, setCopied] = useState(false)

  const isOrg = values.path === 'organization'

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const toggleUse = (use) => () =>
    setValues((v) => ({
      ...v,
      uses: v.uses.includes(use) ? v.uses.filter((u) => u !== use) : [...v.uses, use],
    }))

  const setPath = (path) => () => {
    setValues((v) => ({ ...v, path }))
    setErrors({})
    setStatus(null)
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (isOrg && !values.organization.trim())
      next.organization = 'Please tell us which organization you represent.'
    if (!values.message.trim())
      next.message = isOrg
        ? 'Please tell us a little about what you are exploring.'
        : 'Please tell us what you would like a humanoid to help with.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const composeBody = () =>
    [
      `Enquiry type: ${isOrg ? 'Healthcare / home-care organization (Humoletics Care)' : 'Household waitlist (Humoletics Home)'}`,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `City: ${values.city || '—'}`,
      isOrg ? `Organization: ${values.organization}` : null,
      isOrg ? `Organization type: ${values.orgType || '—'}` : null,
      !isOrg ? `Rental interest: ${values.term || '—'}` : null,
      !isOrg ? `Intended use: ${values.uses.length ? values.uses.join(', ') : '—'}` : null,
      '',
      values.message,
      '',
      `Consent to updates: ${values.consent ? 'Yes' : 'No'}`,
    ]
      .filter((line) => line !== null)
      .join('\n')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.company) return // honeypot
    if (!validate()) {
      setStatus({ kind: 'err', text: 'Please check the highlighted fields and try again.' })
      return
    }

    setSending(true)
    setStatus(null)

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, source: 'humoletics-home' }),
        })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        setValues({ ...EMPTY, path: values.path })
        setStatus({
          kind: 'ok',
          text: isOrg
            ? 'Thank you — your enquiry has been received and will be routed to the Humoletics Care conversation.'
            : 'Thank you — you are on the Humoletics Home waitlist. We will be in touch as platforms and availability firm up.',
        })
      } catch {
        setStatus({
          kind: 'err',
          text: `We could not submit the form just now. Please email ${INQUIRY_EMAIL} directly.`,
        })
      } finally {
        setSending(false)
      }
      return
    }

    const subject = isOrg
      ? 'Humoletics Care enquiry — healthcare / home-care organization'
      : 'Humoletics Home waitlist'
    const body = composeBody()
    const href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    try {
      window.location.href = href
    } catch {
      /* ignore — the fallback panel below covers it */
    }

    setSending(false)
    setFallback({ body: `To: ${INQUIRY_EMAIL}\nSubject: ${subject}\n\n${body}`, href })
    setStatus({
      kind: 'ok',
      text: 'Your enquiry is ready to send. If your email application did not open, copy it below — nothing has been sent automatically.',
    })
  }

  const err = (field) =>
    errors[field] ? (
      <span className="field__hint" style={{ color: 'var(--human)' }} id={`${id}-${field}-error`}>
        {errors[field]}
      </span>
    ) : null

  return (
    <Reveal>
      <form className="form" onSubmit={onSubmit} noValidate aria-describedby={`${id}-status`}>
        <div>
          <p className="field__label" id={`${id}-path-label`}>
            I am enquiring as
          </p>
          <div className="segmented" role="group" aria-labelledby={`${id}-path-label`}>
            <button type="button" aria-pressed={!isOrg} onClick={setPath('household')}>
              An individual or family
            </button>
            <button type="button" aria-pressed={isOrg} onClick={setPath('organization')}>
              A healthcare / home-care organization
            </button>
          </div>
          <p className="field__hint" style={{ marginTop: 10 }}>
            {isOrg ? (
              <>
                Organization enquiries are routed toward{' '}
                <strong>Humoletics Care</strong>, our longer-term professional offering. Care-sector
                applications would be developed with appropriate healthcare professionals and subject
                to applicable safety, regulatory and clinical requirements.
              </>
            ) : (
              'Joining the waitlist is not a booking or a commitment. Humoletics Home is not yet operating.'
            )}
          </p>
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor={`${id}-company`}>Company (leave blank)</label>
          <input
            id={`${id}-company`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={update('company')}
          />
        </div>

        <div className="form__grid">
          <div className="field">
            <label className="field__label" htmlFor={`${id}-name`}>
              Name <span className="field__req">*</span>
            </label>
            <input
              className="input"
              id={`${id}-name`}
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={update('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
            />
            {err('name')}
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${id}-email`}>
              Email <span className="field__req">*</span>
            </label>
            <input
              className="input"
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={update('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
            />
            {err('email')}
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${id}-city`}>
              City
            </label>
            <input
              className="input"
              id={`${id}-city`}
              type="text"
              autoComplete="address-level2"
              value={values.city}
              onChange={update('city')}
            />
          </div>

          {isOrg ? (
            <div className="field">
              <label className="field__label" htmlFor={`${id}-organization`}>
                Organization <span className="field__req">*</span>
              </label>
              <input
                className="input"
                id={`${id}-organization`}
                type="text"
                autoComplete="organization"
                required
                value={values.organization}
                onChange={update('organization')}
                aria-invalid={!!errors.organization}
                aria-describedby={errors.organization ? `${id}-organization-error` : undefined}
              />
              {err('organization')}
            </div>
          ) : (
            <div className="field">
              <label className="field__label" htmlFor={`${id}-term`}>
                Rental interest
              </label>
              <select className="select" id={`${id}-term`} value={values.term} onChange={update('term')}>
                <option value="">Choose an option…</option>
                {TERMS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {isOrg ? (
          <div className="field">
            <label className="field__label" htmlFor={`${id}-orgtype`}>
              Type of organization
            </label>
            <select className="select" id={`${id}-orgtype`} value={values.orgType} onChange={update('orgType')}>
              <option value="">Choose an option…</option>
              {ORG_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <fieldset className="fieldset-clean">
            <legend>Intended use — choose any that apply</legend>
            <div className="check-grid">
              {USES.map((use) => (
                <label className="checkbox" key={use} htmlFor={`${id}-use-${use}`}>
                  <input
                    id={`${id}-use-${use}`}
                    type="checkbox"
                    checked={values.uses.includes(use)}
                    onChange={toggleUse(use)}
                  />
                  <span>{use}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="field">
          <label className="field__label" htmlFor={`${id}-message`}>
            {isOrg
              ? 'What are you exploring?'
              : 'Tell us what you would like a humanoid to help with'}{' '}
            <span className="field__req">*</span>
          </label>
          <textarea
            className="textarea"
            id={`${id}-message`}
            required
            placeholder={
              isOrg
                ? 'Your setting, the residents or clients you support, and what you would want evaluated first.'
                : 'The room, the routine, the task — the more ordinary the detail, the more useful it is to us.'
            }
            value={values.message}
            onChange={update('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
          />
          {err('message')}
        </div>

        <label className="checkbox" htmlFor={`${id}-consent`}>
          <input
            id={`${id}-consent`}
            type="checkbox"
            checked={values.consent}
            onChange={update('consent')}
          />
          <span>
            Send me occasional updates about Humoletics Home — availability, platform capability and
            early-access news. You can unsubscribe at any time.
          </span>
        </label>

        <div id={`${id}-status`} aria-live="polite">
          {status && (
            <p className={`form__status ${status.kind === 'ok' ? 'form__status--ok' : 'form__status--err'}`}>
              {status.text}
            </p>
          )}
          {fallback && (
            <div className="form__fallback">
              <label className="field__label" htmlFor={`${id}-fallback`}>
                Your enquiry
              </label>
              <textarea
                id={`${id}-fallback`}
                className="textarea form__fallback-text"
                readOnly
                value={fallback.body}
                onFocus={(e) => e.target.select()}
              />
              <div className="btn-row" style={{ marginTop: 14 }}>
                <button
                  type="button"
                  className="btn btn--sm"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(fallback.body)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2500)
                    } catch {
                      setCopied(false)
                    }
                  }}
                >
                  {copied ? 'Copied' : 'Copy enquiry'}
                </button>
                <a className="btn btn--ghost btn--sm" href={fallback.href}>
                  Open in email app
                </a>
              </div>
            </div>
          )}
        </div>

        <div>
          <button className="btn" type="submit" disabled={sending}>
            {sending ? 'Sending…' : isOrg ? 'Request information' : 'Join the waitlist'}
          </button>
          <p className="form-note mt-s">
            We use the details you provide to respond and, if you opt in, to send updates. See our{' '}
            <Link to="/privacy" style={{ textDecoration: 'underline' }}>
              privacy notice
            </Link>
            . Humoletics Home is in development — there is nothing to purchase, and no rental is
            available today.
          </p>
        </div>
      </form>
    </Reveal>
  )
}
