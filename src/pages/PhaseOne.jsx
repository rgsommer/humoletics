import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, VFlow, Layers, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import BudgetChart from '../components/BudgetChart'
import InquiryForm from '../components/InquiryForm'
import { Card } from '../components/Cards'
import Reveal from '../components/Reveal'

const WORKSTREAMS = [
  {
    num: '01',
    title: 'Robotics platform',
    body: 'Acquire and evaluate 2–3 commercially available humanoid platforms under a common, documented assessment framework — payload, reach, runtime, manipulation, navigation, software maturity, safety envelope and support.',
  },
  {
    num: '02',
    title: 'HUMOLETICS software',
    body: 'Build the first version of the human–humanoid interaction and performance platform: participant profiles, adaptive difficulty, robot performance limits, scoring, personal records, leaderboards and event management.',
  },
  {
    num: '03',
    title: 'Computer vision & measurement',
    body: 'Develop and test methods for measuring movement, timing, repetitions, reaction, position and selected performance metrics — the layer that turns an activity into evidence.',
  },
  {
    num: '04',
    title: 'Safety & testing',
    body: 'Develop controlled interaction environments, operating procedures, physical separation where required, emergency controls and activity-specific safety protocols, ahead of any public operation.',
  },
  {
    num: '05',
    title: 'Industrial application lab',
    body: 'Work with Canadian SMEs to recreate and test selected humanoid applications on their real parts and real conditions, producing feasibility results they can act on.',
  },
  {
    num: '06',
    title: 'Public pilot',
    body: 'Operate controlled pop-up and public demonstrations to evaluate public interest, willingness to pay, repeat participation, educational demand, user engagement and operational requirements.',
  },
]

const DELIVERABLES = [
  { title: '2–3 humanoid platforms evaluated', note: 'Documented, comparable assessments rather than vendor claims.' },
  { title: 'HUMOLETICS software MVP', note: 'First working version of the interaction and performance platform.' },
  { title: '5+ standardized Human vs. Humanoid challenges', note: 'Defined, repeatable events with scoring and adaptive difficulty.' },
  { title: 'Active Aging prototype', note: 'A working movement-coaching prototype for community settings.' },
  { title: 'Computer-vision measurement prototype', note: 'Selected movements measured reliably enough to score.' },
  { title: 'Safety protocols', note: 'Activity-specific procedures validated before public operation.' },
  { title: '3–5 Canadian SME application pilots', note: 'Real tasks from real operations, tested and reported.' },
  { title: 'Public pop-up pilot', note: 'Operated in Ontario, with engagement and economics measured.' },
  { title: 'Commercialization plan', note: 'Evidence-based route from pilot to sustainable operation.' },
  { title: 'Phase II feasibility assessment', note: 'Whether a permanent centre is justified — including if the answer is no.' },
]

const STREAMS = [
  'Public admissions',
  'Memberships',
  'Corporate events',
  'School & STEM programs',
  'Commercial demonstrations',
  'Feasibility studies',
  'Robot sales',
  'Robot leasing',
  'Integration services',
  'Software licensing',
  'Support contracts',
  'Location licensing',
  'Travelling & pop-up experiences',
  'Standardized competitions',
]

const FUNDING = [
  {
    name: 'Government innovation programs',
    note: 'Support for applied R&D, technology adoption, productivity and commercialization — subject to program eligibility and application.',
  },
  {
    name: 'Corporate contribution',
    note: 'Direct contribution from 10323594 Canada Corp., including founder time and in-kind development.',
  },
  {
    name: 'Manufacturer support',
    note: 'Platform access, preferential terms or demonstration units from humanoid manufacturers seeking Canadian market presence.',
  },
  {
    name: 'Academic & research partnerships',
    note: 'Collaborative research arrangements with colleges and universities, potentially including jointly held grant applications.',
  },
  {
    name: 'Sponsors & strategic partners',
    note: 'Organizations seeking association with Canadian robotics, STEM outcomes and public technology adoption.',
  },
]

