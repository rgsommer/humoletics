import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { PageHero, Finale, Notice, CtaBand } from '../components/Blocks'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import Reveal from '../components/Reveal'

const GROUPS = [
  {
    id: 'manufacturers',
    eyebrow: '01',
    title: 'Robotics manufacturers',
    lede: 'A Canadian demonstration, evaluation and commercialization channel for your humanoid platform.',
    points: [
      'Continuous public exposure to a Canadian audience — consumers, businesses, schools and government',
      'A permanent evaluation environment where your platform is assessed against real commercial tasks',
      'Commercial pipeline development: feasibility studies, pilots, sales, leasing and integration',
      'Structured performance and failure-mode feedback from sustained real-world use',
      'Canadian sales, integration, training and support capability without building it yourself',
    ],
  },
  {
    id: 'technology',
    eyebrow: '02',
    title: 'Technology companies',
    lede: 'The systems that make an interactive humanoid venue work are a product in their own right.',
    points: [
      'Perception, tracking, timing and scoring systems for competitive challenges',
      'Safety, sensing and zone-management technology for public robot operation',
      'Participant profiles, leaderboards and mobile experience software',
      'Control and application-layer tooling developed with HUMOLETICS Labs',
      'Display, media and immersive technology for the experience environment',
    ],
  },
  {
    id: 'education',
    eyebrow: '03',
    title: 'Colleges & universities',
    lede: 'Shared access to humanoid platforms, real applications and a stream of student-facing work.',
    points: [
      'Applied research collaboration in humanoid capability, control and human-robot interaction',
      'Movement, kinesiology, gerontology and rehabilitation research through HUMOLETICS Active Aging',
      'Capstone and student projects drawn from live commercial applications',
      'Co-op placements and graduate employment pathways',
      'Curriculum collaboration for robotics, mechatronics, automation and AI programs',
      'Joint funding applications for applied research and commercialization programs',
    ],
  },
  {
    id: 'commercial',
    eyebrow: '04',
    title: 'Commercial partners',
    lede: 'Organizations with a task worth testing, or a workforce worth preparing.',
    points: [
      'Manufacturers and warehouses interested in early humanoid pilots',
      'Logistics operators evaluating humanoid handling applications',
      'Recreation and fitness organizations exploring humanoid-led coaching',
      'Entertainment operators interested in the experience format',
      'Corporate innovation teams seeking a credible robotics evaluation partner',
    ],
  },
  {
    id: 'venues',
    eyebrow: '05',
    title: 'Venue partners',
    lede: 'Space, footfall and a reason for people to come back.',
    points: [
      'Shopping centres and retail landlords seeking a genuine destination attraction',
      'Entertainment and leisure venues looking for a differentiated draw',
      'Industrial and flex space suitable for a permanent experience and test facility',
      'Pop-up hosts for the first Ontario activations',
      'Municipal and community venues interested in public robotics access',
    ],
  },
  {
    id: 'investment',
    eyebrow: '06',
    title: 'Sponsors, investors & innovation agencies',
    lede: 'Early involvement in a Canadian humanoid robotics venture spanning experience, commercial deployment and software IP.',
    points: [
      'Municipalities and regional economic development organizations',
      'Government innovation, commercialization and productivity programs',
      'Sponsors seeking association with Canadian technology and STEM outcomes',
      'Investors interested in robotics adoption, embodied AI and scalable experience concepts',
      'Programs focused on workforce development and manufacturing productivity',
    ],
  },
]

