import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Flow } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import Scoreboard from '../components/Scoreboard'
import { Card, Discipline } from '../components/Cards'
import Reveal from '../components/Reveal'

const EVENTS = [
  { icon: 'run', word: 'Sprint', note: 'Short distance' },
  { icon: 'react', word: 'Reaction', note: 'Light & signal' },
  { icon: 'move', word: 'Agility', note: 'Change of direction' },
  { icon: 'balance', word: 'Balance', note: 'Hold & recover' },
  { icon: 'lift', word: 'Lift & carry', note: 'Load transfer' },
  { icon: 'compete', word: 'Reps', note: 'Squats & bodyweight' },
  { icon: 'move', word: 'Obstacle', note: 'Course event' },
  { icon: 'compete', word: 'Simple sports', note: 'Target & precision' },
  { icon: 'dance', word: 'Dance battle', note: 'Copy, mirror, freestyle' },
]

export default function Arena() {
  useSeo({
    title: 'Arena | HUMOLETICS — Human vs. Humanoid Competition',
    description:
      'HUMOLETICS Arena is a Human vs. Humanoid competition concept: sprint, reaction, agility, balance and lifting challenges with adaptive robot performance, scoring, personal records and future leaderboards.',
    path: '/arena',
  })

  return (
    <>
      <PageHero
        breadcrumb="Arena"
        eyebrow="Humoletics Arena"
        title="Human vs. Humanoid."
        lede="A real contest, scaled to the person on the line. The Arena is the competitive heart of HUMOLETICS — a set of standardized physical challenges where a visitor takes on a humanoid robot and finds out exactly where they stand."
        facts={['Adaptive difficulty', 'Non-contact events', 'Supervised', 'Personal records']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/performance" className="btn btn--ghost">
              Humoletics Performance
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Possible events"
            title="Standardized challenges. Measurable results."
            layout="split"
            lede="The event list below describes the kinds of challenges the Arena is being designed around. The final launch programme will be confirmed once platform capability and safety validation are complete."
          />

          <div className="disciplines">
            {EVENTS.map((e, i) => (
              <Discipline key={e.word} {...e} delay={i * 55} />
            ))}
          </div>

          <div className="mt-l">
            <Notice tag="Design intent">
              Events are non-contact and structured around defined operating limits. We are not
              designing contact sports between people and machines, and we will not claim
              capabilities we have not demonstrated.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Adaptive competition</p>
              <h2 className="h1">A fair fight is a better fight.</h2>
              <p className="lede mt-m">
                A humanoid at maximum capability beats nearly every visitor at nearly everything.
                That is a demonstration, not a competition — and nobody queues twice for it.
              </p>
              <p className="body-copy mt-m">
                The Arena is being designed so robot performance in each event can be set within
                safe, defined limits — producing a contest that is genuinely winnable, genuinely
                losable, and worth trying again.
              </p>

              <div className="mt-l">
                <Flow
                  steps={[
                    { title: 'Profile', body: 'Age group, experience and any prior HUMOLETICS results.' },
                    { title: 'Level', body: 'Choose or accept a challenge level from approachable to hard.' },
                    { title: 'Set point', body: 'Robot performance is set within its defined operating limits.' },
                    { title: 'Result', body: 'Both performances are timed, scored and recorded to your profile.' },
                  ]}
                />
              </div>
            </div>

            <div className="split__media">
              <Scoreboard />

              <Reveal delay={80} className="mt-m">
                <div className="panel">
                  <div className="panel__head">
                    <span>Adaptive example</span>
                    <span>Illustrative</span>
                  </div>
                  <div className="panel__body">
                    <div className="stat-row">
                      <span className="stat-row__label">Child · age 9</span>
                      <span className="stat-row__value" style={{ fontSize: '1.15rem' }}>
                        Level 2 / 10
                      </span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Adult · recreational</span>
                      <span className="stat-row__value" style={{ fontSize: '1.15rem' }}>
                        Level 5 / 10
                      </span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Competitive athlete</span>
                      <span className="stat-row__value" style={{ fontSize: '1.15rem' }}>
                        Level 9 / 10
                      </span>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Illustrative levels only. Actual settings will depend on the platform and on
                  completed safety validation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== DANCE BATTLE ========================= */}
      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Signature event"
            title={
              <>
                The <span className="accent-human">dance battle</span>.
              </>
            }
            layout="split"
            lede="Of everything in the Arena, this is the event current humanoids are genuinely best at. Full-body choreographed motion — on beat, at full scale, identical every time — is a real strength of the platforms available today, not a promise about later."
          />

          <div className="split split--top">
            <div>
              <p className="body-copy">
                It is also the event with the best geometry for a crowd. Two performers facing each
                other, a floor, a beat, and a room that already knows how to judge what it is
                watching. Nobody needs the rules explained.
              </p>
              <p className="body-copy">
                The format runs in three rounds of increasing difficulty — and the three map exactly
                onto what the technology can honestly do now, soon, and later.
              </p>
              <div className="btn-row">
                <Link to="/performance" className="btn btn--ghost">
                  Learn the choreography first
                </Link>
                <Link to="/events" className="btn btn--ghost">
                  Book it as an event
                </Link>
              </div>
            </div>

            <div>
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Three rounds</span>
                    <span>Increasing difficulty</span>
                  </div>
                  <div className="panel__body stack-m">
                    <div>
                      <p className="mono accent-humanoid">Round 01 · Copy the robot</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        It performs a sequence. You reproduce it. Scored on accuracy and timing,
                        with the routine getting longer and faster as you clear each round. This
                        one works with today&rsquo;s platforms.
                      </p>
                    </div>
                    <div>
                      <p className="mono" style={{ color: '#f2a93b' }}>Round 02 · Mirror match</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        You move, it follows. Reversing the direction needs reliable real-time
                        motion capture and response — emerging, and the round we would build second.
                      </p>
                    </div>
                    <div>
                      <p className="mono text-muted">Round 03 · Freestyle</p>
                      <p className="body-copy" style={{ fontSize: '0.93rem', marginTop: 8 }}>
                        A genuine improvised exchange, each side answering the other. This is a
                        research problem, not a feature. We would rather name it as the ambition
                        than pretend it is ready.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Round structure is a design concept. Only Round 01 is supported by what current
                  platforms have been shown to do.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-l">
            <Notice tag="Why this one first">
              If we are looking for the first Arena event to build properly, this is the strongest
              candidate: it is non-contact by nature, it needs no safety envelope beyond floor space
              and separation, it scales from a nine-year-old to a trained dancer through routine
              complexity alone, and it is the rare format that is as good to watch as it is to
              enter.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Scoring"
            title="Your result belongs to you."
            layout="split"
            lede="Every attempt is measured, scored and kept — so the next visit has a number to beat. Scoring is the mechanism that turns a one-off novelty into something people come back for."
          />

          <div className="grid grid--3">
            <Card index="01" title="Performance level">
              A single comparable score per event, derived from your result and the level you faced,
              so attempts at different difficulties can be compared meaningfully.
            </Card>
            <Card index="02" title="Personal records" delay={70}>
              Your best result in each event, held in your profile and shown against your history
              the next time you step on the line.
            </Card>
            <Card index="03" title="Achievement levels" delay={140}>
              Progression markers for beating the humanoid at successively higher difficulty
              settings across multiple events.
            </Card>
            <Card index="04" title="Group challenges" delay={210}>
              Family, class, team and workplace comparisons — the version of this that gets loudest
              in the room.
            </Card>
            <Card index="05" title="Leaderboards" delay={280}>
              Venue leaderboards by event and age group. A planned feature, not a live one.
            </Card>
            <Card index="06" title="Standardized events" delay={350}>
              Because events are standardized, results could eventually be compared between
              HUMOLETICS locations. That is the ambition behind the multi-city vision.
            </Card>
          </div>

          <div className="mt-l">
            <Notice tag="To be clear">
              There is no Humoletics League operating today, and no inter-city competition exists.
              Standardized events, shared leaderboards and school or corporate championships are
              part of our longer-term vision for the concept.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow eyebrow--cyan">Safety</p>
              <h2 className="h1">Controlled by design.</h2>
              <p className="body-copy mt-m">
                Activities are controlled and designed around defined operating limits, supervision
                and participant safety. This is the constraint the entire Arena concept is built
                inside — not a disclaimer added at the end.
              </p>
              <ul className="check-list check-list--cyan mt-m">
                <li><strong>Non-contact events.</strong> Challenges are designed so participants and robots do not make physical contact.</li>
                <li><strong>Managed separation.</strong> Defined lanes, zones and barriers between the human and the machine.</li>
                <li><strong>Defined operating limits.</strong> Speed, force and range constrained within validated settings for the event.</li>
                <li><strong>Trained supervision.</strong> Staff present and in control for every robot activity.</li>
                <li><strong>Stop authority.</strong> Clear means to halt an activity immediately, held by staff.</li>
                <li><strong>Progressive validation.</strong> Events go public only after their safety envelope has been established.</li>
              </ul>
              <p className="form-note mt-m">
                Final safety design will be developed with the platform manufacturer and validated
                against applicable Canadian requirements before public operation.
              </p>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Event envelope</span>
                    <span>Concept</span>
                  </div>
                  <div className="panel__body stack-m">
                    <div>
                      <p className="mono text-muted">Participant zone</p>
                      <p className="body-copy" style={{ fontSize: '0.92rem' }}>
                        Marked lane. Participant never enters the robot&rsquo;s working envelope
                        during an event.
                      </p>
                    </div>
                    <div>
                      <p className="mono text-muted">Robot zone</p>
                      <p className="body-copy" style={{ fontSize: '0.92rem' }}>
                        Separate lane with defined limits on speed, reach and force for the event.
                      </p>
                    </div>
                    <div>
                      <p className="mono text-muted">Operator position</p>
                      <p className="body-copy" style={{ fontSize: '0.92rem' }}>
                        Trained staff with continuous line of sight and immediate stop authority.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Finale
        title="Step on the line."
        sub="Join the early-access list and be among the first to take on a humanoid in the HUMOLETICS Arena."
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/experience" className="btn btn--ghost">
              Plan a visit
            </Link>
          </>
        }
      />
    </>
  )
}
