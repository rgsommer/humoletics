import { useState } from 'react'
import Reveal from './Reveal'

export const INTEREST_OPTIONS = [
  'Visit Humoletics',
  'Bring my school or group',
  'Book an event',
  'Test a business application',
  'Purchase or lease a humanoid robot',
  'Become a technology partner',
  'Become a venue partner',
  'Discuss investment or funding',
  'Other',
]

const INQUIRY_EMAIL = 'hello@humoletics.com'
// Set VITE_INQUIRY_ENDPOINT at build time to POST enquiries to a backend.
// Without it the form composes an email the sender reviews and sends themselves.
const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT

const EMPTY = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  city: '',
  orgType: '',
  interest: '',
  message: '',
  consent: false,
  company: '', // honeypot
}

/**
 * Shared enquiry form. Optional props let a page swap the interest list, add an
 * organization-type select and relabel the message field, so institutional
 * pages reuse one validated form and one delivery path rather than forking it.
 */
export default function InquiryForm({
  title = 'Tell us what you want to do',
  lede,
  defaultInterest = '',
  id = 'inquiry',
  interestOptions = INTEREST_OPTIONS,
  interestLabel = 'I want to',
  orgTypeOptions,
  orgTypeLabel = 'Organization type',
  messageLabel = 'Message',
  messagePlaceholder = 'Tell us about your group, your event, or the task you would like a humanoid robot to attempt.',
  submitLabel = 'Send enquiry',
  subjectPrefix = 'HUMOLETICS enquiry',
}) {
  const [values, setValues] = useState({ ...EMPTY, interest: defaultInterest })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // { kind: 'ok' | 'err', text }
  const [sending, setSending] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!values.interest) next.interest = 'Please choose what you are interested in.'
    if (!values.message.trim()) next.message = 'Please tell us a little about your enquiry.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const composeBody = () =>
    [
      `Name: ${values.name}`,
      `Organization: ${values.organization || '—'}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || '—'}`,
      `City: ${values.city || '—'}`,
      orgTypeOptions ? `Organization type: ${values.orgType || '—'}` : null,
      `Interest: ${values.interest}`,
      '',
      values.message,
      '',
      `Consent to updates: ${values.consent ? 'Yes' : 'No'}`,
    ]
      .filter(Boolean)
      .join('\n')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.company) return // honeypot tripped — silently ignore
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
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        setValues({ ...EMPTY })
        setStatus({
          kind: 'ok',
          text: 'Thank you — your enquiry has been received. We will be in touch.',
        })
      } catch (err) {
        setStatus({
          kind: 'err',
          text: `We could not submit the form just now. Please email ${INQUIRY_EMAIL} directly.`,
        })
      } finally {
        setSending(false)
      }
      return
    }

    // No endpoint configured: hand a pre-filled draft to the sender's mail client.
    const subject = `${subjectPrefix} — ${values.interest}`
    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(composeBody())}`
    setSending(false)
    setStatus({
      kind: 'ok',
      text: `Your email application should now open with this enquiry ready for you to send. If nothing happened, email ${INQUIRY_EMAIL} and we will pick it up from there.`,
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
        {(title || lede) && (
          <div>
            {title && <h2 className="h3">{title}</h2>}
            {lede && <p className="body-copy mt-s">{lede}</p>}
          </div>
        )}

        {/* honeypot — hidden from people, tempting to bots */}
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
              name="name"
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
            <label className="field__label" htmlFor={`${id}-organization`}>
              Organization
            </label>
            <input
              className="input"
              id={`${id}-organization`}
              name="organization"
              type="text"
              autoComplete="organization"
              value={values.organization}
              onChange={update('organization')}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${id}-email`}>
              Email <span className="field__req">*</span>
            </label>
            <input
              className="input"
              id={`${id}-email`}
              name="email"
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
            <label className="field__label" htmlFor={`${id}-phone`}>
              Phone <span className="field__hint">(optional)</span>
            </label>
            <input
              className="input"
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={update('phone')}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${id}-city`}>
              City
            </label>
            <input
              className="input"
              id={`${id}-city`}
              name="city"
              type="text"
              autoComplete="address-level2"
              value={values.city}
              onChange={update('city')}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${id}-interest`}>
              {interestLabel} <span className="field__req">*</span>
            </label>
            <select
              className="select"
              id={`${id}-interest`}
              name="interest"
              required
              value={values.interest}
              onChange={update('interest')}
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? `${id}-interest-error` : undefined}
            >
              <option value="">Choose an option…</option>
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {err('interest')}
          </div>
        </div>

        {orgTypeOptions && (
          <div className="field">
            <label className="field__label" htmlFor={`${id}-orgtype`}>
              {orgTypeLabel}
            </label>
            <select
              className="select"
              id={`${id}-orgtype`}
              name="orgType"
              value={values.orgType}
              onChange={update('orgType')}
            >
              <option value="">Choose an option…</option>
              {orgTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="field">
          <label className="field__label" htmlFor={`${id}-message`}>
            {messageLabel} <span className="field__req">*</span>
          </label>
          <textarea
            className="textarea"
            id={`${id}-message`}
            name="message"
            required
            placeholder={messagePlaceholder}
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
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={update('consent')}
          />
          <span>
            Send me occasional updates about HUMOLETICS — launch news, early access and partner
            opportunities. You can unsubscribe at any time.
          </span>
        </label>

        <div id={`${id}-status`} aria-live="polite">
          {status && (
            <p className={`form__status ${status.kind === 'ok' ? 'form__status--ok' : 'form__status--err'}`}>
              {status.text}
            </p>
          )}
        </div>

        <div>
          <button className="btn" type="submit" disabled={sending}>
            {sending ? 'Sending…' : submitLabel}
          </button>
          <p className="form-note mt-s">
            We use the details you provide to respond to your enquiry. HUMOLETICS is a concept in
            development — we will be straightforward with you about what is and is not available yet.
          </p>
        </div>
      </form>
    </Reveal>
  )
}
