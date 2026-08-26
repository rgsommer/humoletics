import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Flow, Chain, CtaBand, Faq } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import HomeVisual from '../components/HomeVisual'
import { CapabilityTiers, Limits } from '../components/Capability'
import HomeWaitlist from '../components/HomeWaitlist'
import { Card } from '../components/Cards'
import Reveal from '../components/Reveal'

const TIERS = [
  {
    tier: 'now',
    title: 'What some platforms can do today',
    items: [
      'Walk and keep balance on flat, uncluttered indoor floors',
      'Hold a spoken conversation and answer questions',
      'Demonstrate a movement or exercise on request',
      'Count repetitions using onboard cameras',
      'Give spoken reminders on a schedule',
      'Connect a video call to a family member',
      'Carry a light, rigid object across a mapped, clear floor',
      'Alert a designated contact when a person asks it to',
    ],
    caveat:
      'Every item here depends on the specific platform, a prepared environment and a supervised setup. None of it is guaranteed on every robot, and we would confirm it on the actual unit before a rental begins.',
  },
  {
    tier: 'soon',
    title: 'What we expect as the technology develops',
    items: [
      'Reliably finding and retrieving everyday objects from varied places',
      'Handling soft, irregular or fragile items',
      'Stairs, thresholds and genuinely cluttered rooms',
      'Longer unsupervised operation between charges',
      'Noticing that something is wrong without being told',
      'Learning one household’s particular layout and routines',
    ],
    caveat:
      'These are advancing quickly, but we will not place a robot in someone’s home on the strength of a promise. We will say so when a platform actually does them.',
  },
  {
    tier: 'future',
    title: 'What would need professional and regulatory validation',
    items: [
      'Any role within a prescribed clinical programme',
      'Reporting adherence or progress to a clinician',
      'Deployment inside a regulated care setting',
      'Any physical support of a person’s body weight',
      'Any part in an emergency response',
    ],
    caveat:
      'These require healthcare professionals, safety certification and regulatory work before they could be offered at all. They are the roadmap for Humoletics Care — not the product.',
  },
]

const LIMITS = [
  'Lift, carry or physically support a person',
  'Prevent, catch or break a fall',
  'Administer, dispense or manage medication',
  'Provide medical treatment, diagnosis or therapy',
  'Replace a nurse, PSW, physiotherapist or caregiver',
  'Handle an emergency on its own',
  'Be left in sole charge of anyone who needs supervision',
  'Make any decision about someone’s care or treatment',
]

const PLANS = [
  {
    term: 'Days to weeks',
    name: 'Short-term',
    desc: 'Temporary assistance, a recovery period, an event, or simply finding out whether this helps before committing to anything.',
    points: ['Delivery, setup and household training', 'Configured for the specific tasks agreed', 'Collected at the end of the term'],
  },
  {
    term: 'Rolling monthly',
    name: 'Monthly',
    desc: 'Ongoing home assistance, companionship, fitness coaching or independent-living support, with the flexibility to stop.',
    points: ['Software updates through the term', 'Remote technical support', 'Reconfiguration as needs change'],
  },
  {
    term: 'Extended agreement',
    name: 'Long-term',
    desc: 'A full Humanoid-as-a-Service arrangement covering hardware, software, support, maintenance and upgrades where applicable.',
    points: ['Scheduled maintenance and servicing', 'Platform upgrades where available', 'Replacement or swap arrangements'],
  },
]

const MODEL = [
  { name: 'Experience', desc: 'Meet and interact with humanoids.', to: '/experience' },
  { name: 'Challenge', desc: 'Compete against humanoids.', to: '/arena' },
  { name: 'Fitness', desc: 'Train with humanoid coaches.', to: '/performance' },
  { name: 'Lab', desc: 'Develop and test applications.', to: '/labs' },
  { name: 'Robotics', desc: 'Demonstration, sales, leasing and integration.', to: '/robotics' },
  { name: 'Home', desc: 'Humanoid-as-a-Service rentals.', to: '/home', active: true },
  { name: 'Care', desc: 'Future professional care-sector applications.', to: '#care', tag: 'Future' },
]

