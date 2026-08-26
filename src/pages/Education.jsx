import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import { Card, FactCard } from '../components/Cards'
import Reveal from '../components/Reveal'

export default function Education() {
  useSeo({
    title: 'Education | HUMOLETICS — School, STEM & Post-Secondary Robotics Programs',
    description:
      'Humanoid robotics education programs in development for Ontario schools, colleges, universities, STEM organizations and robotics clubs — demonstrations, workshops, student competitions and career exploration.',
    path: '/education',
  })

  return (
    <>
      <PageHero
        breadcrumb="Education"
        eyebrow="Humoletics Education"
        title="Tomorrow's workforce should meet tomorrow's machines."
        lede="Students are being prepared for a working life alongside machines most of them have never stood next to. HUMOLETICS Education is being developed to close that gap — with programs built around a humanoid robot in the room, not a video of one."
        facts={['Schools', 'Colleges & universities', 'STEM groups', 'Robotics clubs']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Enquire about a program
            </Link>
            <Link to="/experience" className="btn btn--ghost">
              The Experience
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Programs in development"
            title="Built around what students can actually do."
            layout="split"
            lede="A demonstration holds a room for ten minutes. Doing something holds it for an hour. Programs are being designed so students watch, ask, try and measure — in that order."
          />

          <div className="grid grid--3">
            <Card index="01" title="School visits">
              Group visits for elementary and secondary students, structured by grade level, with
              live humanoid demonstrations and supervised participation.
            </Card>
            <Card index="02" title="Humanoid demonstrations" delay={70}>
              Walking, balance, manipulation and recovery — shown in person, at full scale, with
              explanation of what is happening and why it is hard.
            </Card>
            <Card index="03" title="Robotics education" delay={140}>
              Sessions on how humanoid robots sense, decide and move, pitched at the level of the
              group in front of us.
            </Card>
            <Card index="04" title="AI & embodied intelligence" delay={210}>
              What changes when an AI system has a body: perception, physical consequence, and the
              gap between predicting an action and performing one.
            </Card>
            <Card index="05" title="Coding & robotics workshops" delay={280}>
              Hands-on workshops connecting code students write to movement they can watch happen.
            </Card>
            <Card index="06" title="Student competitions" delay={350}>
              Class-against-class and school-against-school challenges using the same standardized
              events as the HUMOLETICS Arena.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow eyebrow--cyan">Post-secondary</p>
              <h2 className="h1">Colleges and universities.</h2>
              <p className="body-copy mt-m">
                Post-secondary institutions are among the partners we most want to work with. A
                humanoid platform, a test cell and a stream of real commercial applications is a
                genuinely useful teaching and research resource — and it is expensive for any single
                department to assemble alone.
              </p>
              <ul className="check-list check-list--cyan mt-m">
                <li><strong>Applied research collaboration</strong> on humanoid capability, control and human-robot interaction.</li>
                <li><strong>Capstone and student projects</strong> using real applications from HUMOLETICS Labs.</li>
                <li><strong>Co-op and placement</strong> opportunities in robotics integration, controls, software and operations.</li>
                <li><strong>Curriculum collaboration</strong> for robotics, mechatronics, automation and AI programs.</li>
                <li><strong>Shared platform access</strong> for teaching and research where arrangements allow.</li>
              </ul>
              <div className="btn-row">
                <Link to="/partners" className="btn">
                  Institutional partnerships
                </Link>
              </div>
            </div>

            <div className="split__media">
              <div className="grid grid--2">
                <FactCard value="K–12" label="School programs" note="Elementary and secondary group visits." />
                <FactCard value="Post-sec" label="Collaboration" note="Research, capstones and co-op placements." delay={80} />
                <FactCard value="Clubs" label="Robotics groups" note="Sessions for robotics clubs and STEM organizations." delay={160} />
                <FactCard value="Careers" label="Pathways" note="Technician, controls, integration and operations roles." delay={240} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Career exploration"
            title="The jobs this creates are the point."
            layout="split"
            lede="Every humanoid deployment needs people to specify it, integrate it, operate it, maintain it and interpret what it produces. Those are skilled Canadian jobs, and most students have never heard them described."
          />

          <Reveal>
            <ul className="tag-list">
              {[
                'Robotics technician',
                'Integration engineering',
                'Controls & automation',
                'Applied AI & perception',
                'Safety engineering',
                'Operations & supervision',
                'Data & performance analysis',
                'Field service & support',
                'Application development',
                'Project management',
              ].map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-l">
            <CtaBand
              title="Planning a visit for your school or program?"
              body="Tell us the grade or year level, group size, subject links and what you want students to walk away with. We will tell you honestly what is available on your timeline."
              actions={
                <>
                  <Link to="/contact" className="btn">
                    Education &amp; Groups
                  </Link>
                  <Link to="/events" className="btn btn--ghost">
                    Bring us to you
                  </Link>
                </>
              }
            />
          </div>

          <div className="mt-l">
            <Notice tag="Status">
              Education programs are in development and are not yet bookable. Curriculum links,
              session formats, group sizes and pricing are being developed with educator input — if
              you teach in this space, we would genuinely like to hear from you while it is still
              being shaped.
            </Notice>
          </div>
        </div>
      </section>

      <Finale
        title="Show them the machine."
        sub="Not a slide about it. Not a video of it. The machine, moving, in the same room."
        actions={
          <>
            <Link to="/contact" className="btn">
              Enquire about a program
            </Link>
            <Link to="/partners" className="btn btn--ghost">
              Institutional partnerships
            </Link>
          </>
        }
      />
    </>
  )
}
