import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Flow, Chain, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import { Card } from '../components/Cards'
import Reveal from '../components/Reveal'

export default function Labs() {
  useSeo({
    title: 'Labs | HUMOLETICS — Humanoid Application Testing & Development',
    description:
      'HUMOLETICS Labs recreates real commercial tasks and evaluates whether a humanoid robot can perform them — feasibility studies, platform evaluation, application development, safety testing and pilots in Ontario, Canada.',
    path: '/labs',
  })

  return (
    <>
      <PageHero
        breadcrumb="Labs"
        eyebrow="Humoletics Labs"
        title="Bring us the task."
        lede="You have a job somebody does a thousand times a day. We recreate it, put current humanoid platforms against it, and give you evidence instead of a brochure. Whether the answer is yes or no, you will know why."
        facts={['Feasibility studies', 'Task recreation', 'Application development', 'Pilots']}
        actions={
          <>
            <a href="#brief" className="btn">
              Submit a task
            </a>
            <Link to="/robotics" className="btn btn--ghost">
              Commercial Robotics
            </Link>
          </>
        }
      />

      <section className="band band--light band--grid">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">A worked example</p>
              <h2 className="h1">Bin to bench. Nine hundred times a shift.</h2>
              <p className="body-copy mt-m">
                A manufacturer has an employee moving parts from a bin to a workstation. It is
                repetitive, it is hard to staff, and it is the sort of thing everyone assumes a
                robot should already be doing.
              </p>
              <p className="body-copy">
                The company brings us the process — the actual parts, the actual bin, the actual
                bench height, the actual cycle time. We recreate that task in a test cell and
                evaluate whether a humanoid robot can genuinely perform it: reliably, repeatably,
                at a rate that matters, within a safety envelope that holds.
              </p>
              <p className="body-copy">
                Sometimes the answer is a clear yes. Sometimes it is yes with a redesigned bin.
                Sometimes it is no, and a fixed arm was always the right answer. All three are
                useful, and all three are cheaper to learn here than on your floor.
              </p>
              <div className="btn-row">
                <a href="#brief" className="btn">
                  Bring us your task
                </a>
              </div>
            </div>

            <div className="split__media">
              <Reveal>
                <div className="panel">
                  <div className="panel__head">
                    <span>Feasibility report</span>
                    <span>Illustrative structure</span>
                  </div>
                  <div className="panel__body">
                    <div className="stat-row">
                      <span className="stat-row__label">Task definition</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Documented</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Cycle time achieved</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Measured</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Success rate over runs</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Recorded</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Failure modes</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Catalogued</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Safety considerations</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Assessed</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-row__label">Recommendation</span>
                      <span className="stat-row__value" style={{ fontSize: '1.05rem' }}>Plain English</span>
                    </div>
                  </div>
                </div>
                <p className="illustrative-note">
                  Indicative report structure. Scope is agreed per engagement.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Application workflow"
            title="Seven steps from question to deployment."
            layout="split"
            lede="Each step produces something you can act on. You can stop at any of them, and stopping early with a clear answer is a legitimate result rather than a failed project."
          />

          <Flow
            wide
            steps={[
              { title: 'Define the job', body: 'Task, volumes, cycle time, tolerances, environment and constraints — documented properly.' },
              { title: 'Recreate the task', body: 'We rebuild it in a controlled test cell using your parts and your real conditions.' },
              { title: 'Evaluate platforms', body: 'Assess which humanoid platforms are plausible candidates for this specific job.' },
              { title: 'Develop the application', body: 'Build the control and application layer — the part that turns capability into a working task.' },
              { title: 'Test performance & safety', body: 'Run it repeatedly. Measure success rate, cycle time, failure modes and safety envelope.' },
              { title: 'Pilot', body: 'Operate in a controlled setting in your environment, with results measured against the study.' },
              { title: 'Deploy', body: 'Integration, operator training and ongoing support through HUMOLETICS Robotics.' },
            ]}
          />

          <div className="mt-l">
            <Reveal>
              <p className="mono text-muted">The short version</p>
              <div className="mt-s">
                <Chain nodes={['Demo', 'Test', 'Pilot', 'Deploy']} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What we build"
            title="The layer between a capable machine and a useful one."
            layout="split"
            lede="A humanoid platform arrives able to walk, balance and manipulate. It does not arrive knowing your job. The distance between those two things is where the real work sits — and where Canadian software and IP can be created."
          />

          <div className="grid grid--3">
            <Card index="01" title="Task application layer">
              The logic that turns a general-purpose humanoid into a machine that performs your
              specific task, in your specific environment.
            </Card>
            <Card index="02" title="Operator interfaces" delay={70}>
              Interfaces designed for the people who will actually run the system — supervisors and
              operators, not roboticists.
            </Card>
            <Card index="03" title="Scoring & telemetry" delay={140}>
              Performance measurement, logging and reporting, so a deployment can be assessed on
              evidence rather than impressions.
            </Card>
            <Card index="04" title="Safety configuration" delay={210}>
              Defining and validating the operating envelope for the task, developed with the
              platform manufacturer&rsquo;s safety framework.
            </Card>
            <Card index="05" title="Integration components" delay={280}>
              Fixturing, workstation adaptation, handover points and connections to the systems you
              already run.
            </Card>
            <Card index="06" title="Application-specific IP" delay={350}>
              Where an engagement produces novel methods or software, there is Canadian IP worth
              developing and retaining. Ownership is agreed per engagement.
            </Card>
          </div>

          <div className="mt-l">
            <CtaBand
              title="Labs is a Phase I workstream."
              body="The industrial application lab is one of six workstreams in the proposed $500,000 HUMOLETICS Phase I project — alongside platform evaluation, Canadian software development, computer-vision measurement, safety protocols and a public pilot."
              actions={
                <>
                  <Link to="/phase-one" className="btn">
                    See HUMOLETICS Phase I
                  </Link>
                  <Link to="/innovation" className="btn btn--ghost">
                    Innovation &amp; Partnerships
                  </Link>
                </>
              }
            />
          </div>

          <div className="mt-l">
            <Notice tag="Status">
              HUMOLETICS Labs is a capability in development. Our test-cell facility, platform access
              and engagement terms are being established now. We are speaking with organizations
              that want to be among the first applications evaluated — and we will be clear about
              what we can and cannot do at the time you ask.
            </Notice>
          </div>
        </div>
      </section>

      <section className="band band--light" id="brief">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Submit a task"
            title="What job would you give a humanoid?"
            lede="Describe the task in plain terms — what happens, how often, and why it is a problem. We will come back with an honest first assessment and what a feasibility study would involve."
          />
          <InquiryForm
            id="labs"
            title={null}
            defaultInterest="Test a business application"
          />
        </div>
      </section>

      <Finale
        title="We test it. You decide."
        sub="Evidence about your own task, on your own parts, before a purchase order exists."
        actions={
          <>
            <a href="#brief" className="btn">
              Discuss an Application
            </a>
            <Link to="/robotics" className="btn btn--ghost">
              Commercial Robotics
            </Link>
          </>
        }
      />
    </>
  )
}
