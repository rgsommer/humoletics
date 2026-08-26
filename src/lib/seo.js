import { useEffect } from 'react'

const SITE = 'https://humoletics.com'

function upsertMeta(keyAttr, keyValue, content) {
  let el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(keyAttr, keyValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Keeps <title>, description, canonical and social tags in sync per route.
 * Deliberately dependency-free — no react-helmet needed for a site this size.
 */
export function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE}${path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertCanonical(url)
  }, [title, description, path])
}
