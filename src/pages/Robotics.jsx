import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Flow, Faq, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import { Card, FactCard } from '../components/Cards'
import Reveal from '../components/Reveal'

const CLIENTS = [
  'Manufacturers',
  'Warehouses',
  'Logistics companies',
  'Schools',
  'Colleges',
  'Universities',
  'Researchers',
  'Corporate innovation teams',
  'Recreation centres',
  'Fitness organizations',
  'Entertainment operators',
  'Public-sector organizations',
]

export default function Robotics() {
  useSeo({
    title: 'Robotics | HUMOLETICS — Humanoid Robot Sales, Leasing & Integration in Canada',
    description:
      'Manufacturer-neutral humanoid robot demonstrations, platform evaluation, sales, leasing, Robot-as-a-Service, integration, training and support for Canadian organizations.',
    path: '/robotics',
  })

  return (
    <>
      <PageHero
        breadcrumb="Robotics"
        eyebrow="Humoletics Robotics"
        title="See humanoid robotics before you invest in it."
        lede="Commercial humanoid robotics for Canadian organizations — demonstrations, platform evaluation, sales, leasing, integration, training and support. Manufacturer-neutral, and honest about where a humanoid is the wrong answer."
        facts={['Manufacturer-neutral', 'Evaluation-led', 'Sales & leasing', 'Integration & support']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Discuss an Application
            </Link>
            <Link to="/labs" className="btn btn--ghost">
              Humoletics Labs
            </Link>
          </>
        }
      />

      <section className="band band--light band--grid">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Position</p>
              <h2 className="h1">Not every job needs a humanoid.</h2>
              <p className="lede mt-m">
                Our job is to determine where one actually makes sense.
              </p>
              <p className="body-copy mt-m">
                A conveyor, a fixed-arm cell or a better-designed workstation beats a humanoid robot
                for a great many tasks — cheaper, faster and more reliably. Anyone who tells you
                otherwise is selling a robot rather than solving a problem.
              </p>
              <p className="body-copy">
                Where a humanoid does earn its place, it is usually because the task lives in a
                space built for people: human-height benches, human-shaped tools, variable
                positioning, and a layout nobody is going to rebuild around a machine.
              </p>
              <p className="body-copy">
                We would rather tell you that early than sell you something that ends up parked in a
                corner.
              </p>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Where a humanoid may fit</span>
                    <span>Assessment view</span>
                  </div>
                  <div className="panel__body stack-m">
                    <div>
                      <p className="mono accent-human">Worth evaluating</p>
                      <ul className="check-list mt-s">
                        <li>Human-scale workstations that will not be redesigned</li>
                        <li>Varied, low-volume repetitive handling</li>
                        <li>Tasks spread across a facility rather than fixed at one point</li>
                        <li>Roles that are persistently hard to staff</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mono accent-humanoid">Usually a different answer</p>
                      <ul className="check-list check-list--cyan mt-s">
                        <li>High-speed, high-volume, fixed-position work</li>
                        <li>Tasks a conveyor or fixed arm already solves</li>
                        <li>Precision beyond current humanoid capability</li>
                        <li>Anything where the business case rests on novelty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="From first demonstration to ongoing support."
            layout="split"
            lede="We are developing a full commercial capability so an organization does not have to assemble a humanoid deployment from four different vendors and hope the pieces meet."
          />

          <div className="grid grid--4">
            <Card index="01" title="Demonstrations">
              See platforms move, handle payloads and perform representative tasks — on site with us
              or at your facility.
            </Card>
            <Card index="02" title="Platform evaluation" delay={60}>
              Structured comparison across payload, reach, runtime, safety envelope, software
              maturity, support and total cost of ownership.
            </Card>
            <Card index="03" title="Sales" delay={120}>
              Supply of humanoid platforms and supporting equipment for Canadian deployment.
            </Card>
            <Card index="04" title="Leasing" delay={180}>
              Lease structures for organizations that want capability without a capital purchase.
            </Card>
            <Card index="05" title="Robot-as-a-Service" delay={240}>
              Subscription models covering the platform, application layer, support and updates as
              one ongoing service. The household equivalent is{' '}
              <Link to="/home" style={{ textDecoration: 'underline' }}>Humoletics Home</Link>.
            </Card>
            <Card index="06" title="Integration" delay={300}>
              Fitting the robot to the workflow: workstation design, fixturing, handover points,
              systems and data connections.
            </Card>
            <Card index="07" title="Training" delay={360}>
              Operator, supervisor and maintenance training so your people run the system rather
              than depending on ours.
            </Card>
            <Card index="08" title="Support" delay={420}>
              Ongoing service, parts, software updates and performance review after deployment.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Commercial pathway"
            title="A sequence, not a leap."
            lede="Each stage is designed to be a genuine decision point. Stopping after a feasibility study because the answer was no is a good outcome — it is a great deal cheaper than stopping after a deployment."
          />

          <Flow
            wide
            steps={[
              { title: 'Demonstration', body: 'See what current humanoid platforms actually do.' },
              { title: 'Feasibility study', body: 'Assess your specific task against real platform capability.' },
              { title: 'Pilot', body: 'Run the application in a controlled setting with measured results.' },
              { title: 'Sale or lease', body: 'Acquire the platform under the model that suits your finances.' },
              { title: 'Integration', body: 'Fit the robot and its application into your operation.' },
              { title: 'Training', body: 'Bring your operators and maintainers up to competence.' },
              { title: 'Support', body: 'Service, updates and performance review over the life of the deployment.' },
            ]}
          />

          <div className="mt-l">
            <Notice tag="Manufacturer-neutral">
              We are evaluating leading humanoid platforms for Canadian deployment. We are not a
              single-brand dealership, we have no exclusive manufacturer agreement in place, and we
              will name the platforms we work with once those arrangements are confirmed.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Who this is for"
            title="Organizations weighing a real decision."
            layout="split"
            lede="The common thread is not industry — it is having a task, a budget and a genuine question about whether a humanoid belongs anywhere near it."
          />

          <Reveal>
            <ul className="tag-list">
              {CLIENTS.map((c) => (
                <li key={c} className="tag">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid--3 mt-xl">
            <FactCard value="Ontario" label="Base of operations" note="Canadian-based sales, integration and support." />
            <FactCard value="Neutral" label="Platform stance" note="We recommend the platform that fits the task." delay={80} />
            <FactCard value="Evidence" label="Decision basis" note="Feasibility results before capital commitment." delay={160} />
          </div>
        </div>
      </section>

      <section className="band band--dark band--tight">
        <div className="container">
          <CtaBand
            title="Looking for a robot at home rather than at work?"
            body="Humoletics Home is a proposed Humanoid-as-a-Service rental offering for households — recovery support, independent living, fitness coaching and everyday assistance, without a purchase."
            actions={
              <Link to="/home" className="btn">
                Humoletics Home
              </Link>
            }
          />
        </div>
      </section>

      <section className="band band--dark">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Straight answers" title="Commercial questions" />
          <Faq
            items={[
              {
                q: 'Can I buy a humanoid robot from you today?',
                a: 'Not yet. HUMOLETICS is in development and our commercial supply arrangements are still being established. We can begin the conversation now, understand your application, and be ready when supply is in place.',
              },
              {
                q: 'Which manufacturers do you work with?',
                a: 'We are evaluating leading humanoid platforms for Canadian deployment and have not finalised our supply relationships. We are deliberately manufacturer-neutral and will publish the platforms we work with once agreements are confirmed rather than implying partnerships we do not have.',
              },
              {
                q: 'What does a feasibility study involve?',
                a: 'We define the task with you, recreate it under controlled conditions, evaluate which platforms are plausible, and report on performance, consistency, safety considerations and the practical constraints we found. See HUMOLETICS Labs for the full workflow.',
              },
              {
                q: 'What if the answer is that a humanoid will not work?',
                a: 'Then that is the answer we give you, with the evidence behind it. A negative feasibility result delivered early is worth considerably more than an optimistic one delivered after purchase.',
              },
              {
                q: 'Do you offer leasing rather than purchase?',
                a: 'Leasing and Robot-as-a-Service models are part of the commercial offering we are developing, for organizations that want capability without a capital purchase. Terms are not yet set.',
              },
            ]}
          />
        </div>
      </section>

      <Finale
        title="Bring us the task."
        sub="Tell us what the job is. We will tell you honestly whether a humanoid can do it — and what it would take."
        actions={
          <>
            <Link to="/contact" className="btn">
              Discuss an Application
            </Link>
            <Link to="/labs" className="btn btn--ghost">
              How testing works
            </Link>
          </>
        }
      />
    </>
  )
}
