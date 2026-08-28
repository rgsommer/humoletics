import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import CoachPanel from '../components/CoachPanel'
import { Card, Metric } from '../components/Cards'

export default function Performance() {
  useSeo({
    title: 'Performance | HUMOLETICS — Humanoid-Led Fitness & Coaching',
    description:
      'HUMOLETICS Performance is a humanoid robot fitness and coaching concept: movement demonstration, repetition counting, pacing, personal-best tracking, scoring and group challenges.',
    path: '/performance',
  })

  return (
    <>
      <PageHero
        breadcrumb="Performance"
        eyebrow="Humoletics Performance"
        title="Your next coach may not be human."
        lede="A humanoid that shows you the movement, holds the pace, counts every repetition and remembers precisely what you managed last time. Fitness, recreation and personal improvement — measured, and worth returning to."
        facts={['Movement demonstration', 'Repetition counting', 'Personal bests', 'Group challenges']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/arena" className="btn btn--ghost">
              Humoletics Arena
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <p className="eyebrow eyebrow--cyan">The idea</p>
              <h2 className="h1">A partner that never loses count.</h2>
              <p className="lede mt-m">
                Anyone who has trained alone knows the two hard parts: doing the movement properly,
                and being honest about how many you actually did.
              </p>
              <p className="body-copy mt-m">
                A humanoid coach is being explored as a partner for exactly that — physically
                demonstrating the movement at full scale in front of you, setting the tempo,
                counting accurately, and holding you to the number you set last time.
              </p>
              <p className="body-copy">
                HUMOLETICS Performance is about fitness, recreation, coaching and human
                improvement. It is a performance concept, not a health service.
              </p>
            </div>

            <div className="split__media">
              <CoachPanel />
            </div>
          </div>

          <div className="grid grid--3 mt-xl">
            <Card index="01" title="Demonstration">
              A full-scale physical demonstration of the movement — a machine performing it beside
              you, from any angle you want to watch.
            </Card>
            <Card index="02" title="Pacing" delay={70}>
              Tempo held steady through the set, so the last repetition looks like the first.
            </Card>
            <Card index="03" title="Repetition counting" delay={140}>
              Accurate counting through the set, with the total recorded to your profile.
            </Card>
            <Card index="04" title="Encouragement" delay={210}>
              Prompts and cues through the hard part of the set — the part where most people stop
              early.
            </Card>
            <Card index="05" title="Scoring" delay={280}>
              A comparable score per session so progress is visible rather than assumed.
            </Card>
            <Card index="06" title="Achievement levels" delay={350}>
              Progression markers as you move up through movements, volumes and difficulty.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Profiles"
            title="Come back. Beat your own number."
            layout="split"
            lede="A personal performance profile is what turns a one-time novelty into a reason to return. Your history travels with you: last session, current target, personal best."
          />

          <div className="grid grid--4">
            <Metric value={20} label="Previous session" note="Repetitions recorded at your last visit." suffix=" reps" />
            <Metric value={22} label="Today's target" note="Set from your history, not from a default." suffix=" reps" delay={80} />
            <Metric value={24} label="Personal best" note="The number to beat, held in your profile." suffix=" reps" delay={160} />
            <Metric value={7} label="Sessions logged" note="Progress becomes visible across visits." delay={240} />
          </div>

          <p className="illustrative-note">
            Example profile data. Figures are illustrative and do not represent measured results.
          </p>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Competition"
            title="Better with someone to beat."
            layout="split"
            lede="Individual progress is the foundation. Comparison is what makes people show up on a Tuesday."
          />

          <div className="grid grid--4">
            <Card index="Family" title="Family challenges">
              Parents against teenagers, siblings against each other, with challenge levels scaled
              so the contest is real for everyone in it.
            </Card>
            <Card index="School" title="School competitions" delay={70}>
              Class against class, or school against school, on standardized movements with
              comparable scoring.
            </Card>
            <Card index="Work" title="Corporate challenges" delay={140}>
              Team-based workplace wellness and engagement challenges with a leaderboard people
              actually check.
            </Card>
            <Card index="Venue" title="Leaderboards" delay={210}>
              Venue boards by movement and age group. A planned feature of the concept, not a live
              service.
            </Card>
          </div>

          <div className="mt-l">
            <Notice tag="Important">
              HUMOLETICS Performance is a fitness, recreation and coaching concept. It is not a
              medical, rehabilitation, therapeutic or diagnostic service, and it is not a substitute
              for professional advice. Participants take part in physical activity at a level they
              choose and should exercise their own judgement about what is appropriate for them.
            </Notice>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS, NOT JUST REPS ==================== */}
      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title="Not just repetitions. Technique."
            layout="split"
            lede="Counting reps is the easy part. Form is the hard part, and form is learned by watching someone do it correctly — slowly, then at speed, as many times as it takes. A machine performs it identically every time and never tires of your tenth attempt."
          />

          <div className="grid grid--4">
            <Card index="01" title="Boxing fundamentals">
              Stance, guard, footwork and combination patterns, demonstrated at full scale and
              paced to you. Shadow and form work only.
            </Card>
            <Card index="02" title="Fencing footwork" delay={60}>
              En garde, advance, retreat and lunge mechanics, drilled at whatever tempo you need.
            </Card>
            <Card index="03" title="Martial arts forms" delay={120}>
              Kata and form sequences broken into steps, then repeated exactly.
            </Card>
            <Card index="04" title="Golf &amp; racquet swings" delay={180}>
              Swing path and body sequencing, shown from whichever angle you want to stand at.
            </Card>
            <Card index="05" title="Dance &amp; choreography" delay={240}>
              Sequences demonstrated, slowed, looped and counted in.
            </Card>
            <Card index="06" title="Lifting technique" delay={300}>
              Bar path and positions for compound lifts, unloaded, before you add weight.
            </Card>
            <Card index="07" title="Mobility &amp; stretching" delay={360}>
              Held positions with honest timing rather than a guessed count.
            </Card>
            <Card index="08" title="Your own sport" delay={420}>
              Tell us the movement. If it can be demonstrated repeatably, it is a candidate.
            </Card>
          </div>

          <div className="mt-l">
            <Notice tag="Non-contact">
              Every format here is demonstration and form coaching. The humanoid shows the movement
              and paces you through it — it does not spar, strike, fence against you, or make
              physical contact of any kind. That is a design rule across HUMOLETICS, not a
              limitation we expect to lift.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <CtaBand
            title="Interested in humanoid-led coaching at your facility?"
            body="We are exploring how HUMOLETICS Performance could operate with recreation centres, fitness organizations, schools and workplaces."
            actions={
              <>
                <Link to="/contact" className="btn">
                  Start a conversation
                </Link>
                <Link to="/home" className="btn btn--ghost">
                  Train at home
                </Link>
              </>
            }
          />
        </div>
      </section>

      <Finale
        title="Twenty reps last time."
        sub="Twenty-two today. HUMOLETICS Performance is being built around the simple idea that measured progress is the most motivating thing there is."
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/experience" className="btn btn--ghost">
              The Experience
            </Link>
          </>
        }
      />
    </>
  )
}
