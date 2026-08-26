import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, CtaBand, Faq } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import AgingVisual from '../components/AgingVisual'
import CoachDemo from '../components/CoachDemo'
import CompareCard from '../components/CompareCard'
import { Card, FactCard } from '../components/Cards'
import Reveal from '../components/Reveal'

const ROLES = [
  { role: 'Coach', desc: 'Sets the session, holds the pace and keeps the count honest.' },
  { role: 'Demonstrator', desc: 'Performs the movement at full scale, from any angle you want to watch.' },
  { role: 'Training partner', desc: 'Moves alongside you rather than instructing from a screen.' },
  { role: 'Motivator', desc: 'Prompts and encourages through the part of the set where people stop early.' },
  { role: 'Progress tracker', desc: 'Remembers what you did last time so today has a number to beat.' },
]

const ACTIVITIES = [
  'Chair stands',
  'Gentle squats',
  'Balance exercises',
  'Stepping exercises',
  'Walking and pacing',
  'Stretching',
  'Mobility routines',
  'Reaction exercises',
  'Light movement challenges',
  'Follow-the-robot activities',
]

const PROGRAMS = [
  { name: 'Move With HUMOLETICS', desc: 'A general movement session led by a humanoid demonstrator, scaled to the group in the room.' },
  { name: 'Humanoid Mobility Challenge', desc: 'A light, sociable challenge format built around everyday movement rather than athletic performance.' },
  { name: 'Balance & Movement', desc: 'Focused sessions on balance, stepping and controlled movement, with measured hold times.' },
  { name: 'HUMOLETICS 60+', desc: 'A programme designed specifically for older adults, with pacing and progression set to the participant.' },
  { name: 'Personal Best', desc: 'The progression format: your profile, your history, your record — and the goal for today.' },
]