export default function Partners() {
  useSeo({
    title: 'Partners | HUMOLETICS — Founding Partnerships in Canadian Humanoid Robotics',
    description:
      'HUMOLETICS is exploring founding partnerships with robotics manufacturers, technology companies, colleges and universities, venues, municipalities, government innovation agencies, sponsors and investors.',
    path: '/partners',
  })

  return (
    <>
      <PageHero
        breadcrumb="Partners"
        eyebrow="Founding partnerships"
        title="Help build the first Humoletics experience."
        lede="HUMOLETICS is early, and we are open about that. Founding partnerships are being explored now — the point of joining at this stage is that the concept is still being shaped, and partners help shape it."
        facts={['Manufacturers', 'Technology', 'Post-secondary', 'Venues', 'Municipalities', 'Investors']}
        actions={
          <>
            <a href="#enquiry" className="btn">
              Become a Founding Partner
            </a>
            <Link to="/about" className="btn btn--ghost">
              About HUMOLETICS
            </Link>
          </>
        }
      />

      <section className="band band--dark band--grid">
        <div className="container">
          <SectionHeading
            eyebrow="Why now"
            title="The window where a partner still changes the outcome."
            layout="split"
            lede="Humanoid robotics is at the point where the technology is real but public and commercial adoption in Canada has barely started. HUMOLETICS is being built to sit exactly in that gap — the place where people meet these machines, and where organizations decide what to do about them."
          />

          <div className="grid grid--3">
            <Reveal>
              <div className="card">
                <span className="card__index">Public adoption</span>
                <h3 className="card__title">A front door for the technology</h3>
                <p className="card__body">
                  Most Canadians will form their opinion of humanoid robots from a headline. A place
                  to meet one in person changes that conversation entirely.
                </p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="card">
                <span className="card__index">Commercialization</span>
                <h3 className="card__title">Evidence before capital</h3>
                <p className="card__body">
                  Feasibility testing on real tasks is the missing step between manufacturer claims
                  and Canadian deployment decisions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="card">
                <span className="card__index">Canadian IP</span>
                <h3 className="card__title">Software, not just hardware</h3>
                <p className="card__body">
                  The application layer, scoring systems and interfaces are Canadian-developed
                  software with export potential beyond any single robot platform.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {GROUPS.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={`band ${i % 2 === 0 ? 'band--dark-alt' : 'band--dark'}`}
        >
          <div className="container">
            <div className="split split--top">
              <div>
                <p className={`eyebrow ${i % 2 ? 'eyebrow--cyan' : ''}`}>Partner type {group.eyebrow}</p>
                <h2 className="h2">{group.title}</h2>
                <p className="lede mt-m">{group.lede}</p>
              </div>
              <div>
                <ul className={`check-list ${i % 2 ? 'check-list--cyan' : ''}`}>
                  {group.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="btn-row">
                  <a href="#enquiry" className="link-arrow">
                    Start a conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="band band--light band--grid">
        <div className="container">
          <CtaBand
            title="The Phase I project is where a partnership actually starts."
            body="A proposed $500,000, 12–18 month Ontario initiative: platform evaluation, Canadian software development, computer-vision measurement, safety protocols, industrial application pilots and a public pilot. The full budget and workstreams are published."
            actions={
              <>
                <Link to="/phase-one" className="btn">
                  See HUMOLETICS Phase I
                </Link>
                <a href="#enquiry" className="btn btn--ghost">
                  Request the brief
                </a>
              </>
            }
          />
        </div>
      </section>

      <section className="band band--light">
        <div className="container">
          <Notice tag="Honest position">
            HUMOLETICS has no permanent facility, no confirmed manufacturer agreement, no approved
            government funding and no operating locations. What exists is a defined concept, a
            business structure, and a founder actively seeking the partners required to build it. We
            would rather state that plainly than have you discover it in a second meeting.
          </Notice>
        </div>
      </section>

      <section className="band band--light band--grid" id="enquiry">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Partner enquiry"
            title="Tell us where you fit."
            lede="Whether you build humanoid platforms, run a venue, teach robotics, fund innovation or have a plant floor worth testing — start here and we will come back with a straight answer about what a partnership could look like."
          />
          <InquiryForm
            id="partners"
            title={null}
            defaultInterest="Become a technology partner"
          />
        </div>
      </section>

      <Finale
        title="Build it with us."
        sub="The first Humoletics experience will be built by the partners who decide to be there at the start."
        actions={
          <>
            <a href="#enquiry" className="btn">
              Become a Founding Partner
            </a>
            <Link to="/contact" className="btn btn--ghost">
              General contact
            </Link>
          </>
        }
      />
    </>
  )
}
