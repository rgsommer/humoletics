import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import {
  PageHero,
  Finale,
  Notice,
  Flow,
  Chain,
  CtaBand,
  Pathway,
  StatusBoard,
  Principle,
  Questions,
} from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import { Card, FactCard, LocationCard } from '../components/Cards'
import Reveal from '../components/Reveal'

const PATHWAY = [
  { name: 'Demonstrate', desc: 'See humanoid platforms operating in person, locally, at full scale — not in a launch video.' },
  { name: 'Test', desc: 'Bring a real workflow and find out whether an available platform can perform it reliably.' },
  { name: 'Develop', desc: 'Build the Canadian software, interfaces and application layer that turn capability into a job.' },
  { name: 'Deploy', desc: 'Move a proven application into commercial use, with integration, training and support.' },
]

const GAPS = [
  'See the technology operating locally',
  'Compare platforms side by side',
  'Understand current limitations',
  'Test real workplace tasks',
  'Assess safety and integration requirements',
  'Estimate return on investment',
  'Train employees',
  'Evaluate leasing or deployment options',
]

const FEASIBILITY_QUESTIONS = [
  'Is the task technically achievable?',
  'Is the cycle time commercially useful?',
  'What robot platform is appropriate?',
  'What software or tooling is required?',
  'What safety controls are needed?',
  'Would fixed automation be better?',
  'What is the likely cost and ROI?',
  'Should the organization pilot, lease or purchase?',
]

const IP_AREAS = [
  'Human / humanoid interaction',
  'Adaptive robot handicapping',
  'Fitness and coaching applications',
  'User performance profiles',
  'Scoring and ranking',
  'Competition systems',
  'Inter-city challenges',
  'Robot application workflows',
  'Fleet management',
  'Humanoid-as-a-Service',
  'Commercial deployment tools',
]

const PARTNER_GROUPS = [
  {
    name: 'Robotics manufacturers',
    items: [
      'Demonstration units',
      'Canadian market development',
      'Dealer / distributor relationships',
      'Joint demonstrations',
      'Application testing',
      'Launch events',
    ],
  },
  {
    name: 'Government & innovation organizations',
    items: [
      'Commercialization support',
      'Technology-adoption programs',
      'Productivity initiatives',
      'Innovation infrastructure',
      'Skills development',
      'Canadian IP creation',
    ],
  },
  {
    name: 'Colleges & universities',
    items: [
      'Applied research',
      'Internships',
      'Robotics programming',
      'Capstone projects',
      'Technical training',
      'Human / robot interaction',
    ],
  },
  {
    name: 'Industry partners',
    items: [
      'Pilot projects',
      'Task feasibility studies',
      'Early deployments',
      'Application co-development',
    ],
  },
  {
    name: 'Municipalities & economic development',
    items: [
      'Site selection',
      'Innovation-district participation',
      'Tourism',
      'Workforce development',
      'Local economic development',
    ],
  },
]

const STATUS_ROWS = [
  { name: 'Brand & digital platform', label: 'Established', state: 'done', note: 'Identity, positioning and this website are in place.' },
  { name: 'Manufacturer discussions', label: 'In progress', state: 'progress', note: 'Exploratory. No agreement is in place and none is announced.' },
  { name: 'Robotics platform selection', label: 'In progress', state: 'progress', note: 'Evaluating leading humanoid platforms for Canadian deployment.' },
  { name: 'Facility planning', label: 'In development', state: 'dev', note: 'Site requirements and format being defined; no site secured.' },
  { name: 'Industry pilot partners', label: 'Seeking participants', state: 'seeking', note: 'Organizations with a repetitive task worth evaluating.' },
  { name: 'Academic & research partners', label: 'Seeking participants', state: 'seeking', note: 'Colleges, universities and researchers.' },
  { name: 'Funding partnerships', label: 'In development', state: 'dev', note: 'No funding has been approved or committed.' },
  { name: 'Public experience development', label: 'In progress', state: 'progress', note: 'Challenge formats, scoring and pop-up planning.' },
]

const SCOPE = [
  'Multiple humanoid and complementary robotic platforms',
  'Industry application test stations',
  'Human / humanoid challenge environments',
  'Software-development infrastructure',
  'Commercial demonstration space',
  'Public experience areas',
  'Training and education facilities',
  'Safety systems',
  'Technical staff',
  'Pilot programming',
]

const ORG_TYPES = [
  'Robotics manufacturer',
  'Government / innovation organization',
  'College / university',
  'Industry / prospective customer',
  'Municipality / economic development',
  'Investor / financing',
  'Healthcare / home-care organization',
  'Other',
]

