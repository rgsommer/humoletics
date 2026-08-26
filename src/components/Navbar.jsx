import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

/**
 * `primary: false` links appear in the mobile drawer, the footer and in-page
 * cross-links, but not in the desktop bar — eleven items overrun the container
 * at 1440 and compressing them further makes the whole bar unreadable.
 */
export const NAV_LINKS = [
  { to: '/experience', label: 'Experience' },
  { to: '/arena', label: 'Arena' },
  { to: '/performance', label: 'Performance' },
  { to: '/active-aging', label: 'Active Aging' },
  { to: '/home', label: 'At Home' },
  { to: '/robotics', label: 'Robotics' },
  { to: '/labs', label: 'Labs' },
  { to: '/education', label: 'Education' },
  { to: '/events', label: 'Events', primary: false },
  { to: '/partners', label: 'Partners' },
  { to: '/innovation', label: 'Innovation', primary: false },
  { to: '/about', label: 'About' },
]

const PRIMARY_LINKS = NAV_LINKS.filter((l) => l.primary !== false)

/**
 * Routes whose hero is light. The nav is transparent at the top of the page,
 * which only works over a dark hero — on these it stays solid from scroll 0 so
 * the logo and links keep their contrast.
 */
const LIGHT_HERO_ROUTES = new Set(['/active-aging'])

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const forceSolid = LIGHT_HERO_ROUTES.has(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the drawer on navigation
  useEffect(() => setOpen(false), [pathname])

  // lock body scroll + allow Escape to close
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled || open || forceSolid ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <Logo />

          <nav aria-label="Primary">
            <ul className="nav__links">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="nav__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/contact" className="btn btn--sm nav__cta">
            Early Access
          </Link>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {open && (
        <nav id="nav-drawer" className="nav__drawer" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--block">
            Join Early Access
          </Link>
        </nav>
      )}
    </>
  )
}
