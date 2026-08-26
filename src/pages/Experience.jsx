import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Faq, Finale, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import { Card, FactCard } from '../components/Cards'

export default function Experience() {
  useSeo({
    title: 'Experience | HUMOLETICS — Meet Humanoid Robots in Person',
    description:
      'A public interactive humanoid robotics experience in development in Ontario. Meet humanoid robots, watch live demonstrations, take on controlled challenges and see embodied AI up close.',
    path: '/experience',
  })

  return (
    <>
      <PageHero
        breadcrumb="Experience"
        eyebrow="Humoletics Experience"
        title="Experience the future physically."
        lede="Video does not prepare you for the moment a humanoid robot turns, steadies itself and walks toward you. HUMOLETICS is being designed as a place where that happens in person — and where you get to do something about it."
        facts={['Public visits', 'Families & groups', 'Live demonstrations', 'Pop-up events first']}
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/arena" className="btn btn--ghost">
              See the Arena
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="What a visit is meant to feel like"
            title="Alive, not on display."
            layout="split"
            lede="Most places that show you robotics show you a case, a placard and a looping video. We are building the opposite: machines that move while you are standing there, staff who can explain exactly what you are watching, and challenges you can actually enter."
          />

          <div className="grid grid--3">
            <Card index="01" title="Meet a humanoid">
              Stand beside one. Watch it balance, walk, reach, pick something up and recover from a
              nudge. Scale is the part video never conveys.
            </Card>
            <Card index="02" title="Watch it work" delay={70}>
              Scheduled demonstrations showing manipulation, navigation, handoffs and the kind of
              repetitive task a business would actually assign.
            </Card>
            <Card index="03" title="Interact" delay={140}>
              Supervised interaction sessions — speech, gesture, handover and simple collaborative
              tasks, within defined operating limits.
            </Card>
            <Card index="04" title="Take a challenge" delay={210}>
              Step into the Arena and compete in a controlled physical challenge scaled to you.
              Reaction, agility, balance, sprint.
            </Card>
            <Card index="05" title="Understand it" delay={280}>
              How does it see? How does it decide? What is it actually bad at? Explanation aimed at
              curious adults and curious nine-year-olds alike.
            </Card>
            <Card index="06" title="See what is next" delay={350}>
              New platforms as they reach Canada, and the applications being developed in
              HUMOLETICS Labs.
            </Card>
          </div>
        </div>
      </section>

      <section className="band band--dark-alt">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Who it is for</p>
              <h2 className="h1">Bring the family. Bring the class. Bring the team.</h2>
              <p className="body-copy mt-m">
                The experience is being designed to work for a curious ten-year-old and a plant
                manager on the same afternoon — because both of them are about to share a workplace
                with these machines.
              </p>
              <ul className="check-list mt-m">
                <li><strong>Families</strong> — challenges scaled by age, with something for every member to attempt.</li>
                <li><strong>School and youth groups</strong> — structured visits linked to curriculum outcomes.</li>
                <li><strong>Clubs and community groups</strong> — robotics clubs, sports teams, scouts, seniors&rsquo; groups.</li>
                <li><strong>Corporate teams</strong> — offsites and innovation days with a commercial track available.</li>
                <li><strong>Individuals</strong> — including people who simply want to race a robot once.</li>
              </ul>
              <div className="btn-row">
                <Link to="/education" className="btn btn--ghost">
                  School &amp; group programs
                </Link>
                <Link to="/events" className="btn btn--ghost">
                  Private &amp; corporate events
                </Link>
              </div>
            </div>

            <div className="split__media">
              <div className="grid grid--2">
                <FactCard value="Pop-up" label="First format" note="Partner-hosted events while a permanent site is secured." />
                <FactCard value="Ontario" label="Launch market" note="The first HUMOLETICS experiences are planned here." delay={80} />
                <FactCard value="Supervised" label="Every interaction" note="Trained staff present for all robot activity." delay={160} />
                <FactCard value="All ages" label="Designed for" note="Challenge levels scale to the participant." delay={240} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <SectionHeading
            eyebrow="Before the doors open"
            title="Pop-ups come first."
            layout="split"
            lede="A permanent HUMOLETICS venue is the goal, not the starting point. The first version of HUMOLETICS is planned to travel — appearing at partner venues, shopping centres, festivals, conferences and campuses across Ontario."
          />

          <div className="grid grid--4">
            <Card index="Malls" title="Shopping-centre activations">
              High-traffic space where thousands of people can meet a humanoid without planning a
              trip around it.
            </Card>
            <Card index="Events" title="Festivals &amp; fairs" delay={70}>
              Public events where a Human vs. Humanoid challenge draws a crowd and a queue.
            </Card>
            <Card index="Campus" title="Campuses &amp; schools" delay={140}>
              Travelling demonstrations for students who would otherwise never stand next to one.
            </Card>
            <Card index="Trade" title="Conferences &amp; trade shows" delay={210}>
              Commercial audiences, with the Labs and Robotics teams available for serious
              conversations.
            </Card>
          </div>

          <div className="mt-l">
            <CtaBand
              title="Want HUMOLETICS at your venue or event?"
              body="We are actively looking for venue partners and event hosts for the first Ontario pop-ups."
              actions={
                <>
                  <Link to="/events" className="btn">
                    Events &amp; Pop-ups
                  </Link>
                  <Link to="/partners" className="btn btn--ghost">
                    Become a venue partner
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Straight answers" title="Common questions" />
          <Faq
            items={[
              {
                q: 'Can I visit right now?',
                a: 'Not yet. HUMOLETICS is a concept in development and there is no permanent facility open to the public. Join the early-access list and we will tell you when the first Ontario events are scheduled.',
              },
              {
                q: 'Which robots will be there?',
                a: 'We are evaluating leading humanoid platforms for Canadian deployment and have not finalised which will appear. We are manufacturer-neutral by design, and we will publish what is actually on site rather than what we hope will be.',
              },
              {
                q: 'Is it safe to be near a humanoid robot?',
                a: 'All activities are designed to be controlled and supervised, with defined operating limits, managed separation and trained staff present. Challenges are non-contact by design. Safety design is a core part of the concept, not an afterthought.',
              },
              {
                q: 'Is this a museum?',
                a: 'No. Museums are built around objects that stay still. HUMOLETICS is built around machines that move and people who participate.',
              },
              {
                q: 'How much will it cost?',
                a: 'Pricing has not been set. It will depend on the format — pop-up event, permanent venue, group booking or commercial engagement.',
              },
            ]}
          />
        </div>
      </section>

      <Finale
        title="Come and meet one."
        sub="Early-access members will be first to hear when and where the first HUMOLETICS experiences open in Ontario."
        actions={
          <>
            <Link to="/contact" className="btn">
              Join Early Access
            </Link>
            <Link to="/arena" className="btn btn--ghost">
              Explore the Arena
            </Link>
          </>
        }
      />
    </>
  )
}
