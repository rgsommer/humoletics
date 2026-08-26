import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import HeroVisual from '../components/HeroVisual'
import SectionHeading from '../components/SectionHeading'
import Scoreboard from '../components/Scoreboard'
import CoachPanel from '../components/CoachPanel'
import Reveal from '../components/Reveal'
import { Card, Discipline, LocationCard, Metric, Pillar } from '../components/Cards'
import { Chain, CtaBand, Finale, Layers, Notice, Ticker } from '../components/Blocks'

const PILLARS = [
  {
    num: '01',
    name: 'Compete',
    desc: 'Take on a humanoid in controlled physical challenges — running, reaction, agility, balance and lifting.',
    to: '/arena',
  },
  {
    num: '02',
    name: 'Train',
    desc: 'Work out alongside a humanoid coach that demonstrates movement, counts repetitions and tracks your progress — for athletes and for active aging alike.',
    to: '/performance',
  },
  {
    num: '03',
    name: 'Experience',
    desc: 'Meet humanoid robots in person, watch them move, and see how embodied AI actually behaves in the real world.',
    to: '/experience',
    tone: 'cyan',
  },
  {
    num: '04',
    name: 'Test',
    desc: 'Bring a real task from your operation. We recreate it and evaluate whether a humanoid can genuinely perform it.',
    to: '/labs',
    tone: 'cyan',
  },
  {
    num: '05',
    name: 'Deploy',
    desc: 'Platform evaluation, sales, leasing, integration, training and support for organizations that decide to move ahead.',
    to: '/robotics',
    tone: 'cyan',
  },
]

const DISCIPLINES = [
  { icon: 'run', word: 'Run', note: 'Short distance' },
  { icon: 'react', word: 'React', note: 'Reaction time' },
  { icon: 'balance', word: 'Balance', note: 'Stability' },
  { icon: 'lift', word: 'Lift', note: 'Carry & place' },
  { icon: 'move', word: 'Move', note: 'Agility course' },
  { icon: 'compete', word: 'Compete', note: 'Head to head' },
]

const TICKER_ITEMS = [
  'Humans. Humanoids. Game On.',
  'Can you beat a humanoid?',
  'Race one. Train with one. Work with one.',
  'Experience the future physically.',
  'See it. Challenge it. Deploy it.',
  'Where human potential meets humanoid technology.',
]

