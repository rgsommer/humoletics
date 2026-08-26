import { Link } from 'react-router-dom'
import Logo from './Logo'

const COLUMNS = [
  {
    title: 'Visit',
    links: [
      { to: '/experience', label: 'Experience' },
      { to: '/arena', label: 'Arena' },
      { to: '/performance', label: 'Performance' },
      { to: '/active-aging', label: 'Active Aging' },
      { to: '/home', label: 'Humoletics Home' },
      { to: '/education', label: 'Education' },
      { to: '/events', label: 'Events' },
    ],
  },
  {
    title: 'Commercial',
    links: [
      { to: '/robotics', label: 'Robotics' },
      { to: '/labs', label: 'Labs' },
      { to: '/partners', label: 'Partners' },
      { to: '/phase-one', label: 'Phase I project' },
      { to: '/contact', label: 'Discuss an Application' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact / Early Access' },
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo />
            <p className="footer__blurb">
              A humanoid robotics experience in development in Ontario, Canada — built so people
              and organizations can meet, test and compete with humanoid robots in person.
            </p>
            <p className="footer__legalname">
              HUMOLETICS™
              <br />
              A venture of 10323594 Canada Corp.
              <br />
              Ontario, Canada
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="footer__coltitle">{col.title}</h2>
              <ul className="footer__list">
                {col.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__tagline">
            HUMOLETICS™ — <b>Humans. Humanoids. Game On.</b>
          </p>
          <p>© {new Date().getFullYear()} 10323594 Canada Corp. — Concept in development</p>
        </div>
      </div>
    </footer>
  )
}