export default function PhaseOne() {
  useSeo({
    title: 'Phase I | HUMOLETICS — $500,000 Human–Humanoid Interaction & Commercialization Project',
    description:
      'A proposed $500,000, 12–18 month Phase I project in Ontario, Canada: evaluating humanoid robot platforms, developing Canadian human–humanoid interaction software, testing industrial applications with SMEs, and piloting public demonstrations. Funding and partnerships being explored.',
    path: '/phase-one',
  })

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link to="/partners">Partners</Link>
            <span>/</span>
            Phase I
          </>
        }
        eyebrow="Proposed innovation project"
        title="HUMOLETICS Phase I"
        lede="Human–Humanoid Interaction & Commercialization Project — a proposed 12–18 month Ontario initiative to evaluate emerging humanoid platforms, develop Canadian application software, and test whether humanoid robotics can do useful work in Canadian operations."
        facts={['$500,000 proposed', 'Ontario, Canada', '12–18 months', '10323594 Canada Corp.']}
        actions={
          <>
            <a href="#partnership" className="btn">
              Discuss a Partnership
            </a>
            <a href="#budget" className="btn btn--ghost">
              See the budget
            </a>
          </>
        }
      />

      {/* ========================== PROJECT CARD =========================== */}
      <section className="band band--dark band--grid band--tight">
        <div className="container">
          <div className="split split--top">
            <Reveal>
              <div className="project-card">
                <div className="project-card__bar">
                  <span>Proposed project</span>
                  <span>Phase I</span>
                </div>
                <div className="project-card__body">
                  <p className="project-card__amount">$500,000</p>
                  <p className="project-card__caption">Proposed Phase I project value</p>

                  <dl className="project-card__facts">
                    <div className="project-card__fact">
                      <dt>Location</dt>
                      <dd>Ontario, Canada</dd>
                    </div>
                    <div className="project-card__fact">
                      <dt>Duration</dt>
                      <dd>12–18 months</dd>
                    </div>
                    <div className="project-card__fact">
                      <dt>Led by</dt>
                      <dd>10323594 Canada Corp.</dd>
                    </div>
                    <div className="project-card__fact">
                      <dt>Workstreams</dt>
                      <dd>Six, run in parallel</dd>
                    </div>
                  </dl>
                </div>
                <p className="project-card__status">
                  <span className="notice__tag">Status</span>
                  <span>
                    Funding and strategic partnerships being explored. No funding has been
                    approved or committed, and no partnership has been confirmed.
                  </span>
                </p>
              </div>
            </Reveal>

            <div>
              <p className="eyebrow">Executive summary</p>
              <h2 className="h2">A working platform, not a study.</h2>
              <p className="body-copy mt-m">
                HUMOLETICS is a proposed Ontario-based humanoid robotics demonstration,
                application-development and human–robot interaction initiative. Phase I
                would establish a working platform for evaluating emerging humanoid robots
                while developing Canadian software, applications and expertise around safe
                and meaningful human–humanoid interaction.
              </p>
              <p className="body-copy">
                The project would investigate three interconnected commercialization
                opportunities, and would culminate in a functioning demonstration platform
                capable of supporting commercial pilots, public demonstrations and further
                Canadian technology development.
              </p>
              <div className="btn-row">
                <a href="#workstreams" className="link-arrow">
                  The six workstreams
                </a>
              </div>
            </div>
          </div>

          <div className="mt-xl">
            <Layers
              items={[
                {
                  num: 'Opportunity 01',
                  name: 'Industrial humanoid adoption',
                  desc: 'Help Canadian SMEs evaluate whether emerging humanoid robots can perform practical tasks before committing to deployment — with evidence from their own parts and processes.',
                },
                {
                  num: 'Opportunity 02',
                  name: 'Human–humanoid interaction',
                  desc: 'Develop software and standardized experiences allowing people to safely interact, train and compete with humanoids — the layer that makes a capable machine usable by the public.',
                },
                {
                  num: 'Opportunity 03',
                  name: 'Human performance & active aging',
                  desc: 'Investigate humanoid-assisted fitness, movement coaching and performance tracking and, with appropriate research partners, future rehabilitation applications.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* =========================== THE OPPORTUNITY ======================= */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="The opportunity"
            title="Humanoid robotics is moving from research to deployment. Canada needs somewhere to test what comes next."
            layout="split"
            lede="Canadian businesses face a genuinely difficult problem. The technology is advancing faster than the ability of any individual SME to assess it — and the cost of assessing it wrongly is measured in six figures."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">What an SME cannot easily determine</h3>
              <ul className="check-list mt-m">
                <li>Which platform is appropriate for their operation</li>
                <li>What the robot can actually do, as opposed to what the video shows</li>
                <li>Whether a particular job is technically feasible at all</li>
                <li>How much integration work is really required</li>
                <li>What safety systems are necessary</li>
                <li>Whether the economics make sense at their volumes</li>
              </ul>
              <p className="body-copy mt-m">
                Every one of those questions is answerable — but only by someone who has
                the platforms, the test environment and the engineering time to try. Today
                in Canada, there is no obvious place to send that question.
              </p>
            </div>

            <div>
              <Reveal>
                <p className="mono text-muted">The gap HUMOLETICS would fill</p>
              </Reveal>
              <div className="mt-m">
                <VFlow
                  nodes={[
                    { label: 'Robot manufacturer', sub: 'Capability, built elsewhere' },
                    { label: 'HUMOLETICS', sub: 'Evaluation · application · integration', hero: true },
                    { label: 'Application development', sub: 'Canadian software & engineering' },
                    { label: 'Canadian business', sub: 'Evidence before capital' },
                    { label: 'Deployment', sub: 'With training and support' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CANADIAN VALUE CREATION =================== */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Canadian value creation"
            title="Imported hardware. Canadian intelligence, applications and commercialization."
            layout="split"
            lede="We will be transparent about this, because any credible assessment will reach it anyway: the initial humanoid platforms are likely to be manufactured internationally. That is not where the Canadian opportunity lies."
          />

          <div className="split split--top">
            <div>
              <p className="body-copy">
                A humanoid platform arrives able to walk, balance and manipulate. It does
                not arrive knowing any Canadian company&rsquo;s job. Everything between
                those two states is software, engineering and know-how — and all of it can
                be built here.
              </p>
              <p className="body-copy">
                The project would remain <strong>robot-platform neutral</strong> by design,
                so Canadian-developed applications can potentially work across multiple
                humanoid manufacturers rather than being stranded when one platform is
                superseded.
              </p>
              <p className="body-copy">
                That neutrality is a commercial decision as much as a technical one. Hardware
                generations turn over quickly; an application layer that outlives them is a
                durable asset.
              </p>
            </div>

            <div>
              <h3 className="h3">Where the Canadian value sits</h3>
              <ul className="check-list check-list--cyan mt-m">
                <li>Human–humanoid interaction software</li>
                <li>Adaptive challenge algorithms</li>
                <li>Computer-vision measurement</li>
                <li>Performance scoring systems</li>
                <li>Safety and control layers</li>
                <li>Application-specific integrations</li>
                <li>Industrial workflows</li>
                <li>User interfaces</li>
                <li>Data systems</li>
                <li>Training programs</li>
                <li>Technical integration expertise</li>
                <li>Canadian intellectual property</li>
                <li>Commercialization expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ECONOMIC RESILIENCE ========================= */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Economic context"
            title="Helping Canadian businesses adapt."
            layout="split"
            lede="Canadian manufacturers are under sustained pressure to improve productivity, automate, diversify, reduce production costs, adopt advanced technologies, develop new products and markets, and increase resilience."
          />

          <div className="split split--top">
            <div>
              <p className="body-copy">
                Flexible automation is one of the available responses — but the entry cost
                is the barrier. Evaluating a humanoid platform properly means buying one,
                integrating it, and discovering only afterwards whether the job was
                suitable. For most SMEs that is not a reasonable risk to take.
              </p>
              <p className="body-copy">
                HUMOLETICS would provide an environment where Canadian SMEs could explore a
                new generation of flexible automation without initially purchasing and
                integrating expensive equipment themselves — and could walk away with a
                documented answer either way.
              </p>
              <div className="mt-l">
                <Reveal>
                  <div className="chain">
                    <span className="chain__item">
                      <span className="chain__node">Bring us the task</span>
                      <span className="chain__arrow" aria-hidden="true">→</span>
                    </span>
                    <span className="chain__item">
                      <span className="chain__node">We test the application</span>
                      <span className="chain__arrow" aria-hidden="true">→</span>
                    </span>
                    <span className="chain__item">
                      <span className="chain__node chain__node--last">You evaluate the result</span>
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>

            <div>
              <Notice tag="To be clear">
                HUMOLETICS is not itself a tariff-impacted business, and we do not present
                it as one. The point is narrower and, we think, more defensible: the
                Canadian manufacturers we would serve are under real pressure to raise
                productivity and resilience, and shared access to evaluation capability
                lowers the cost of them exploring one of the available answers.
              </Notice>
              <div className="mt-m">
                <Notice tag="Also true">
                  Flexible automation is not the right answer for every operation. A
                  feasibility result that says &ldquo;no, and here is why&rdquo; is a
                  legitimate and valuable Phase I output — and considerably cheaper for the
                  business than discovering it after purchase.
                </Notice>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== WORKSTREAMS =========================== */}
      <section className="band band--light band--grid" id="workstreams">
        <div className="container">
          <SectionHeading
            eyebrow="Phase I workstreams"
            title="Six workstreams, run in parallel."
            layout="split"
            lede="Each workstream produces something usable on its own. Together they produce a working platform rather than a report about one."
          />

          <div className="grid grid--3">
            {WORKSTREAMS.map((w, i) => (
              <Card key={w.num} index={`${w.num} —`} title={w.title} delay={i * 60}>
                {w.body}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== BUDGET ============================= */}
      <section className="band band--white band--light" id="budget">
        <div className="container">
          <SectionHeading
            eyebrow="Proposed budget"
            title="Where $500,000 would go."
            layout="split"
            lede="A preliminary allocation, presented in full. Select any line item for detail, or filter by spending group. The table view carries every figure."
          />

          <BudgetChart />
        </div>
      </section>

      {/* =========================== FUNDING MODEL ========================= */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Funding model"
            title="A blended structure, not a single cheque."
            layout="split"
            lede="We are not proposing that government fund the whole of Phase I. A blended structure spreads risk, brings in partners with a genuine stake in the outcome, and produces a more durable project than any single source would."
          />

          <Reveal>
            <div className="funding">
              {FUNDING.map((f) => (
                <div className="funding__row" key={f.name}>
                  <p className="funding__name">{f.name}</p>
                  <p className="funding__note">{f.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-l">
            <Notice tag="Important">
              Final funding structure will depend on program eligibility and partner
              participation. Canadian innovation funding ecosystems potentially relevant to
              a project of this type include NRC IRAP, FedDev Ontario, the Ontario Centre
              of Innovation and academic research partnerships. No agency has endorsed,
              reviewed, approved or committed funding to HUMOLETICS, and naming these
              programs here indicates only where we intend to make enquiries.
            </Notice>
          </div>
        </div>
      </section>

      {/* =========================== DELIVERABLES ========================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Phase I deliverables"
            title="What would exist at the end."
            layout="split"
            lede="These are targets, not promises. Some will move as the work reveals what is actually achievable — and we would rather revise a target in public than quietly drop it."
          />

          <Reveal>
            <div className="deliverables">
              {DELIVERABLES.map((d, i) => (
                <div className="deliverable" key={d.title}>
                  <span className="deliverable__mark" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="deliverable__text">
                    {d.title}
                    <small>{d.note}</small>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================== COMMERCIALIZATION MODEL ==================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Commercialization model"
            title="Diversification is the design, not an accident."
            layout="split"
            lede="A demonstration centre funded only by admissions is fragile. A commercial robotics business with no public presence has to buy every lead it gets. Running both together is the point."
          />

          <div className="split split--top">
            <div>
              <p className="body-copy">
                The public experience helps finance technology demonstration while
                simultaneously generating exposure and commercial leads. The plant manager
                who brings their family on a Saturday is the same person who decides
                whether to commission a feasibility study on Monday.
              </p>
              <p className="body-copy">
                Meanwhile the commercial work keeps the public experience technically
                credible — the demonstrations show real applications rather than staged
                ones, because the applications are real.
              </p>
              <p className="body-copy">
                Phase I would test which of these streams actually work, at what price, and
                in what mix.
              </p>
            </div>

            <div>
              <p className="mono text-muted">Potential revenue streams</p>
              <Reveal className="mt-s">
                <ul className="streams">
                  {STREAMS.map((s) => (
                    <li className="stream" key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <p className="illustrative-note">
                Potential streams under evaluation. None is currently operating, and no
                revenue figures are claimed or implied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ SCALABILITY ========================== */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Scalability"
            title="Build once. Deploy many times."
            layout="split"
            lede="The objective is not one attraction in one city. Phase I should determine whether HUMOLETICS can become a repeatable platform — and it should be honest if the answer is that it cannot."
          />

          <div className="split split--top">
            <div>
              <p className="body-copy">
                Software, competition formats, safety protocols, performance profiles and
                the application-development methodology are all things that could be built
                once and reused across locations. The physical venue is the part that has
                to be rebuilt each time; almost everything else is transferable.
              </p>
              <p className="body-copy">
                That is what makes this a technology project rather than a property one,
                and it is the reason Phase I invests the majority of the budget in software,
                measurement and engineering rather than in hardware and space.
              </p>
              <div className="btn-row">
                <Link to="/partners" className="btn btn--ghost">
                  Partnership categories
                </Link>
              </div>
            </div>

            <div>
              <VFlow
                nodes={[
                  { label: 'Ontario — Phase I', sub: 'Proving ground', hero: true },
                  { label: 'HUMOLETICS Toronto', sub: 'Potential future' },
                  { label: 'Montréal · Vancouver', sub: 'Potential future' },
                  { label: 'International markets', sub: 'Long-term ambition' },
                ]}
              />
              <p className="illustrative-note">
                Illustrative sequence. No location beyond the Ontario launch market is
                planned, committed or under agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== PARTNERS ========================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Partners we are seeking"
            title="Six kinds of partner, all needed."
            layout="center"
          />

          <div className="grid grid--3">
            <Card index="01" title="Robotics partners" delay={0}>
              Humanoid manufacturers interested in Canadian demonstrations and
              commercialization — exposure, evaluation feedback and a route to market.
            </Card>
            <Card index="02" title="Industrial pilot partners" delay={60}>
              Canadian businesses with repetitive tasks they would like evaluated, willing
              to share a real process and real parts.
            </Card>
            <Card index="03" title="Research partners" delay={120}>
              Colleges, universities and researchers in physiotherapy, kinesiology, AI,
              robotics and gerontology.
            </Card>
            <Card index="04" title="Venue partners" delay={180}>
              Organizations with suitable temporary or permanent demonstration space,
              including pop-up hosts for the first Ontario activations.
            </Card>
            <Card index="05" title="Government & innovation partners" delay={240}>
              Organizations supporting Canadian AI, robotics, productivity and
              commercialization outcomes.
            </Card>
            <Card index="06" title="Investment & sponsorship" delay={300}>
              Organizations interested in helping establish the first HUMOLETICS platform.
            </Card>
          </div>

          <div className="mt-l">
            <CtaBand
              title="Request the Phase I brief"
              body="A written summary of the project, workstreams, budget and partnership structure is available on request. Tell us which part is relevant to you and we will send the detail rather than a brochure."
              actions={
                <>
                  <a href="#partnership" className="btn">
                    Request the brief
                  </a>
                  <Link to="/labs" className="btn btn--ghost">
                    Bring us an application
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ============================== ENQUIRY =========================== */}
      <section className="band band--light band--grid" id="partnership">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Phase I enquiry"
            title="Help build what comes next."
            lede="HUMOLETICS is currently seeking technology, research, industry, venue, funding and commercialization partners for Phase I. Tell us where you fit and we will respond with specifics."
          />
          <InquiryForm
            id="phase1"
            title={null}
            defaultInterest="Discuss investment or funding"
          />
        </div>
      </section>

      {/* ============================== CLOSING =========================== */}
      <section className="band band--dark band--tight">
        <div className="container container--narrow">
          <Notice tag="Accuracy">
            Every figure, target and timeline on this page is proposed. HUMOLETICS has no
            approved funding, no confirmed manufacturer or research partnership, no
            operating facility and no regulatory approvals. Phase I is a project we intend
            to run if the partnerships and funding can be assembled — and this page exists
            to help assemble them.
          </Notice>
        </div>
      </section>

      <Finale
        title="Help build what comes next."
        sub="HUMOLETICS is seeking technology, research, industry, venue, funding and commercialization partners for Phase I."
        actions={
          <>
            <a href="#partnership" className="btn">
              Discuss a Partnership
            </a>
            <Link to="/labs" className="btn btn--ghost">
              Bring Us an Application
            </Link>
          </>
        }
      />
    </>
  )
}
