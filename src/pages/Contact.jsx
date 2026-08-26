import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Notice, Faq } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import { Card } from '../components/Cards'

export default function Contact() {
  useSeo({
    title: 'Contact & Early Access | HUMOLETICS',
    description:
      'Join the HUMOLETICS early-access list, book a group or event, test a business application, enquire about humanoid robot purchase or lease, or discuss a technology, venue or investment partnership.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact & Early Access"
        title="Tell us what you want to do."
        lede="One form, several very different conversations. Whether you want to race a humanoid, bring thirty students, book an activation, or find out whether one could work on your production line — start here."
        facts={['Early access', 'Groups & schools', 'Events', 'Commercial', 'Partnerships']}
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <div className="split split--top">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Start the conversation."
                lede="We read everything that comes in. Because HUMOLETICS is in development, we will always tell you plainly what is available now and what is still ahead."
              />

              <div className="grid grid--2">
                <Card index="Public" title="Visitors & families">
                  Join the early-access list to hear first when Ontario events and experiences are
                  scheduled.
                </Card>
                <Card index="Groups" title="Schools & groups" delay={60}>
                  Tell us your grade level, group size and objectives, and we will shape a program
                  around them.
                </Card>
                <Card index="Business" title="Commercial enquiries" delay={120}>
                  Applications, feasibility studies, pilots, purchase and leasing conversations.
                </Card>
                <Card index="Partners" title="Partnerships" delay={180}>
                  Technology, venue, education, municipal, sponsorship and investment enquiries.
                </Card>
              </div>

              <div className="mt-l">
                <Notice tag="Privacy">
                  We use the details you provide only to respond to your enquiry and, if you opt in,
                  to send occasional HUMOLETICS updates. See our{' '}
                  <Link to="/privacy" style={{ textDecoration: 'underline' }}>
                    privacy notice
                  </Link>
                  .
                </Notice>
              </div>
            </div>

            <div>
              <InquiryForm id="contact" title="Send an enquiry" />
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Before you write" title="Questions we get a lot" />
          <Faq
            items={[
              {
                q: 'Is HUMOLETICS open?',
                a: 'No. HUMOLETICS is a concept in development. There is no permanent facility and no location currently open to the public. The first experiences are planned as pop-up and partner-hosted events in Ontario.',
              },
              {
                q: 'What does joining early access actually get me?',
                a: 'Advance notice of the first Ontario events, early booking where capacity is limited, and occasional updates on how the venture is progressing. Nothing more is promised, because nothing more exists yet.',
              },
              {
                q: 'I represent a manufacturer. Who should I speak to?',
                a: 'Use this form and choose "Become a technology partner", or go to the Partners page for detail on what a manufacturer partnership could involve. Enquiries of that kind go directly to the founder.',
              },
              {
                q: 'How quickly will I hear back?',
                a: 'HUMOLETICS is a small early-stage venture, so replies are handled personally rather than instantly. Commercial and partnership enquiries are prioritised.',
              },
              {
                q: 'Can I invest?',
                a: 'Investment and funding conversations are being explored. Select "Discuss investment or funding" and tell us briefly about your background and interest. Nothing on this website constitutes an offer of securities or an invitation to invest.',
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
