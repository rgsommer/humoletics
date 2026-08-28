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

      {/* ================== FORMATS IN DEVELOPMENT ==================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Formats in development"
            title="More than a robot in the corner."
            layout="split"
            lede="A humanoid on a stand draws a crowd once and gets photographed. These are the formats we are developing so people take part instead — the difference between an attraction and an experience they talk about on Monday."
          />

          <div className="split split--top">
            <div>
              <h3 className="h2">Escape room with a humanoid</h3>
              <p className="body-copy mt-m">
                The humanoid is not set dressing. It holds something the team needs, and it will
                only give it up if they work out how to ask — which makes the puzzle a
                communication problem rather than a padlock.
              </p>
              <ul className="check-list mt-m">
                <li><strong>The gatekeeper.</strong> It knows the next step and responds only to a correctly formed instruction.</li>
                <li><strong>The teammate you must direct.</strong> It can reach and do things the team cannot — if they can explain the task precisely enough.</li>
                <li><strong>The demonstrator.</strong> It performs a sequence once, at speed, and the team has to reproduce or interpret it.</li>
                <li><strong>The unreliable witness.</strong> It answers literally. Ask the wrong question and you get the wrong answer, correctly.</li>
              </ul>
              <p className="body-copy mt-m">
                Built for teams of four to eight, in a session of roughly an hour — a corporate
                team-building format that happens to teach people how machines actually interpret
                instructions.
              </p>
            </div>

            <div>
              <h3 className="h2">Humanoid co-host</h3>
              <p className="body-copy mt-m">
                Rent a humanoid as part of the event itself rather than as an exhibit beside it —
                a co-host that works the room on a defined route through the evening.
              </p>
              <ul className="check-list check-list--cyan mt-m">
                <li>Greeting arrivals and posing for photographs</li>
                <li>Running scheduled demonstrations through the night</li>
                <li>Introducing speakers and announcing segments</li>
                <li>Handing out sealed drinks, giveaways or programmes along a set route</li>
                <li>Taking on guests in a challenge as the evening&rsquo;s entertainment</li>
              </ul>

              <div className="mt-m">
                <Notice tag="Honest limit">
                  Tray service of open drinks through a moving crowd is beyond what current
                  humanoid platforms do reliably, and we will not sell it. What is plausible is a
                  defined route, sealed or pre-packaged items, and a supervised handover — which is
                  what we would quote for.
                </Notice>
              </div>
            </div>
          </div>

          <div className="mt-l">
            <div className="split split--top">
              <div>
                <h3 className="h2">Dance battle</h3>
                <p className="body-copy mt-m">
                  The one that needs no explaining to a room. A human and a humanoid facing each
                  other on a floor, on a beat — choreographed full-body motion is the thing current
                  platforms are genuinely best at, which makes this the most deliverable crowd
                  format we have.
                </p>
                <ul className="check-list mt-m">
                  <li>Guests take on the robot in rounds, scored on accuracy and timing</li>
                  <li>Difficulty scales through routine complexity, so anyone can enter</li>
                  <li>Works as a stage set-piece or a rolling floor attraction</li>
                  <li>As good to watch as it is to take part in — which keeps a queue</li>
                </ul>
                <div className="btn-row">
                  <Link to="/arena" className="btn btn--ghost">
                    How the rounds work
                  </Link>
                </div>
              </div>
              <div>
                <Notice tag="Most deliverable">
                  Of the formats on this page, the dance battle depends least on capability we do
                  not yet have. Its first round — the robot performs, guests reproduce — is
                  supported by what humanoid platforms already do today.
                </Notice>
              </div>
            </div>
          </div>

          <div className="mt-l">
            <Notice tag="In development">
              These formats are concepts we are developing, not products you can book today. Which
              elements are offered will depend on what the platform we secure can actually be shown
              to do safely. Tell us which one interests you and it moves up the list.
            </Notice>
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
