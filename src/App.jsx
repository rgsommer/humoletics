import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Arena from './pages/Arena'
import Performance from './pages/Performance'
import ActiveAging from './pages/ActiveAging'
import Robotics from './pages/Robotics'
import Labs from './pages/Labs'
import Education from './pages/Education'
import Events from './pages/Events'
import Partners from './pages/Partners'
import About from './pages/About'
import Contact from './pages/Contact'
import PhaseOne from './pages/PhaseOne'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return // let in-page anchors work
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/active-aging" element={<ActiveAging />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/education" element={<Education />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/phase-one" element={<PhaseOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