export default function ActiveAging() {
  useSeo({
    title: 'Active Aging | HUMOLETICS — Humanoid Movement Partners & Rehabilitation Research',
    description:
      'HUMOLETICS is exploring how humanoid robots could act as movement partners, exercise coaches and motivators for older adults — plus a proposed rehabilitation research agenda with qualified healthcare and academic partners in Ontario, Canada.',
    path: '/active-aging',
  })

  return (
    <>
      <PageHero
        tone="light"
        breadcrumb="Active Aging"
        eyebrow="Active Aging & Rehabilitation"
        title="Move with the future."
        titleClass="h-display"
        lede="Exploring how humanoid robotics could help people stay active, engaged and motivated — one movement at a time."
        visual={<AgingVisual />}
        actions={
          <>
            <a href="#partner" className="btn">
              Explore Active Aging
            </a>
            <Link to="/partners" className="btn btn--ghost">
              Discuss a Partnership
            </Link>
          </>
        }
      />

      {/* ================== THE ROBOT AS MOVEMENT PARTNER ================== */}
      <section className="band band--white band--light">
        <div className="container">
          <SectionHeading
            eyebrow="A different relationship"
            title="Not every human–humanoid challenge is about winning."
            layout="split"
            lede="A humanoid doesn’t have to be your competitor. Sometimes it can stand beside you. The Arena is one relationship between people and machines; this is another — and it may prove to be the more important one."
          />

          <div className="grid grid--5">
            {ROLES.map((r, i) => (
              <Card key={r.role} index={String(i + 1).padStart(2, '0')} title={`The robot as ${r.role.toLowerCase()}`} delay={i * 60}>
                {r.desc}
              </Card>
            ))}
          </div>

          <div className="split mt-xl">
            <div>
              <h3 className="h2">A partner that repeats without tiring.</h3>
              <p className="body-copy mt-m">
                The difficulty with movement programmes is rarely the movement. It is
                having someone available to demonstrate it properly, at the right pace,
                as many times as it takes — and to notice when you managed one more than
                last week.
              </p>
              <p className="body-copy">
                A humanoid could demonstrate a movement repeatedly and consistently while
                the participant follows along, at whatever tempo suits the person rather
                than the timetable.
              </p>
              <p className="body-copy">
                These are proposed applications. We have not validated them, and we will
                not claim otherwise.
              </p>
            </div>

            <div className="split__media">
              <Reveal>
                <p className="mono text-muted">Activities we intend to explore</p>
                <ul className="tag-list mt-s">
                  {ACTIVITIES.map((a) => (
                    <li key={a} className="tag">
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div className="mt-m">
                <Notice tag="Development concept">
                  The activities above are proposed development concepts, not currently
                  validated capabilities. Each would require its own testing, pacing and
                  safety work before any participant took part.
                </Notice>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== COMPETE WITH YESTERDAY ===================== */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="The idea that matters most"
            title={
              <>
                Sometimes the competitor isn&rsquo;t the robot.
                <br />
                It&rsquo;s <span className="accent-human">yesterday</span>.
              </>
            }
            headingClass="h1"
            lede="Comparison against other people is where most movement programmes quietly lose the person who needs them. Comparison against your own last session is where people stay."
          />

          <div className="split mt-l">
            <div className="split__media split__media--first">
              <CompareCard />
            </div>

            <div>
              <p className="body-copy">
                HUMOLETICS intends to maintain individual performance profiles so that a
                humanoid coach can set each session against the participant&rsquo;s own
                abilities and previous results — not against a younger or more athletic
                participant, and not against a population average.
              </p>
              <ul className="check-list mt-m">
                <li><strong>Your history sets the goal.</strong> Today&rsquo;s target comes from what you actually did last time.</li>
                <li><strong>Progress is visible.</strong> Small gains are easy to dismiss and easy to miss. Measurement makes them count.</li>
                <li><strong>The bar moves with you.</strong> Improve, and the next session asks for slightly more.</li>
                <li><strong>Nobody else&rsquo;s number is on the screen.</strong> The comparison that matters is with yesterday.</li>
              </ul>
              <p className="form-note mt-m">
                Performance profiles are a planned capability of the HUMOLETICS software
                platform. They are not currently in operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= THE HUMANOID COACH ====================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <p className="eyebrow eyebrow--cyan">The humanoid coach</p>
              <h2 className="h1">What a session could sound like.</h2>
              <p className="lede mt-m">
                Not a screen telling you what to do. A machine that greets you by name,
                remembers your last session, and stands up to show you the movement.
              </p>
              <p className="body-copy mt-m">
                The panel beside this is a conceptual interface demonstrating the intended
                experience — the greeting, the recall of last session, the goal for today,
                the count, and the moment the record moves.
              </p>
              <p className="body-copy">
                It is a design concept. No HUMOLETICS coaching system is in operation, and
                the dialogue shown is illustrative.
              </p>
              <div className="btn-row">
                <Link to="/performance" className="btn btn--ghost">
                  Humoletics Performance
                </Link>
              </div>
            </div>

            <div className="split__media">
              <CoachDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHY HUMANOIDS ======================== */}
      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Why a humanoid at all?"
            title="What we want to investigate."
            layout="split"
            lede="A tablet is cheaper than a humanoid robot. So the question worth asking honestly is what a physical machine in the room actually adds — and whether it adds enough to matter."
          />

          <div className="grid grid--3">
            <Card index="01" title="Physical demonstration">
              We want to investigate whether a full-scale physical demonstration is easier
              to follow and copy than verbal or on-screen instruction.
            </Card>
            <Card index="02" title="Consistent repetition" delay={60}>
              A machine performs the tenth repetition exactly like the first. Potential
              applications include maintaining form and tempo through a full set.
            </Card>
            <Card index="03" title="Individualized pacing" delay={120}>
              HUMOLETICS intends to explore pacing set to the participant rather than to a
              class, a video or a schedule.
            </Card>
            <Card index="04" title="Encouragement" delay={180}>
              Whether prompts and cues from a present, physical partner sustain effort
              differently from a recorded voice is an open question we want to test.
            </Card>
            <Card index="05" title="Interactive engagement" delay={240}>
              Potential applications include responsive interaction — the machine reacting
              to what the participant is actually doing.
            </Card>
            <Card index="06" title="Progress tracking" delay={300}>
              Measurement of selected movements, held in a profile, so progression is
              recorded rather than remembered.
            </Card>
            <Card index="07" title="Repeatable routines" delay={360}>
              The same session, delivered identically, as often as required — including in
              settings without specialist staff on site.
            </Card>
            <Card index="08" title="Gamification" delay={420}>
              We want to investigate whether goals, records and light challenge formats
              improve participation and adherence.
            </Card>
            <Card index="09" title="Participating alongside" delay={480}>
              The distinguishing possibility: a partner that performs the movement with
              you rather than watching you perform it.
            </Card>
          </div>

          <div className="mt-l">
            <Notice tag="Our position">
              These are research questions, not findings. HUMOLETICS makes no claim that
              humanoid-led movement is more effective than any existing approach. The
              purpose of Phase I is to find out what is actually true.
            </Notice>
          </div>
        </div>
      </section>

      {/* ============================ ACTIVE AGING ========================= */}
      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Active aging"
            title="Independence, confidence and movement."
            layout="split"
            lede="This part of the concept sits firmly in recreation and wellness — community settings, not clinical ones. Older adults who want to keep moving, keep improving and keep their independence."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Settings we would like to work with</h3>
              <ul className="check-list mt-m">
                <li>Retirement communities</li>
                <li>Seniors&rsquo; centres</li>
                <li>Municipal recreation programs</li>
                <li>Community centres</li>
                <li>Fitness facilities</li>
                <li>Independent-living communities</li>
                <li>Wellness organizations</li>
              </ul>
              <div className="btn-row">
                <a href="#partner" className="btn">
                  Start a conversation
                </a>
              </div>
            </div>

            <div>
              <h3 className="h3">Conceptual programme formats</h3>
              <div className="grid mt-m" style={{ gap: 12 }}>
                {PROGRAMS.map((p, i) => (
                  <Reveal key={p.name} delay={i * 60}>
                    <div className="card" style={{ padding: '20px 22px' }}>
                      <h4 className="card__title" style={{ fontSize: '1.05rem' }}>{p.name}</h4>
                      <p className="card__body">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="illustrative-note">
                Conceptual programme names. None is currently operating or bookable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= REHABILITATION RESEARCH =================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Research opportunity"
            eyebrowTone="cyan"
            title="Could humanoids become rehabilitation partners?"
            layout="split"
            lede="This is a genuinely different category from everything above, and we want to be precise about the line. Fitness and recreation is something HUMOLETICS intends to operate. Rehabilitation is something HUMOLETICS would only ever investigate, with qualified partners, under their guidance."
          />

          <div className="split split--top">
            <div>
              <h3 className="h3">Research questions worth asking</h3>
              <ul className="check-list check-list--cyan mt-m">
                <li>Can humanoid demonstrations improve exercise engagement?</li>
                <li>Can computer vision reliably measure selected movements?</li>
                <li>Can humanoids provide safe pacing and repetition cues?</li>
                <li>Can gamification improve adherence to a prescribed programme?</li>
                <li>Can progress measurements help clinicians monitor prescribed exercises?</li>
                <li>Can humanoids help extend supervised programmes into community settings?</li>
              </ul>
            </div>

            <div>
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Where the line sits</span>
                    <span>Important</span>
                  </div>
                  <div className="panel__body stack-m">
                    <div>
                      <p className="mono accent-human">What HUMOLETICS intends to do</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        Fitness, recreation, movement coaching and performance tracking in
                        community and wellness settings.
                      </p>
                    </div>
                    <div>
                      <p className="mono accent-humanoid">What HUMOLETICS would only research</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        Any application touching prescribed rehabilitation — investigated
                        jointly with healthcare, physiotherapy and academic partners, and
                        evaluated on their terms.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-l">
            <Notice tag="Important">
              HUMOLETICS is not currently offering medical treatment, physiotherapy or
              clinical rehabilitation services. Any future clinical applications would be
              developed and evaluated with appropriate healthcare professionals,
              researchers and regulatory guidance. Nothing on this page should be read as
              a medical claim.
            </Notice>
          </div>
        </div>
      </section>

      {/* ======================== PARTNERSHIP OPPORTUNITY ================== */}
      <section className="band band--light band--grid" id="partner">
        <div className="container">
          <SectionHeading
            eyebrow="Collaboration"
            title="We shouldn’t develop this alone."
            layout="center"
            lede="We are a robotics venture, not a clinical one. The questions on this page belong to people with training we do not have — and we would rather bring them in at the start than present them with a finished product to validate."
          />

          <div className="grid grid--4">
            <FactCard value="Clinical" label="Practitioners" note="Physiotherapists and occupational therapists." />
            <FactCard value="Academic" label="Researchers" note="Kinesiology, gerontology, AI and robotics." delay={70} />
            <FactCard value="Care" label="Institutions" note="Hospitals, rehabilitation centres, retirement communities." delay={140} />
            <FactCard value="Community" label="Operators" note="Municipal recreation and wellness organizations." delay={210} />
          </div>

          <div className="mt-l">
            <Reveal>
              <ul className="tag-list">
                {[
                  'Physiotherapists',
                  'Occupational therapists',
                  'Kinesiology researchers',
                  'Gerontology researchers',
                  'Hospitals',
                  'Rehabilitation centres',
                  'Universities',
                  'Colleges',
                  'Retirement communities',
                  'Municipal recreation departments',
                  'Robotics manufacturers',
                  'AI researchers',
                ].map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-l">
            <CtaBand
              title="Explore a research partnership"
              body="If you work in movement, aging, rehabilitation or the research around them, we would like to hear which of these questions is worth asking first — and which we have framed wrongly."
              actions={
                <>
                  <Link to="/contact" className="btn">
                    Explore a Research Partnership
                  </Link>
                  <Link to="/home" className="btn btn--ghost">
                    Humoletics Home
                  </Link>
                  <Link to="/phase-one" className="btn btn--ghost">
                    Phase I project
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="band band--dark band--tight">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Straight answers" title="Questions about this page" />
          <Faq
            items={[
              {
                q: 'Is any of this available now?',
                a: 'No. Everything on this page describes proposed and intended development. HUMOLETICS has no permanent facility, no operating programmes and no validated humanoid coaching capability. Active Aging is a Phase I workstream.',
              },
              {
                q: 'Is HUMOLETICS offering physiotherapy or rehabilitation?',
                a: 'No. HUMOLETICS is not offering medical treatment, physiotherapy or clinical rehabilitation, and does not intend to offer them independently. Rehabilitation is framed here strictly as a research opportunity to be pursued with qualified healthcare and academic partners under appropriate guidance.',
              },
              {
                q: 'Are these robots safe around older adults?',
                a: 'Safety design for any activity involving participants is a precondition, not an afterthought. Sessions would be supervised, non-contact by design, and operated within defined limits developed with the platform manufacturer and validated before any public programme runs.',
              },
              {
                q: 'Why not just use a screen or an app?',
                a: 'That is exactly the question we want to test. A tablet is far cheaper than a humanoid, so a physical machine has to earn its place. Whether a full-scale physical demonstrator improves engagement enough to justify the cost is an open research question, and we would rather answer it with evidence than assume it.',
              },
              {
                q: 'How can our organization get involved?',
                a: 'Use the contact form and tell us what you do and what you would want to see tested. Practitioner and research input at this stage shapes what actually gets built.',
              },
            ]}
          />
        </div>
      </section>

      <Finale
        title={
          <>
            One more step.
            <br />
            One more rep.
          </>
        }
        sub="A humanoid doesn’t have to be your competitor. Sometimes it can stand beside you — and remember exactly what you managed yesterday."
        actions={
          <>
            <Link to="/contact" className="btn">
              Explore a Research Partnership
            </Link>
            <Link to="/performance" className="btn btn--ghost">
              Humoletics Performance
            </Link>
          </>
        }
      />
    </>
  )
}
