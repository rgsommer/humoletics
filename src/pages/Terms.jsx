import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero } from '../components/Blocks'

export default function Terms() {
  useSeo({
    title: 'Terms | HUMOLETICS',
    description:
      'Terms of use for the HUMOLETICS website, a venture of 10323594 Canada Corp., Ontario, Canada.',
    path: '/terms',
  })

  return (
    <>
      <PageHero breadcrumb="Terms" eyebrow="Legal" title="Terms of use" />

      <section className="band band--dark">
        <div className="container container--narrow prose">
          <p className="text-muted">Last updated: 26 August 2026</p>

          <p>
            This website is operated by 10323594 Canada Corp. (&ldquo;HUMOLETICS&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;), Ontario, Canada. By using the site you accept these
            terms.
          </p>

          <h2>Forward-looking information</h2>
          <p>
            HUMOLETICS is a concept in development. Descriptions on this website of experiences,
            facilities, challenges, services, capabilities, programs, partnerships and locations
            describe what we intend to develop. They are not descriptions of services currently
            available, and they may change or may not proceed.
          </p>
          <p>Specifically, as at the date above:</p>
          <ul>
            <li>HUMOLETICS does not operate a permanent facility</li>
            <li>No HUMOLETICS location is open to the public</li>
            <li>No robotics manufacturer partnership has been confirmed or announced</li>
            <li>No government funding has been approved</li>
            <li>No Humoletics league, leaderboard or competition is currently operating</li>
          </ul>
          <p>
            Example figures shown on this site — including timings, scores, performance levels and
            session data — are illustrative presentations of how results would be displayed. They are
            not measured performance results.
          </p>

          <h2>No offer of securities</h2>
          <p>
            Nothing on this website constitutes an offer to sell, or a solicitation of an offer to
            buy, any security or investment interest, nor does it constitute financial or investment
            advice. Any investment discussion would occur separately, in writing, and under
            applicable law.
          </p>

          <h2>No professional advice</h2>
          <p>
            Content on this website is general information only. HUMOLETICS Performance describes a
            fitness, recreation and coaching concept; it is not a medical, rehabilitation,
            therapeutic or diagnostic service and is not a substitute for professional advice.
          </p>

          <h2>Intellectual property</h2>
          <p>
            HUMOLETICS™ and the content, design, text and graphics of this website are the property
            of 10323594 Canada Corp. unless otherwise indicated. You may not reproduce or
            redistribute them without permission. Any third-party names referenced remain the
            property of their respective owners, and reference to a company or platform does not
            imply any partnership or endorsement unless expressly stated.
          </p>

          <h2>Accuracy and availability</h2>
          <p>
            We aim to keep this website accurate and current, but we provide it &ldquo;as is&rdquo;
            without warranties of any kind. We may change, suspend or withdraw any part of it at any
            time. To the fullest extent permitted by law, we are not liable for any loss arising from
            reliance on this website.
          </p>

          <h2>Enquiries</h2>
          <p>
            Submitting an enquiry does not create a contract, a booking, a reservation or a
            commitment by either party. Any engagement would be agreed separately in writing.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Province of Ontario and the federal laws of
            Canada applicable there.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:hello@humoletics.com">hello@humoletics.com</a>{' '}
            or via the <Link to="/contact">contact form</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
