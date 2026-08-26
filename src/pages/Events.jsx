import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Flow } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import { Card, FactCard } from '../components/Cards'

export default function Events() {
  useSeo({
    title: 'Events | HUMOLETICS — Corporate Events, Pop-Ups & Activations',
    description:
      'Humanoid robotics for corporate events, trade shows, festivals, conferences, shopping-centre activations and private bookings — a travelling Human vs. Humanoid experience in development in Ontario.',
    path: '/events',
  })

  return (
    <>
      <PageHero
        breadcrumb="Events"
        eyebrow="Humoletics Events"
        title="Bring the future to your floor."
        lede="Before there is a permanent HUMOLETICS venue, HUMOLETICS travels. A humanoid robot and a Human vs. Humanoid challenge is the rare attraction that stops an entire room — and produces a queue rather than a glance."
        facts={['Corporate events', 'Trade shows', 'Festivals', 'Mall activations', 'Private bookings']}
        actions={
          <>
            <a href="#book" className="btn">
              Enquire about an event
            </a>
            <Link to="/experience" className="btn btn--ghost">
              The Experience
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Formats"
            title="One attraction, several shapes."
            layout="split"
            lede="The format flexes to the room, the audience and the objective — whether that is footfall, engagement, recruitment, media attention or a genuinely memorable team day."
          />

          <div className="grid grid--3">
            <Card index="01" title="Corporate events">
              Team days, offsites, innovation sessions, client hospitality and celebrations, with an
              optional commercial track for the people asking serious questions.
            </Card>
            <Card index="02" title="Trade shows" delay={70}>
              A stand people queue at. Live humanoid demonstration plus a Human vs. Humanoid
              challenge, staffed by people who can answer technical questions properly.
            </Card>
            <Card index="03" title="Conferences" delay={140}>
              Keynote demonstrations and exhibition presence for robotics, manufacturing,
              education, innovation and economic development programs.
            </Card>
            <Card index="04" title="Shopping-centre activations" delay={210}>
              High-traffic public activations where thousands of visitors meet a humanoid without
              having planned to.
            </Card>
            <Card index="05" title="Festivals & fairs" delay={280}>
              Public events, community festivals and fall fairs — a challenge lane, a leaderboard
              and a crowd.
            </Card>
            <Card index="06" title="Private bookings" delay={350}>
              Private groups, milestone events and closed sessions where a small group gets
              extended access.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What an activation includes"
            title="Designed to be run properly."
            layout="split"
            lede="An activation is a controlled robotics operation in a public space. The interesting part is the robot; the part that makes it work is everything around it."
          />

          <div className="grid grid--4">
            <FactCard value="Demo" label="Live demonstrations" note="Scheduled humanoid demonstrations throughout the day." />
            <FactCard value="Challenge" label="Human vs. Humanoid" note="A controlled challenge lane visitors can enter." delay={80} />
            <FactCard value="Staff" label="Trained operators" note="Supervision and stop authority for all robot activity." delay={160} />
            <FactCard value="Zone" label="Managed area" note="Defined participant and robot zones with barriers." delay={240} />
          </div>

          <div className="mt-l">
            <Flow
              steps={[
                { title: 'Brief', body: 'Audience, objective, venue, dates and what success looks like for you.' },
                { title: 'Design', body: 'Format, footprint, power and space requirements, and the safety plan.' },
                { title: 'Confirm', body: 'Scope, staffing and logistics agreed and scheduled.' },
                { title: 'Run', body: 'Delivered and operated by trained HUMOLETICS staff on the day.' },
              ]}
            />
          </div>

          <div className="mt-l">
            <Notice tag="Status">
              Event availability depends on platform access and on completing safety validation for
              public operation. We are booking conversations now for Ontario events and will confirm
              dates only when we can genuinely deliver them.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--light" id="book">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Enquire"
            title="Tell us about your event."
            lede="Venue, dates, expected attendance and what you want the activation to achieve. We will come back with what is realistic on your timeline."
          />
          <InquiryForm id="events" title={null} defaultInterest="Book an event" />
        </div>
      </section>

      <Finale
        title="The stand people queue at."
        sub="A humanoid robot and a challenge anyone can enter. Bring it to your venue, your show or your team."
        actions={
          <>
            <a href="#book" className="btn">
              Enquire about an event
            </a>
            <Link to="/partners" className="btn btn--ghost">
              Become a venue partner
            </Link>
          </>
        }
      />
    </>
  )
}