export default function Home() {
  useSeo({
    title: 'HUMOLETICS | Human vs. Humanoid Robotics Experience',
    description:
      'HUMOLETICS is a new Ontario-based humanoid robotics experience combining Human vs. Humanoid competition, robot-led fitness, interactive demonstrations, commercial robotics testing, sales and integration.',
    path: '/',
  })

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <Reveal>
              <p className="hero__status">
                <span className="dot-live" aria-hidden="true" />
                Launching in Ontario · Currently in development
              </p>
              <h1 className="h-display hero__title">
                <span className="vs-you">Can you beat</span>
                <span className="vs-you">a <span className="accent-human">humanoid</span>?</span>
              </h1>
              <p className="hero__sub">
                Race one. Train with one. Work with one. Meet the future at HUMOLETICS.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn">
                  Join Early Access
                </Link>
                <Link to="/robotics" className="btn btn--ghost">
                  Explore Commercial Robotics
                </Link>
              </div>
              <p className="hero__meta">
                <span>Human vs. Humanoid competition</span>
                <span>Humanoid-led coaching</span>
                <span>Commercial testing &amp; deployment</span>
              </p>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={140}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      {/* ============================ INTRO =========================== */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="The concept"
            title="Humanoid robotics is leaving the laboratory."
            layout="split"
            lede="For twenty years humanoid robots lived in research videos. They are now walking into warehouses, gyms, classrooms and shop floors. HUMOLETICS is being built as the place where people and organizations can meet that shift physically — try it, test it, measure it, and decide what to do about it."
          >
            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link to="/experience" className="link-arrow">
                What a visit looks like
              </Link>
            </div>
          </SectionHeading>

          <div className="grid grid--5">
            {PILLARS.map((p, i) => (
              <Pillar key={p.name} {...p} delay={i * 70} />
            ))}
          </div>

          <div className="mt-l">
            <Notice tag="Status">
              HUMOLETICS is a concept in active development. There is no permanent facility yet.
              Our first experiences are planned as pop-up and partner-hosted events in Ontario while
              a permanent site is secured.
            </Notice>
          </div>
        </div>
      </section>

      {/* ======================= YOU vs HUMANOID ====================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Humoletics Arena"
            title={
              <>
                You <span className="accent-human">vs.</span> Humanoid
              </>
            }
            headingClass="h-display"
            lede="Not a demonstration you watch. A challenge you enter."
          />

          <div className="disciplines">
            {DISCIPLINES.map((d, i) => (
              <Discipline key={d.word} {...d} delay={i * 60} />
            ))}
          </div>

          <div className="split mt-xl">
            <div>
              <h3 className="h2">The robot does not simply win.</h3>
              <p className="body-copy mt-m">
                A humanoid running at full capability beats almost everyone, almost every time —
                which makes for a very short and very boring contest. The Arena is designed around
                <strong className="accent-human"> adaptive competition</strong> instead.
              </p>
              <p className="body-copy">
                Our intent is for robot performance in each challenge to be set within defined
                operating limits, so the contest is matched to the person standing on the line.
              </p>
              <ul className="check-list mt-m">
                <li><strong>Age group</strong> — a nine-year-old and a masters athlete do not face the same machine.</li>
                <li><strong>Ability and experience</strong> — challenge levels scale up as you do.</li>
                <li><strong>Prior performance</strong> — beat it once and the next attempt gets harder.</li>
                <li><strong>Selected difficulty</strong> — choose your level, from approachable to genuinely hard.</li>
              </ul>
              <div className="btn-row">
                <Link to="/arena" className="btn">
                  Inside the Arena
                </Link>
              </div>
            </div>

            <div>
              <Scoreboard />
            </div>
          </div>
        </div>
      </section>

      {/* ========================== COACHING ========================== */}
      <section className="band band--dark">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <p className="eyebrow eyebrow--cyan">Humoletics Performance</p>
              <h2 className="h1">Your next coach may not be human.</h2>
              <p className="lede mt-m">
                A humanoid that demonstrates the movement, sets the pace, counts the repetitions and
                remembers exactly what you did last time.
              </p>
              <p className="body-copy mt-m">
                Build a personal performance profile, come back, and beat your own numbers. Compare
                against your family, your class, your team or your workplace — and see where you sit
                on the board.
              </p>
              <div className="btn-row">
                <Link to="/performance" className="btn">
                  Explore Humoletics Performance
                </Link>
              </div>
            </div>

            <div className="split__media">
              <CoachPanel />
              <div className="grid grid--2 mt-s">
                <Metric value={12} suffix="+" label="Tracked movements" note="Planned launch set of demonstrable exercises." delay={80} />
                <Metric value={4} label="Challenge modes" note="Solo, family, school and workplace." delay={160} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== COMPETITION → COMPANIONSHIP =============== */}
      <section className="band band--dark-alt">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <p className="eyebrow eyebrow--cyan">Active Aging</p>
              <h2 className="h1">From competition to companionship.</h2>
              <p className="lede mt-m">
                The same humanoid that challenges an athlete could one day encourage an
                older adult to take one more step, complete one more repetition, or beat
                yesterday&rsquo;s personal best.
              </p>
              <p className="body-copy mt-m">
                A humanoid doesn&rsquo;t have to be your competitor. Sometimes it can stand
                beside you — demonstrating the movement, holding the pace, and remembering
                exactly what you managed last time. We are exploring this with movement,
                aging and rehabilitation researchers rather than on our own.
              </p>
              <div className="btn-row">
                <Link to="/active-aging" className="btn">
                  Explore Active Aging
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Research With Us
                </Link>
              </div>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>The competitor is yesterday</span>
                    <span>Illustrative</span>
                  </div>
                  <div className="panel__body">
                    <div className="stat-row">
                      <span className="stat-row__label">Previous session</span>
                      <span className="stat-row__value">5 chair stands</span>
                    </div>
                    <div className="stat-row stat-row--target">
                      <span className="stat-row__label">Today&rsquo;s goal</span>
                      <span className="stat-row__value">6 chair stands</span>
                    </div>
                    <div className="stat-row stat-row--best">
                      <span className="stat-row__label">Balance hold</span>
                      <span className="stat-row__value">16 sec</span>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Example profile. Illustrative only — not a medical or rehabilitation
                  service.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= HUMOLETICS HOME ====================== */}
      <section className="band band--dark">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Humoletics Home</p>
              <h2 className="h1">Don&rsquo;t buy the robot. Hire it.</h2>
              <p className="lede mt-m">
                Humanoid-as-a-Service: flexible humanoid rentals for independent living, recovery,
                activity, companionship and everyday assistance — without buying a robot.
              </p>
              <p className="body-copy mt-m">
                Meet the platforms at Humoletics, try the actual tasks you need in a controlled
                demonstration, and arrange a rental only when a robot has been shown to do them.
                Which functions are offered will depend on what individual platforms can genuinely
                and safely do.
              </p>
              <div className="btn-row">
                <Link to="/home" className="btn">
                  Explore Humoletics Home
                </Link>
                <Link to="/home#capability" className="btn btn--ghost">
                  What it can actually do
                </Link>
              </div>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Rental terms</span>
                    <span>In development</span>
                  </div>
                  <div className="panel__body">
                    <div className="stat-row">
                      <span className="stat-row__label">Short-term</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>
                        Days to weeks
                      </span>
                    </div>
                    <div className="stat-row stat-row--target">
                      <span className="stat-row__label">Monthly</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>
                        Rolling
                      </span>
                    </div>
                    <div className="stat-row stat-row--best">
                      <span className="stat-row__label">Long-term</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>
                        Full HaaS
                      </span>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Pricing not yet set. Nothing is available to rent today.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BUSINESS ROBOTICS ===================== */}
      <section className="band band--light band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Humoletics Labs"
            title="What job would you give a humanoid?"
            layout="split"
            lede="Every operation has a task somebody would rather not do a thousand times a day. The question is whether a humanoid can actually do it — and that question deserves evidence, not a sales deck."
          />

          <div className="split split--top">
            <div>
              <div className="grid grid--2">
                <Card index="01" title="Bring us the task">
                  Send us the process, the parts, the tolerances and the constraints. A bin, a bench,
                  a cart, a fixture — whatever the job actually involves.
                </Card>
                <Card index="02" title="We recreate it" delay={70}>
                  We rebuild the task in a controlled test cell so the evaluation reflects your real
                  conditions rather than a showroom floor.
                </Card>
                <Card index="03" title="We evaluate the robot" delay={140}>
                  Which platforms are plausible, what they achieve, where they fail, and how
                  consistently they repeat it.
                </Card>
                <Card index="04" title="We build the application" delay={210}>
                  Control logic, interfaces and the application layer that turns a capable machine
                  into a machine that does your job.
                </Card>
              </div>
            </div>

            <div>
              <Reveal>
                <p className="mono text-muted">Commercial pathway</p>
                <div className="mt-s">
                  <Chain nodes={['Demo', 'Test', 'Pilot', 'Deploy']} />
                </div>
                <p className="body-copy mt-m">
                  Behind those four words sits the full sequence: demonstration, feasibility study,
                  pilot, robot sale or lease, integration, training and ongoing support.
                </p>
              </Reveal>

              <Reveal delay={90} className="mt-l">
                <div className="notice">
                  <span className="notice__tag">Our line</span>
                  <span>
                    <strong>Not every job needs a humanoid.</strong> Our job is to determine where one
                    actually makes sense — and to tell you plainly when it does not.
                  </span>
                </div>
              </Reveal>

              <div className="btn-row">
                <Link to="/labs" className="btn">
                  Discuss an Application
                </Link>
                <Link to="/robotics" className="btn btn--ghost">
                  Commercial Robotics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== SHOWROOM ========================== */}
      <section className="band band--white band--light">
        <div className="container">
          <div className="split">
            <div className="split__media split__media--first">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Platform evaluation</span>
                    <span>Manufacturer-neutral</span>
                  </div>
                  <div className="panel__body">
                    <div className="stat-row">
                      <span className="stat-row__label">Payload &amp; reach</span>
                      <span className="stat-row__value">Compared</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Runtime &amp; charging</span>
                      <span className="stat-row__value">Measured</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Safety envelope</span>
                      <span className="stat-row__value">Documented</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Total cost of ownership</span>
                      <span className="stat-row__value">Modelled</span>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Indicative evaluation criteria. Platform availability to be confirmed.
                </p>
              </Reveal>
            </div>

            <div>
              <p className="eyebrow">Humoletics Robotics</p>
              <h2 className="h1">See humanoid robotics before you invest in it.</h2>
              <p className="lede mt-m">
                Buying a humanoid from a specification sheet and a launch video is a poor way to
                spend six figures.
              </p>
              <p className="body-copy mt-m">
                We are developing a Canadian showroom and evaluation capability where organizations
                can see multiple humanoid platforms move, handle real payloads, and be assessed
                side by side — before a purchase order exists.
              </p>
              <p className="body-copy">
                We are manufacturer-neutral by design. We are evaluating leading humanoid platforms
                for Canadian deployment, and we will recommend the one that fits the job.
              </p>
              <ul className="check-list mt-m">
                <li>Demonstrations and platform evaluation</li>
                <li>Sales, leasing and Robot-as-a-Service models</li>
                <li>Integration, operator training and support</li>
              </ul>
              <div className="btn-row">
                <Link to="/robotics" className="btn">
                  Commercial Robotics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== EDUCATION ========================= */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Humoletics Education"
            eyebrowTone="cyan"
            title="Tomorrow&rsquo;s workforce should meet tomorrow&rsquo;s machines."
            layout="split"
            lede="Most students will spend a career working alongside machines they have never been allowed to stand next to. We intend to change that — starting with school groups, robotics clubs and post-secondary programs in Ontario."
          />

          <div className="grid grid--4">
            <Card index="Schools" title="School visits" delay={0}>
              Curriculum-linked demonstrations for elementary and secondary groups, built around
              what students can see, ask and try.
            </Card>
            <Card index="STEM" title="Workshops" delay={70}>
              Robotics, coding and embodied-AI sessions that connect classroom concepts to a machine
              standing in the room.
            </Card>
            <Card index="Post-sec" title="College &amp; university" delay={140}>
              Collaboration on applied research, capstone projects, co-op placements and access to
              humanoid platforms.
            </Card>
            <Card index="Careers" title="Career exploration" delay={210}>
              Robotics technician, integration, controls, data and operations roles — shown as real
              work, not a poster.
            </Card>
          </div>

          <div className="mt-l">
            <CtaBand
              title="Planning a group visit or a school program?"
              body="Tell us your grade level, group size and what you want students to take away."
              actions={
                <>
                  <Link to="/education" className="btn">
                    Education &amp; Groups
                  </Link>
                  <Link to="/contact" className="btn btn--ghost">
                    Enquire
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ========================= MULTI-CITY ========================= */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="The long game"
            title="Built in Ontario. Designed to scale."
            layout="split"
            lede="Ontario will be the proving ground for a concept designed to scale. If the format works here, the same standardized challenges, scoring and experience can be established in other cities."
          />

          <div className="grid grid--4">
            <LocationCard
              city="Ontario"
              status="Launch market"
              launch
              note="Where the first HUMOLETICS experiences are being developed."
            />
            <LocationCard city="Toronto" status="Future — under consideration" delay={70} />
            <LocationCard city="Vancouver" status="Future — under consideration" delay={140} />
            <LocationCard city="Montréal" status="Future — under consideration" delay={210} />
          </div>

          <div className="mt-l">
            <Notice tag="To be clear">
              None of these locations exist today and none are committed. They describe the ambition
              for the concept, not current operations. Our longer-term vision includes standardized
              Humoletics events and shared leaderboards so participants in different cities could
              eventually compete on equivalent challenges — a Humoletics League is an idea we are
              exploring, not a competition you can enter.
            </Notice>
          </div>
        </div>
      </section>

      {/* =========================== THREE LAYERS ===================== */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="How it fits together"
            title="One venture. Three layers."
            layout="split"
            lede="HUMOLETICS only works if all three reinforce each other. The public experience funds and populates the commercial capability; the commercial work keeps the experience technically honest; and the innovation layer is what makes any of it Canadian rather than imported."
          />

          <Layers
            items={[
              {
                num: 'Layer 01',
                name: 'Experience',
                desc: 'People experience, compete and train with humanoids — in the Arena, in Performance, in Active Aging, at public events, and eventually at home.',
              },
              {
                num: 'Layer 02',
                name: 'Commercialization',
                desc: 'Canadian businesses test, purchase, lease and deploy humanoid robotics, with feasibility evidence before capital commitment.',
              },
              {
                num: 'Layer 03',
                name: 'Innovation',
                desc: 'HUMOLETICS develops Canadian software, applications, measurement and safety systems for human–humanoid interaction.',
              },
            ]}
          />

          <div className="mt-l">
            <CtaBand
              title="The Phase I project brings all three together."
              body="A proposed $500,000, 12–18 month Ontario initiative covering platform evaluation, Canadian software development, industrial application testing and a public pilot."
              actions={
                <>
                  <Link to="/phase-one" className="btn">
                    See HUMOLETICS Phase I
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ========================== PARTNERS ========================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Founding partnerships"
            title="Help build the first Humoletics experience."
            layout="center"
            lede="We are early, and we are open about it. Founding partnerships are being explored now across technology, venue, education, commercial and investment."
          />

          <div className="grid grid--3">
            <Card index="01" title="Robotics manufacturers" to="/partners" cta="Partner with us">
              A Canadian demonstration, evaluation and commercialization channel for your humanoid
              platform, with real public exposure and real commercial pilots.
            </Card>
            <Card index="02" title="Technology companies" to="/partners" cta="Partner with us" delay={60}>
              Perception, control, safety, sensing, scoring, mobile and platform technology that
              makes an interactive humanoid venue work.
            </Card>
            <Card index="03" title="Colleges &amp; universities" to="/partners" cta="Collaborate" delay={120}>
              Applied research, student projects, co-op talent and shared access to humanoid
              platforms.
            </Card>
            <Card index="04" title="Venues &amp; landlords" to="/partners" cta="Talk to us" delay={180}>
              Retail, entertainment and industrial space suited to a high-traffic robotics
              experience — including pop-up locations.
            </Card>
            <Card index="05" title="Municipalities &amp; innovation agencies" to="/partners" cta="Talk to us" delay={240}>
              Technology commercialization, robotics adoption, productivity and STEM outcomes in
              your region.
            </Card>
            <Card index="06" title="Sponsors &amp; investors" to="/partners" cta="Request information" delay={300}>
              Early involvement in a Canadian humanoid robotics venture spanning experience,
              commercial deployment and software IP.
            </Card>
          </div>

          <div className="btn-row btn-row--center">
            <Link to="/partners" className="btn">
              Become a Founding Partner
            </Link>
          </div>
        </div>
      </section>

      {/* =========================== FINALE =========================== */}
      <Finale
        title={
          <>
            The humanoids
            <br />
            are coming.
          </>
        }
        sub="The question is what we do with them. HUMOLETICS is being built so Canadians can answer that in person — by competing with them, training with them, and putting them to work."
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/partners" className="btn btn--ghost">
              Partner With Humoletics
            </Link>
          </>
        }
      />
    </>
  )
}
