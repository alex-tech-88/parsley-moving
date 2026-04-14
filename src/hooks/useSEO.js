import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Parsley Moving'
const OG_IMAGE = 'https://parsleymoving.com/og-image.jpg'
const DEFAULT_DESC = 'Parsley Moving — professional moving services in the Bay Area. Residential, commercial, and specialty moves 7 days a week.'

export function SEO({ title, description, canonical, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const desc = description || DEFAULT_DESC
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}