export default function HomeService() {
  useSeo({
    title: 'Humoletics Home | Humanoid-as-a-Service — Rent a Humanoid Robot',
    description:
      'Humoletics Home is a proposed Humanoid-as-a-Service rental offering for Canadian households — recovery support, independent living, fitness coaching and everyday assistance, without buying a robot. In development; availability depends on platform capability and safety certification.',
    path: '/home',
  })

  return (
    <>
      <PageHero
        breadcrumb="Humoletics Home"
        eyebrow="Humoletics Home · Humanoid-as-a-Service"
        titleClass="h1 page-hero__title--stack"
        title={
          <>
            A helping hand.
            <br />
            A training partner.
            <br />
            A new kind of <span className="accent-human">companion</span>.
          </>
        }
        lede="Experience humanoid assistance at home without purchasing a robot. Humoletics Home will provide flexible humanoid rentals for independent living, recovery, activity, companionship and everyday assistance."
        visual={<HomeVisual />}
        facts={['Rent, don’t buy', 'In development', 'Ontario first', 'Platform-dependent']}
        actions={
          <>
            <a href="#waitlist" className="btn">
              Join the Humoletics Home Waitlist
            </a>
            <a href="#capability" className="btn btn--ghost">
              What it can actually do
            </a>
          </>
        }
      />

      <section className="band band--dark band--tight">
        <div className="container">
          <Notice tag="Status">
            Humoletics Home is an emerging service, not a current one. There is nothing to rent
            today. Which functions are offered — and when — will depend on the capabilities and
            safety certification of individual robot platforms, and we will only offer what a
            specific platform has actually been shown to do.
          </Notice>
        </div>
      </section>

      {/* ===================== CAPABILITY GROUNDING ======================= */}
      <section className="band band--dark band--grid" id="capability">
        <div className="container">
          <SectionHeading
            eyebrow="Being straight with you"
            title="What a humanoid can actually do in a home."
            layout="split"
            lede="This section comes first because everything after it depends on you believing us. Humanoid robots in 2026 are genuinely capable and genuinely limited, and the two get blurred together constantly. Here is the line as we understand it."
          />

          <CapabilityTiers tiers={TIERS} />

          <div className="mt-xl">
            <Limits
              title="What a humanoid will not be doing in your home."
              lede="Not now, and not because we are being cautious in our wording. These are outside what current humanoid platforms can do safely, and we will not offer them until that changes and the appropriate professionals say so."
              items={LIMITS}
            />
          </div>

          <div className="mt-l">
            <Notice tag="Our position">
              A humanoid is an assistant and an activity partner. It is not a practitioner. Nothing
              in Humoletics Home replaces a physician, nurse, physiotherapist, personal support
              worker or family caregiver, and no function we offer would be presented as care.
            </Notice>
          </div>
        </div>
      </section>

      {/* ========================= RECOVERY AT HOME ======================= */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Use case 01"
            title="Recovery at home."
            layout="split"
            lede="Someone comes home after surgery with a plan from their healthcare professional — a set of exercises, a schedule, and instructions to keep moving. The hard part is rarely understanding the plan. It is doing it, alone, on the days it feels pointless."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Where a humanoid could help</h3>
              <ul className="check-list mt-m">
                <li>Demonstrating exercises <strong>that have been prescribed by the person&rsquo;s own healthcare professional</strong></li>
                <li>Counting repetitions through the set</li>
                <li>Encouraging completion of an established plan</li>
                <li>Tracking goals and progress across days</li>
                <li>Fetching and carrying suitable lightweight objects</li>
                <li>Reminders at the times that were agreed</li>
                <li>Encouraging safe everyday activity</li>
                <li>Connecting a call to family or a caregiver</li>
              </ul>
            </div>

            <div>
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>The distinction that matters</span>
                    <span>Important</span>
                  </div>
                  <div className="panel__body stack-m">
                    <div>
                      <p className="mono accent-human">The humanoid</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        An assistant and an activity partner. It demonstrates, counts, reminds,
                        fetches and encourages — following a plan somebody qualified has already
                        written.
                      </p>
                    </div>
                    <div>
                      <p className="mono accent-humanoid">The healthcare professional</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        Decides the plan, changes the plan, and judges progress. The robot has no
                        role in any of that and would never be presented as having one.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <div className="mt-m">
                <Notice tag="Not medical">
                  Humoletics does not prescribe exercise, assess recovery or provide any form of
                  treatment. A humanoid would only ever help carry out a plan that a qualified
                  professional has already set, and any function connected to clinical care sits in
                  the future tier above.
                </Notice>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= INDEPENDENT LIVING ======================= */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Use case 02"
            title="Independent living."
            layout="split"
            lede="Most people who move out of their own home do not move because of one big thing. They move because of an accumulation of small ones — the jar on the high shelf, the basket of laundry across the house, the day nobody rang."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Where a humanoid could help</h3>
              <ul className="check-list mt-m">
                <li>Retrieving everyday objects</li>
                <li>Carrying appropriate items around the home</li>
                <li>Reminders and daily routines</li>
                <li>Encouraging activity and movement</li>
                <li>Companionship and conversation</li>
                <li>Connecting communication with family</li>
                <li>Scheduled check-ins</li>
                <li>Basic household assistance where the platform supports it</li>
                <li>Alerting a designated contact when assistance is requested</li>
              </ul>
              <p className="form-note mt-m">
                Several of these sit in the emerging tier rather than the available one — object
                retrieval in a real, lived-in room is considerably harder than it looks.
              </p>
            </div>

            <div>
              <Reveal>
                <div className="cta-band" style={{ display: 'block' }}>
                  <h3 className="h3">Technology that supports independence — not replaces human relationships.</h3>
                  <p className="body-copy mt-s">
                    We want to be careful about this one. A robot that becomes a substitute for family
                    contact is a worse outcome than no robot at all. The functions we are most
                    interested in are the ones that create contact rather than absorb it: the check-in
                    that prompts a call, the alert that brings someone over, the reminder that gets
                    somebody out of the house.
                  </p>
                  <p className="body-copy mt-s">
                    Companionship and conversation matter, and we intend to offer them. They are not
                    a replacement for a person, and we will not market them as one.
                  </p>
                </div>
              </Reveal>
              <div className="mt-m">
                <Link to="/active-aging" className="link-arrow">
                  See our Active Aging research agenda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FITNESS COACH AT HOME ======================= */}
      <section className="band band--dark-alt">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <p className="eyebrow eyebrow--cyan">Use case 03</p>
              <h2 className="h1">Your Humoletics coach, at home.</h2>
              <p className="lede mt-m">
                A Humoletics member could take the experience home — the same coach, the same
                challenges, the same profile and the same record to beat.
              </p>
              <ul className="check-list check-list--cyan mt-m">
                <li>Demonstrate exercises at full scale</li>
                <li>Exercise alongside you rather than watching</li>
                <li>Count repetitions and hold the pace</li>
                <li>Set goals from your own history</li>
                <li>Remember previous performance</li>
                <li>Run Humoletics challenges at home</li>
                <li>Maintain personal records</li>
                <li>Synchronize results with your Humoletics profile</li>
              </ul>
              <div className="btn-row">
                <a href="#waitlist" className="btn">
                  Train With Your Humanoid
                </a>
                <Link to="/performance" className="btn btn--ghost">
                  Humoletics Performance
                </Link>
              </div>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="home-session">
                  <div className="home-session__cell">
                    <p className="home-session__label">Last session</p>
                    <p className="home-session__value">
                      20<span className="home-session__unit">SQUATS</span>
                    </p>
                  </div>
                  <div className="home-session__cell home-session__cell--today">
                    <p className="home-session__label">Today&rsquo;s challenge</p>
                    <p className="home-session__value">22</p>
                  </div>
                  <div className="home-session__cell home-session__cell--best">
                    <p className="home-session__label">Personal best</p>
                    <p className="home-session__value">24</p>
                  </div>
                </div>
                <p className="illustrative-note">
                  Example session data. Illustrative only — a fitness and recreation feature, not a
                  health service.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== RENTAL MODEL ========================== */}
      <section className="band band--light band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="The model"
            title="Don’t buy the robot. Hire it."
            layout="split"
            lede="A humanoid is a six-figure decision, the technology turns over fast, and almost nobody knows in advance whether one would genuinely help in their particular home. Renting answers all three problems at once."
          />

          <div className="plans">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 70}>
                <div className="plan">
                  <span className="plan__term">{plan.term}</span>
                  <span className="plan__name">{plan.name}</span>
                  <p className="plan__desc">{plan.desc}</p>
                  <ul className="plan__list">
                    {plan.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="plan__price">Pricing not yet set</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-l">
            <Notice tag="No pricing yet">
              We have not set rental pricing, and we would rather publish nothing than publish a
              number we would have to walk back. Pricing will depend on the platform, the term and
              what the robot is actually configured to do. Join the waitlist and we will tell you
              directly when there is something real to quote.
            </Notice>
          </div>
        </div>
      </section>

      {/* =========================== HOW IT WORKS ========================= */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, and an honest answer at step two."
            layout="split"
            lede="The second step is the one that matters most. Sometimes the answer will be that current technology cannot safely do what you have described — and we would rather tell you that than rent you a disappointment."
          />

          <Flow
            steps={[
              {
                title: 'Tell us what you need',
                body: 'An online assessment describing the assistance you are looking for and the home it would work in — rooms, floors, stairs, who else is there.',
              },
              {
                title: 'Find the right humanoid',
                body: 'We evaluate available platforms and determine whether current technology can safely support what you have asked for. If it cannot, we say so.',
              },
              {
                title: 'Setup & training',
                body: 'We configure the robot, establish the activities it is permitted to perform, train the household, and provide safety guidance in person.',
              },
              {
                title: 'Humoletics support',
                body: 'Remote technical support, maintenance, software updates, and replacement or service arrangements as appropriate through the term.',
              },
            ]}
          />
        </div>
      </section>

      {/* ========================= HUMOLETICS CARE ======================== */}
      <section className="band band--dark-alt" id="care">
        <div className="container">
          <SectionHeading
            eyebrow="Longer term"
            eyebrowTone="cyan"
            title="Humoletics Care."
            layout="split"
            lede="A future professional and organizational offering for the care sector — separate from Humoletics Home, held to a different standard, and further out."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Organizations we would want to work with</h3>
              <ul className="check-list check-list--cyan mt-m">
                <li>Retirement residences</li>
                <li>Assisted-living organizations</li>
                <li>Home-care providers</li>
                <li>Physiotherapy organizations</li>
                <li>Hospitals and recovery facilities</li>
                <li>Other appropriate care organizations</li>
              </ul>
              <div className="btn-row">
                <a href="#waitlist" className="btn">
                  Partner With Humoletics
                </a>
              </div>
            </div>

            <div>
              <Notice tag="Conditions">
                Healthcare-specific applications would be developed with appropriate healthcare
                professionals and would be subject to applicable safety, regulatory and clinical
                requirements. Humoletics Care is not operating, is not accepting clients, and would
                not proceed on our judgement alone.
              </Notice>
              <div className="mt-m">
                <Notice tag="Why separate">
                  A rental to a household and a deployment inside a regulated care setting are not
                  the same product with a different customer. The second carries obligations the
                  first does not, so we are keeping them apart deliberately rather than letting one
                  quietly become the other.
                </Notice>
              </div>
              <div className="mt-m">
                <Link to="/active-aging" className="link-arrow">
                  The research questions behind this
                </Link>
              </div>
              <div className="mt-s">
                <Link to="/innovation" className="link-arrow">
                  Innovation &amp; Partnerships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONNECTION TO THE CENTRE ==================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="The centre as the hub"
            title="Meet it before it moves in."
            layout="split"
            lede="Renting a humanoid sight-unseen is a strange thing to ask of anybody. The Humoletics Centre is what makes this reasonable — the rental fleet lives there, and so does the chance to meet it first."
          />

          <div className="mt-l">
            <Chain nodes={['Experience', 'Try', 'Rent', 'Home', 'Support']} />
          </div>

          <div className="grid grid--3 mt-xl">
            <Card index="01" title="Meet different humanoids">
              See the platforms in person, at full scale, moving — not in a video.
            </Card>
            <Card index="02" title="Experience their capabilities" delay={60}>
              Watch what they do well and, just as usefully, what they still struggle with.
            </Card>
            <Card index="03" title="Discuss your home" delay={120}>
              Your rooms, your floors, your routine, and who else lives there.
            </Card>
            <Card index="04" title="Try the actual tasks" delay={180}>
              Attempt the specific things you need, in a controlled demonstration environment,
              before any commitment.
            </Card>
            <Card index="05" title="Arrange a rental" delay={240}>
              When an appropriate platform is available and the tasks have been shown to work.
            </Card>
            <Card index="06" title="Come back" delay={300}>
              For service, upgrades, further training, or a different robot as needs change.
            </Card>
          </div>

          <div className="mt-xl">
            <Reveal>
              <p className="mono text-muted">The whole business model</p>
            </Reveal>
            <div className="mt-s">
              <Reveal className="model">
                {MODEL.map((m) =>
                  m.to.startsWith('#') ? (
                    <a className={`model__cell ${m.active ? 'model__cell--active' : ''}`} href={m.to} key={m.name}>
                      <span className="model__name">{m.name}</span>
                      <span className="model__desc">{m.desc}</span>
                      {m.tag && <span className="model__tag">{m.tag}</span>}
                    </a>
                  ) : (
                    <Link className={`model__cell ${m.active ? 'model__cell--active' : ''}`} to={m.to} key={m.name}>
                      <span className="model__name">{m.name}</span>
                      <span className="model__desc">{m.desc}</span>
                      {m.tag && <span className="model__tag">{m.tag}</span>}
                    </Link>
                  )
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WAITLIST =========================== */}
      <section className="band band--dark band--grid" id="waitlist">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Waitlist"
            title="Join the Humoletics Home waitlist."
            lede="Tell us what you would want a humanoid to help with. The ordinary detail is the useful part — it is what tells us which capabilities to chase first, and which platforms are worth evaluating."
          />
          <HomeWaitlist />
        </div>
      </section>

      <section className="band band--dark-alt band--tight">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Straight answers" title="Questions about Humoletics Home" />
          <Faq
            items={[
              {
                q: 'Can I rent a humanoid now?',
                a: 'No. Humoletics Home is in development and no rental is available. Joining the waitlist is not a booking and carries no commitment on either side.',
              },
              {
                q: 'What will it cost?',
                a: 'We have not set pricing and will not publish a number we might have to withdraw. It will depend on the platform, the term and what the robot is configured to do.',
              },
              {
                q: 'Could a humanoid look after my parent?',
                a: 'No — and we want to be direct about that. A humanoid cannot physically support a person, cannot prevent a fall, cannot manage medication and cannot handle an emergency on its own. It can fetch, remind, encourage, converse, connect a call and raise an alert when asked. Those are useful things, but they are not care, and anyone who needs supervision still needs a person.',
              },
              {
                q: 'Is it safe to have one in a house with children or pets?',
                a: 'Safety would be assessed for the specific home and platform as part of setup, and the permitted activities would be configured accordingly. Households with children, pets or anyone who needs supervision raise real questions that we would work through case by case rather than answer generically here.',
              },
              {
                q: 'What happens if the robot breaks?',
                a: 'Support, maintenance and replacement or service arrangements are part of what a Humanoid-as-a-Service term is meant to cover — that is much of the argument for renting rather than buying. Exact terms are not yet set.',
              },
              {
                q: 'Do you keep data from inside my home?',
                a: 'Any home deployment raises serious privacy questions — cameras, microphones and a record of a household routine. We have not finalised our data handling for Humoletics Home, and we would rather tell you that than describe a policy we have not written. It will be published before any rental operates.',
              },
            ]}
          />
        </div>
      </section>

      <section className="band band--dark band--tight">
        <div className="container">
          <CtaBand
            title="Interested commercially rather than personally?"
            body="Humoletics Robotics covers demonstrations, platform evaluation, sales, leasing and integration for organizations. Humoletics Labs tests whether a humanoid can do a specific job."
            actions={
              <>
                <Link to="/robotics" className="btn btn--ghost">
                  Commercial Robotics
                </Link>
                <Link to="/labs" className="btn btn--ghost">
                  Humoletics Labs
                </Link>
              </>
            }
          />
        </div>
      </section>

      <Finale
        title={
          <>
            More active. More
            <br />
            connected. More independent.
          </>
        }
        sub="Humanoids shouldn’t only make businesses more productive. They may eventually help people live more active, connected and independent lives — and that is the part we most want to get right."
        actions={
          <>
            <a href="#waitlist" className="btn">
              Join the Waitlist
            </a>
            <Link to="/active-aging" className="btn btn--ghost">
              Active Aging
            </Link>
          </>
        }
      />
    </>
  )
}