const INTERESTS = [
  'Strategic partnership',
  'Industry pilot',
  'Robotics distribution',
  'Research collaboration',
  'Education',
  'Facility / site partnership',
  'Funding / program discussion',
  'Investment',
  'Other',
]

export default function Innovation() {
  useSeo({
    title: 'Humanoid Robotics Innovation & Partnerships | HUMOLETICS',
    description:
      'HUMOLETICS is developing a Southern Ontario humanoid robotics demonstration, application and commercialization centre for industry, education, embodied AI and public engagement.',
    path: '/innovation',
  })

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link to="/partners">Partners</Link>
            <span>/</span>
            Innovation
          </>
        }
        eyebrow="Ontario • Embodied AI • Humanoid Robotics • Commercialization"
        title="Building Canada’s humanoid robotics ecosystem"
        lede="HUMOLETICS is developing a Southern Ontario humanoid robotics demonstration, application and commercialization centre designed to help Canadian businesses, educators, researchers and the public understand, test and deploy emerging humanoid and embodied-AI technologies."
        actions={
          <>
            <a href="#partner" className="btn">
              Partner With HUMOLETICS
            </a>
            <Link to="/labs" className="btn btn--ghost">
              Pilot an Application
            </Link>
          </>
        }
      />

      {/* ========================= PATHWAY MOTIF ========================== */}
      <section className="band band--dark band--tight">
        <div className="container">
          <Reveal>
            <p className="mono text-muted">The core pathway</p>
          </Reveal>
          <div className="mt-s">
            <Pathway stages={PATHWAY} />
          </div>
        </div>
      </section>

      {/* ========================== THE OPPORTUNITY ======================= */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="The opportunity"
            title="Humanoid robotics is moving from demonstration to deployment."
            layout="split"
            lede="Canadian businesses increasingly encounter humanoid robotics through videos, conferences and overseas manufacturers. Very few have a practical way to move from watching it to assessing it."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">What most organizations still cannot easily do</h3>
              <ul className="check-list mt-m">
                {GAPS.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <Reveal>
                <div className="cta-band" style={{ display: 'block' }}>
                  <h3 className="h3">
                    HUMOLETICS is designed to reduce the gap between curiosity and commercial
                    adoption.
                  </h3>
                  <p className="body-copy mt-s">
                    That gap is where most Canadian humanoid robotics interest currently stops. An
                    operations manager watches a demonstration video, forms an impression, and has
                    nowhere to take the question next — no local platform to see, no way to try
                    their own task, and no independent assessment of whether the economics work.
                  </p>
                  <p className="body-copy mt-s">
                    We are not currently aware of another Canadian facility combining public
                    demonstration, industry feasibility testing, application development and
                    commercial deployment in one place. That is the gap this is designed to address.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE INNOVATION CENTRE ====================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="The Humoletics Innovation Centre"
            title="Four functions, one building."
            layout="split"
            lede="Each function is useful on its own. Together they form a route an organization can actually walk — from first sight of a humanoid to a working deployment."
          />

          <div className="grid grid--2">
            <Card index="01" title="Demonstrate">
              Businesses, institutions and the public experience humanoid robots operating in
              person: platform comparison, public interaction, education, manufacturer showcases and
              commercial demonstrations.
            </Card>
            <Card index="02" title="Test" delay={70}>
              Organizations bring real-world use cases into the facility — feasibility testing, task
              simulation, cycle-time evaluation, payload and manipulation testing, workflow analysis
              and safety considerations.
            </Card>
            <Card index="03" title="Develop" delay={140}>
              HUMOLETICS builds software, interaction systems and robot applications: control
              interfaces, adaptive human/robot challenges, computer vision, scoring systems,
              coaching applications, fleet-management concepts, custom workflows and embodied-AI
              experimentation.
            </Card>
            <Card index="04" title="Deploy" delay={210}>
              Successful applications progress toward real commercial use — robot sales, leasing,
              Robot-as-a-Service, integration, user training, support and maintenance.
            </Card>
          </div>

          <div className="mt-xl">
            <Reveal>
              <p className="mono text-muted">The deployment pathway in full</p>
            </Reveal>
            <div className="mt-s">
              <Chain nodes={['Demonstration', 'Feasibility', 'Pilot', 'Sale / lease', 'Integration', 'Training', 'Support']} />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== INDUSTRY APPLICATION LAB ================== */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Industry application lab"
            title="Bring us the task, not just the specification."
            layout="split"
            lede="Specification sheets describe what a robot can do in principle. They do not tell you whether it can do your job, on your parts, at your cycle time. Organizations could bring representative parts, materials or workflows to HUMOLETICS and work with the team to determine whether humanoid robotics is appropriate at all."
          />

          <div className="split split--top">
            <div>
              <Reveal>
                <div className="limits" style={{ borderColor: 'rgba(90,210,230,0.4)', background: 'rgba(90,210,230,0.05)' }}>
                  <h3 className="limits__title">Could a humanoid perform this task?</h3>
                  <p className="limits__lede" style={{ marginBottom: 0 }}>
                    That is the only question that matters, and it is rarely answerable from a
                    catalogue. These are the questions a HUMOLETICS feasibility engagement is built
                    to answer — including the ones whose honest answer is no.
                  </p>
                </div>
              </Reveal>

              <div className="mt-m">
                <p className="mono text-muted">Potential industries</p>
                <Reveal className="mt-s">
                  <ul className="tag-list">
                    {[
                      'Manufacturing',
                      'Warehousing',
                      'Logistics',
                      'Light material handling',
                      'Hospitality',
                      'Education',
                      'Recreation',
                      'Research',
                      'Public-sector operations',
                    ].map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <div>
              <Questions items={FEASIBILITY_QUESTIONS} />
              <div className="btn-row">
                <Link to="/labs" className="btn">
                  Discuss an Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CANADIAN IP & SOFTWARE =================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Canadian IP & software"
            title="Building Canadian value on top of global robotics hardware."
            layout="split"
            lede="HUMOLETICS is not intended to rely solely on importing and reselling robots. Hardware margins are thin, hardware generations turn over quickly, and reselling somebody else’s platform builds very little that stays here."
          />

          <div className="split split--top">
            <div>
              <Reveal>
                <div className="cta-band" style={{ display: 'block' }}>
                  <h3 className="h3">
                    The robot may be manufactured elsewhere. The applications, software, customer
                    relationships and commercialization expertise can be built here in Canada.
                  </h3>
                </div>
              </Reveal>
              <p className="body-copy mt-m">
                A humanoid platform arrives able to walk, balance and manipulate. It does not arrive
                knowing any Canadian organization’s job. Everything between those two states is
                software, engineering and know-how — and it is the part with durable value.
              </p>
              <p className="body-copy">
                Keeping the application layer platform-neutral matters commercially as well as
                technically: work built against one manufacturer’s hardware is stranded when that
                hardware is superseded.
              </p>
            </div>

            <div>
              <h3 className="h3">Where we intend to develop Canadian-owned IP</h3>
              <ul className="check-list check-list--cyan mt-m">
                {IP_AREAS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link to="/phase-one" className="btn btn--ghost">
                  See the Phase I project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HUMAN + HUMANOID RESEARCH ENVIRONMENT ========== */}
      <section className="band band--light band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Development environment"
            title="A living development environment for human/humanoid interaction."
            layout="split"
            lede="The public HUMOLETICS experience is not only an attraction. Supervised, repeatable, high-volume contact between people and machines is difficult to arrange deliberately — and it is exactly what a public venue produces every day it operates."
          />

          <div className="grid grid--4">
            <FactCard value="Challenges" label="Human vs. Humanoid" note="Repeatable, measured, adaptive-difficulty events." />
            <FactCard value="Coaching" label="Fitness & movement" note="Demonstration, pacing and repetition counting." delay={70} />
            <FactCard value="Reaction" label="Timing & response" note="Reaction, movement and balance activities." delay={140} />
            <FactCard value="Interaction" label="Supervised public contact" note="Varied users, varied conditions, controlled limits." delay={210} />
          </div>

          <div className="mt-l">
            <Notice tag="Careful wording">
              This is a practical development environment, not a formal research programme. We have
              no academic research partners at this stage and make no claim to research findings.
              Future collaborations could involve universities, colleges, researchers and robotics
              developers — and we would say so once they exist.
            </Notice>
          </div>
        </div>
      </section>

      {/* ================ EDUCATION & WORKFORCE DEVELOPMENT ============== */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Education & workforce"
            title="Preparing people for embodied AI."
            layout="split"
            lede="The workforce implications of humanoid robotics will extend far beyond robotics engineers. Canadian workers, technicians, programmers, educators and managers will need opportunities to understand the technology — ideally before it arrives on their floor."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Who it is for</h3>
              <ul className="check-list mt-m">
                <li>Secondary schools</li>
                <li>Colleges and universities</li>
                <li>STEM programs and robotics students</li>
                <li>Engineering programs</li>
                <li>Software developers and technicians</li>
                <li>Employers preparing existing staff</li>
              </ul>
            </div>
            <div>
              <h3 className="h3">Potential programming</h3>
              <ul className="check-list check-list--cyan mt-m">
                <li>School visits and robotics demonstrations</li>
                <li>Student challenges</li>
                <li>Programming workshops</li>
                <li>Technical training</li>
                <li>Internships and capstone projects</li>
                <li>Applied research partnerships</li>
              </ul>
              <div className="btn-row">
                <Link to="/education" className="btn btn--ghost">
                  Education &amp; Groups
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= PUBLIC ENGAGEMENT ====================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Public engagement"
            title="A technology centre people actually want to visit."
            layout="split"
            lede="Most technology commercialization facilities are closed to the public and funded entirely by programs and contracts. Attaching one to an experience people will queue for is an unusual model, and it is deliberate."
          />

          <div className="split split--top">
            <div>
              <ul className="check-list mt-0">
                <li>Competing against humanoids</li>
                <li>Exercising with humanoid coaches</li>
                <li>Interacting with robots</li>
                <li>Seeing new platforms as they arrive</li>
                <li>STEM education and demonstrations</li>
                <li>Family experiences and school programs</li>
                <li>Corporate events</li>
              </ul>
            </div>
            <div>
              <Reveal>
                <div className="cta-band" style={{ display: 'block' }}>
                  <h3 className="h3">
                    The public experience is not separate from commercialization. It helps create
                    awareness, adoption and demand.
                  </h3>
                  <p className="body-copy mt-s">
                    Public admission and memberships can create an independent revenue stream, which
                    reduces reliance on program funding. Just as importantly, the visitor flow
                    continuously exposes Canadian businesses and the public to emerging robotics —
                    the plant manager who visits on a Saturday is the same person who commissions a
                    feasibility study on Monday.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= HUMOLETICS HOME ======================== */}
      <section className="band band--dark">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Humoletics Home</p>
              <h2 className="h2">Humanoid-as-a-Service.</h2>
              <p className="body-copy mt-m">
                HUMOLETICS is also exploring flexible humanoid rental models for appropriate home
                and commercial applications — letting an organization or household access capability
                without a capital purchase.
              </p>
              <ul className="check-list mt-m">
                <li>Companionship and conversation</li>
                <li>Exercise coaching</li>
                <li>Activity encouragement</li>
                <li>Reminders and routines</li>
                <li>Lightweight assistance</li>
                <li>Communication with family</li>
                <li>Independent-living support</li>
              </ul>
              <div className="btn-row">
                <Link to="/home" className="btn">
                  Explore Humoletics Home
                </Link>
              </div>
            </div>
            <div className="split__media">
              <Notice tag="Non-medical">
                The applications listed here are non-medical. Medical and healthcare applications
                would require appropriate professional, clinical, safety and regulatory
                partnerships, and are treated as a separate future offering rather than an extension
                of household rental.
              </Notice>
              <div className="mt-m">
                <Notice tag="Capability-bound">
                  Which functions can actually be offered depends on what individual robot platforms
                  have been shown to do safely. Humoletics Home publishes that boundary explicitly
                  rather than describing an idealised robot.
                </Notice>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PARTNERSHIP OPPORTUNITIES =================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Partnership opportunities"
            title="We are building this with partners."
            layout="split"
            lede="This is not a project that gets built alone, and we would rather bring partners in while the shape is still open to their influence."
          />

          <div className="grid grid--3">
            {PARTNER_GROUPS.map((g, i) => (
              <Reveal key={g.name} delay={i * 60}>
                <div className="card">
                  <h3 className="card__title">{g.name}</h3>
                  <ul className="check-list mt-s">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="btn-row btn-row--center">
            <a href="#partner" className="btn">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* ========================= PHASE 1 — ONTARIO ====================== */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Project status"
            title="Phase 1: Southern Ontario"
            layout="split"
            lede="Where the project genuinely stands today. Two lines say “seeking participants” because those are the places a partner can change the outcome right now."
          />

          <StatusBoard rows={STATUS_ROWS} />

          <div className="mt-xl">
            <div className="split split--top">
              <div>
                <h3 className="h2">What Phase 1 could include</h3>
                <p className="body-copy mt-m">
                  An illustrative build-out rather than a funding request. It describes the shape of
                  a working centre, not a costed proposal.
                </p>
                <div className="btn-row">
                  <Link to="/phase-one" className="btn btn--ghost">
                    The detailed Phase I project
                  </Link>
                </div>
              </div>
              <div>
                <ul className="check-list check-list--cyan">
                  {SCOPE.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="form-note mt-m">
                  The final scale and timing will depend on strategic partnerships, facility
                  selection and financing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHY ONTARIO ======================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Why Ontario"
            title="A strong launch market for humanoid robotics."
            layout="split"
            lede="The case for Southern Ontario is practical rather than patriotic: the customers, the talent pipeline and the markets are within reach of the same building."
          />

          <div className="grid grid--3">
            <Card index="01" title="Manufacturing base">
              A substantial manufacturing sector, including automotive and advanced manufacturing —
              the operations most likely to have a repetitive task worth evaluating.
            </Card>
            <Card index="02" title="Warehousing & logistics" delay={60}>
              Significant warehousing and logistics activity, where light material handling is a
              recurring and well-understood problem.
            </Card>
            <Card index="03" title="Population density" delay={120}>
              A large population within reach of a single site, which matters for a venue that
              depends partly on public admissions.
            </Card>
            <Card index="04" title="Universities & colleges" delay={180}>
              A dense concentration of post-secondary institutions for applied research, capstone
              projects, internships and technical talent.
            </Card>
            <Card index="05" title="AI & technology ecosystem" delay={240}>
              An established AI and technology community to draw software, perception and
              engineering capability from.
            </Card>
            <Card index="06" title="Market proximity" delay={300}>
              Proximity to major North American markets, which matters for any application or
              platform that eventually travels.
            </Card>
          </div>
        </div>
      </section>

      {/* ======================== MULTI-CITY POTENTIAL =================== */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Potential future network"
            title="Built to scale beyond one facility."
            layout="split"
            lede="The first Ontario centre is intended to test a repeatable model. Software, challenge formats, scoring, safety protocols and application methodology are built once; only the building has to be rebuilt."
          />

          <div className="grid grid--4">
            <LocationCard
              city="Ontario"
              status="Phase 1 — launch market"
              launch
              note="Where the model is being developed and tested."
            />
            <LocationCard city="Toronto" status="Potential future network" delay={70} />
            <LocationCard city="Montréal" status="Potential future network" delay={140} />
            <LocationCard city="Vancouver" status="Potential future network" delay={210} />
          </div>

          <div className="split split--top mt-xl">
            <div>
              <h3 className="h3">What a network could share</h3>
              <ul className="check-list mt-m">
                <li>Standardized Humoletics challenges</li>
                <li>Shared user profiles</li>
                <li>Common scoring systems</li>
                <li>Inter-city leaderboards</li>
                <li>Robot demonstrations</li>
                <li>Commercial integration services</li>
                <li>Humanoid-as-a-Service fleets</li>
                <li>Education programs</li>
              </ul>
            </div>
            <div>
              <Notice tag="To be clear">
                No location beyond the Ontario launch market has been committed, announced or agreed.
                The cities above illustrate a potential future network and nothing more.
              </Notice>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= PROJECT PRINCIPLE ====================== */}
      <section className="band band--light band--grid">
        <div className="container">
          <Principle attrib="Project principle">
            HUMOLETICS is not proposing a museum of the future. We are building a place to{' '}
            <em>test, develop and commercialize</em> it.
          </Principle>
        </div>
      </section>

      {/* ============================== ENQUIRY ========================== */}
      <section className="band band--dark band--grid" id="partner">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Start a conversation"
            title="Help build the next robotics industry."
            lede="We are currently seeking conversations with robotics manufacturers, government innovation organizations, academic institutions, municipalities, industry pilot partners and organizations interested in the commercialization of humanoid robotics in Canada."
          />
          <InquiryForm
            id="innovation"
            title={null}
            interestOptions={INTERESTS}
            interestLabel="Primary interest"
            orgTypeOptions={ORG_TYPES}
            orgTypeLabel="Organization type"
            messageLabel="Tell us what you would like to explore with HUMOLETICS"
            messagePlaceholder="The task, the programme, the collaboration or the question you would want to start with."
            submitLabel="Start a Conversation"
            subjectPrefix="HUMOLETICS innovation & partnerships"
          />
        </div>
      </section>

      <section className="band band--dark-alt band--tight">
        <div className="container">
          <CtaBand
            title="Prefer to start with a specific task?"
            body="Humoletics Labs runs the feasibility side: define the job, recreate it, evaluate platforms, develop the application and test it."
            actions={
              <>
                <Link to="/labs" className="btn btn--ghost">
                  Pilot an Application
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Contact Us
                </Link>
              </>
            }
          />
        </div>
      </section>

      <Finale
        title="Help build the next robotics industry."
        sub="Ambitious, structured, commercially grounded — and early enough that a partner still shapes what it becomes."
        actions={
          <>
            <a href="#partner" className="btn">
              Partner With HUMOLETICS
            </a>
            <Link to="/labs" className="btn btn--ghost">
              Pilot an Application
            </Link>
          </>
        }
      />
    </>
  )
}
