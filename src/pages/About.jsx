import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, Layers, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import { Card, FactCard } from '../components/Cards'
import Reveal from '../components/Reveal'

export default function About() {
  useSeo({
    title: 'About | HUMOLETICS — Humanoid Robotics Venture in Ontario, Canada',
    description:
      'HUMOLETICS is being developed in Ontario, Canada by 10323594 Canada Corp. Our mission is to create meaningful ways for humans and humanoid robots to compete, train, learn and work together.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About"
        title="Where human potential meets humanoid technology."
        lede="HUMOLETICS is being developed in Ontario, Canada by 10323594 Canada Corp. The name comes from humanoid and athletics — because the most direct way to understand what these machines can do is to physically go up against one."
        facts={['Ontario, Canada', '10323594 Canada Corp.', 'Concept in development']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
            <Link to="/partners" className="btn btn--ghost">
              Partner with us
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Mission</p>
              <h2 className="h1">
                To create meaningful ways for humans and humanoid robots to compete, train, learn and
                work together.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                Humanoid robots are arriving in the physical world faster than public understanding
                of them is. Most people&rsquo;s entire experience of a humanoid robot is a launch
                video, and most organizations&rsquo; entire experience is a specification sheet.
                Neither tells you what these machines are actually like.
              </p>
              <p className="body-copy">
                HUMOLETICS is being built on a simple conviction: the fastest way to understand a
                humanoid robot is to stand next to one and try to beat it. That works for a
                ten-year-old at a shopping-centre pop-up, and it works for a plant manager watching
                a machine attempt the task their team does nine hundred times a shift.
              </p>
              <p className="body-copy">
                The same building can serve both. That is the concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt band--tight">
        <div className="container">
          <SectionHeading
            eyebrow="How it fits together"
            title="Three layers."
            layout="split"
            lede="Experience, commercialization and innovation. Each supports the others, and the proposed Phase I project is where all three are built at once."
          />
          <Layers
            items={[
              {
                num: 'Layer 01',
                name: 'Experience',
                desc: 'People experience, compete and train with humanoids.',
              },
              {
                num: 'Layer 02',
                name: 'Commercialization',
                desc: 'Canadian businesses test, purchase and deploy humanoid robotics.',
              },
              {
                num: 'Layer 03',
                name: 'Innovation',
                desc: 'HUMOLETICS develops Canadian software, applications, safety systems and human–humanoid interaction technology.',
              },
            ]}
          />
          <div className="mt-l">
            <CtaBand
              title="HUMOLETICS Phase I"
              body="A proposed $500,000, 12–18 month Ontario innovation project — published in full, including workstreams and budget."
              actions={
                <Link to="/phase-one" className="btn">
                  See the Phase I project
                </Link>
              }
            />
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What we are building"
            title="One venture, seven connected areas."
            layout="split"
            lede="Each area supports the others. The public experience funds and populates the commercial capability; the commercial work keeps the experience technically credible."
          />

          <div className="grid grid--3">
            <Card index="Arena" title="Humoletics Arena" to="/arena" cta="Explore">
              Human vs. Humanoid competition with adaptive difficulty, scoring and personal records.
            </Card>
            <Card index="Performance" title="Humoletics Performance" to="/performance" cta="Explore" delay={60}>
              Humanoid-led exercise coaching, progression tracking and group challenges.
            </Card>
            <Card index="Experience" title="Humoletics Experience" to="/experience" cta="Explore" delay={120}>
              The public interactive robotics experience — demonstrations, interaction and access.
            </Card>
            <Card index="Labs" title="Humoletics Labs" to="/labs" cta="Explore" delay={180}>
              Commercial task recreation, feasibility studies and application development.
            </Card>
            <Card index="Robotics" title="Humoletics Robotics" to="/robotics" cta="Explore" delay={240}>
              Manufacturer-neutral sales, leasing, integration, training and support.
            </Card>
            <Card index="Education" title="Humoletics Education" to="/education" cta="Explore" delay={300}>
              School, STEM and post-secondary programming and career exploration.
            </Card>
            <Card index="Active Aging" title="Active Aging & Rehabilitation" to="/active-aging" cta="Explore" delay={360}>
              Humanoid movement partners for older adults, and a proposed rehabilitation
              research agenda pursued with qualified healthcare and academic partners.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Founder</p>
              <h2 className="h1">Richard Sommer</h2>
              <p className="body-copy mt-m">
                Founder, HUMOLETICS.
              </p>
              <p className="body-copy">
                Richard is developing HUMOLETICS from Ontario, Canada, with a background in building
                and shipping technology products. The venture began from a straightforward
                observation: humanoid robots are becoming commercially real, almost nobody in Canada
                has stood next to one, and there is no obvious place to go and find out what they
                can actually do.
              </p>
              <p className="body-copy">
                He is currently focused on securing the platform, venue, education and commercial
                partnerships needed to run the first HUMOLETICS experiences in Ontario.
              </p>
              <p className="form-note mt-m">
                This is a placeholder biography and will be expanded as the venture develops.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn">
                  Contact HUMOLETICS
                </Link>
              </div>
            </div>

            <div className="split__media">
              <div className="grid grid--2">
                <FactCard value="Ontario" label="Base" note="Where the venture is being developed." />
                <FactCard value="2026" label="Stage" note="Concept development and partnership formation." delay={80} />
                <FactCard value="7" label="Connected areas" note="Arena, Performance, Experience, Labs, Robotics, Education, Active Aging." delay={160} />
                <FactCard value="Neutral" label="Platform stance" note="No exclusive manufacturer relationship." delay={240} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <SectionHeading
            eyebrow="How we talk about ourselves"
            title="Ambitious about the plan. Accurate about the present."
            layout="split"
            lede="A venture at this stage can be exciting or it can be exaggerated, and the two are easy to confuse. We would rather be judged on what we actually build."
          />

          <div className="grid grid--2">
            <Reveal>
              <div className="card">
                <span className="card__index">What is true today</span>
                <ul className="check-list mt-s">
                  <li>HUMOLETICS is a defined concept in active development</li>
                  <li>It is being developed in Ontario by 10323594 Canada Corp.</li>
                  <li>Founding partnerships are being explored across several categories</li>
                  <li>The first experiences are planned as pop-up and partner-hosted events</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card">
                <span className="card__index">What is not true yet</span>
                <ul className="check-list check-list--cyan mt-s">
                  <li>There is no permanent facility and no open location</li>
                  <li>No manufacturer partnership is confirmed or announced</li>
                  <li>No government funding has been approved</li>
                  <li>No Humoletics league, leaderboard or multi-city network is operating</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-l">
            <Notice tag="Company">
              HUMOLETICS™ is a venture of 10323594 Canada Corp., Ontario, Canada. Descriptions of
              planned experiences, capabilities and locations on this site represent our intended
              development of the concept and are subject to change.
            </Notice>
          </div>
        </div>
      </section>

      <Finale
        title="Meet the machines changing work, sport and human performance."
        sub="HUMOLETICS is being built in Ontario. If you want to be part of it — as a visitor, a partner or a customer — this is the moment to say so."
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
