# humoletics-web

Marketing site for **HUMOLETICS™** — a humanoid robotics experience in development in Ontario,
Canada. A venture of 10323594 Canada Corp.

Deploys independently of the Curriculate frontend (intended for `humoletics.com`).

## Stack

React 18 + Vite 5 + React Router 6. No CSS framework — a token-based CSS architecture in
`src/styles/global.css`. Three runtime dependencies total.

```bash
npm install
npm run dev      # http://localhost:3200
npm run build    # → dist/
npm run preview
```

Also registered in the repo's `.claude/launch.json` as `humoletics-web`.

## Structure

```
src/
  App.jsx                 routes + scroll restoration
  lib/seo.js              per-route <title>/description/canonical/OG (no react-helmet)
  lib/hooks.js            useInView (scroll reveal), useCountUp (animated figures)
  styles/global.css       design system: tokens, bands, components, utilities
  components/
    Navbar.jsx            responsive nav + mobile drawer; exports NAV_LINKS
    Footer.jsx            site footer
    Logo.jsx              temporary text brand treatment (HUMO + LETICS) — replaceable
    HeroVisual.jsx        inline-SVG human vs. humanoid competition stage
    AgingVisual.jsx       its companionable counterpart — same pose, side by side, bright floor
    Scoreboard.jsx        illustrative Human vs. Humanoid result card
    CoachPanel.jsx        illustrative session-progression panel
    CompareCard.jsx       "the competitor is yesterday" — last session vs today's goal
    HomeVisual.jsx        the handover — assistance in an ordinary room
    Capability.jsx        CapabilityTiers + Limits — the Humoletics Home honesty spine
    HomeWaitlist.jsx      waitlist with a second path routing care orgs to Humoletics Care
    CoachDemo.jsx         animated humanoid-coach interface concept (replayable)
    BudgetChart.jsx       Phase I budget — sorted bars + part-to-whole strip + table view
    InquiryForm.jsx       validated enquiry form (all pages reuse it)
    SectionHeading.jsx    eyebrow + heading + lede, three layouts
    Cards.jsx             Card, Pillar, Metric, FactCard, Discipline, LocationCard
    Blocks.jsx            PageHero, Flow, Chain, Notice, CtaBand, Ticker, Finale, Faq,
                          Layers (the three-layer strip), VFlow (vertical value chain),
                          Pathway, StatusBoard, Principle, Questions (innovation page)
    Reveal.jsx            scroll-triggered reveal wrapper
  pages/                  one file per route
```

### Design system

Colour, type and spacing live as CSS custom properties on `:root`. Sections are **bands**
(`.band--dark`, `.band--dark-alt`, `.band--light`, `.band--white`) and each band redefines the
semantic tokens (`--text`, `--hairline`, `--card-bg`, `--field-border`…) for its own context, so
every component adapts automatically without variant props.

Two brand signals carry the core idea: `--human` (ember `#ff4d18`) and `--humanoid`
(signal cyan `#5ad2e6`).

`PageHero` also has a `tone="light"` variant (used by Active Aging) — the nav is
transparent at scroll 0, which only works over a dark hero, so any route added to
`LIGHT_HERO_ROUTES` in `Navbar.jsx` keeps the solid bar from the top of the page.

The Phase I budget chart carries its own three categorical hues, encoding spending
*group* (identity), never rank. They were checked with a colour-vision validator
against the light band surface — if you change them, re-validate rather than
eyeball it, and keep the group→hue mapping stable so filtering never repaints a
surviving bar.

All motion is CSS-driven and disabled under `prefers-reduced-motion: reduce`.

## Enquiry form

By default the form validates client-side and hands a pre-filled draft to the sender's mail
client (`hello@humoletics.com`) — there is no backend in this project.

To POST enquiries to an endpoint instead, set at build time:

```
VITE_INQUIRY_ENDPOINT=https://api.example.com/inquiries
```

The form then sends JSON (`name, organization, email, phone, city, interest, message, consent`)
and shows a success/failure state. A honeypot field filters basic bots.

### Navigation capacity

The desktop bar holds ten primary links and is already at the width of the 1220
container. `NAV_LINKS` in `Navbar.jsx` marks lower-priority destinations
`primary: false` — they appear in the mobile drawer, the footer and in-page
cross-links, but not the desktop bar. Adding an eleventh primary link overruns
the container at 1440; measure before adding one.

## Content rules

The site is written for a venture **in development**. Claims are deliberately constrained:

- no permanent facility, no open locations, no operating league or leaderboards
- no confirmed manufacturer partnership (manufacturer-neutral positioning throughout)
- no approved government funding
- no fabricated logos, testimonials, visitor numbers, press or team members
- every example figure (times, scores, performance levels, rep counts) is labelled illustrative
- Humoletics Home separates what platforms can do today, what is emerging, and what
  needs professional/regulatory validation — plus an explicit list of what a
  humanoid will *not* do (lift a person, prevent a fall, manage medication,
  provide treatment, replace a caregiver, handle an emergency)

Keep this in mind when editing copy — `Notice` blocks and `illustrative-note` text exist
specifically to hold that line.

## Deploying

`vercel.json` rewrites all paths to `/index.html` for client-side routing. `public/robots.txt`
and `public/sitemap.xml` assume the `humoletics.com` origin — update both if the domain changes,
along with the `SITE` constant in `src/lib/seo.js` and the absolute URLs in `index.html`.
