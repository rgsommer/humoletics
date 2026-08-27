import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { CONTACT_EMAIL } from '../lib/site'
import { PageHero } from '../components/Blocks'

export default function Privacy() {
  useSeo({
    title: 'Privacy | HUMOLETICS',
    description:
      'How HUMOLETICS, a venture of 10323594 Canada Corp., collects and uses the personal information you provide through this website.',
    path: '/privacy',
  })

  return (
    <>
      <PageHero breadcrumb="Privacy" eyebrow="Legal" title="Privacy notice" />

      <section className="band band--dark">
        <div className="container container--narrow prose">
          <p className="text-muted">Last updated: 26 August 2026</p>

          <p>
            This notice explains how HUMOLETICS, a venture of 10323594 Canada Corp. (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;), handles personal information collected through this website. HUMOLETICS
            is a concept in development, and this website is currently an informational and enquiry
            site.
          </p>

          <h2>Information we collect</h2>
          <p>We collect only the information you choose to give us through an enquiry form:</p>
          <ul>
            <li>Your name</li>
            <li>Your organization, if you provide one</li>
            <li>Your email address</li>
            <li>Your phone number, if you provide one</li>
            <li>Your city, if you provide one</li>
            <li>The interest category you select and the message you write</li>
            <li>Whether you opted in to receive updates</li>
          </ul>
          <p>
            We do not ask for financial information, government identifiers or sensitive personal
            information through this website, and you should not send them to us.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry</li>
            <li>To provide information about the products, programs or partnerships you asked about</li>
            <li>To send occasional HUMOLETICS updates, only where you have opted in</li>
            <li>To understand the kinds of enquiries we receive, so we can develop the concept</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not share it with third parties for
            their own marketing purposes.
          </p>

          <h2>Consent and withdrawal</h2>
          <p>
            Updates are sent only if you tick the consent box. You can withdraw consent at any time
            by using the unsubscribe link in any update, or by contacting us. Withdrawing consent for
            updates does not prevent us replying to an enquiry you have already sent.
          </p>

          <h2>Retention</h2>
          <p>
            We keep enquiry information for as long as needed to respond and to maintain a record of
            the conversation, and then dispose of it securely. If you ask us to delete your
            information, we will do so unless we are required to keep it.
          </p>

          <h2>Your rights</h2>
          <p>
            Under Canadian privacy law you may request access to the personal information we hold
            about you, ask for corrections, and ask us to delete it. Contact us using the details
            below and we will respond within a reasonable period.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This website does not use advertising cookies or third-party tracking cookies. If we
            introduce analytics in future, we will update this notice and describe what is collected
            before doing so.
          </p>

          <h2>Third-party services</h2>
          <p>
            This site loads web fonts from Google Fonts, which means your browser makes a request to
            Google&rsquo;s servers when the page loads. Enquiries you send may be handled through
            standard email or form-processing services operating on our behalf.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy question or request, write to us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or use the{' '}
            <Link to="/contact">contact form</Link>.
          </p>
          <p className="text-muted">
            10323594 Canada Corp., Ontario, Canada.
          </p>
        </div>
      </section>
    </>
  )
}
