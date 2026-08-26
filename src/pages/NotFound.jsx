import { Link } from 'react-router-dom'
import { useSeo } from '../lib/seo'
import { NAV_LINKS } from '../components/Navbar'

export default function NotFound() {
  useSeo({
    title: 'Page not found | HUMOLETICS',
    description: 'The page you were looking for could not be found on the HUMOLETICS website.',
    path: '/404',
  })

  return (
    <section className="page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container page-hero__inner">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-display" style={{ maxWidth: '14ch' }}>
          Out of <span className="accent-human">lane</span>.
        </h1>
        <p className="page-hero__lede">
          That page does not exist. It may have been moved, or it may be part of the concept we have
          not built yet.
        </p>
        <div className="btn-row">
          <Link to="/" className="btn">
            Back to home
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Contact us
          </Link>
        </div>
        <ul className="tag-list" style={{ marginTop: 44 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="tag">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
