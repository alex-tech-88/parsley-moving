import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

const AREA_SEO = {
  'richmond':             { title: 'Movers in Richmond, CA | No Hidden Fees',                    description: 'Looking for movers in Richmond, CA? Fast and careful moving with transparent pricing. No hidden fees. Get your free quote today.' },
  'berkeley':             { title: 'Movers in Berkeley, CA | No Hidden Fees',                    description: 'Moving in Berkeley, CA? Fast and careful movers with no hidden fees. Reliable service and transparent pricing. Get your quote today.' },
  'oakland':              { title: 'Movers in Oakland, CA | Fast & Careful',                     description: 'Looking for movers in Oakland, CA? Professional and efficient moving with clear pricing. No hidden fees. Request a free quote.' },
  'albany':               { title: 'Movers in Albany, CA | No Hidden Fees',                      description: 'Need movers in Albany, CA? We provide fast and careful local moving with transparent pricing. No hidden fees. Get a quote today.' },
  'el-cerrito':           { title: 'Movers in El Cerrito, CA | Reliable & Professional',         description: 'Moving in El Cerrito, CA? Reliable and professional movers with honest pricing. No hidden fees. Contact us for a quote.' },
  'san-pablo':            { title: 'Movers in San Pablo, CA | Fast & Reliable',                  description: 'Need movers in San Pablo, CA? Fast and reliable moving with clear pricing and no hidden fees. Request your quote today.' },
  'pinole':               { title: 'Movers in Pinole, CA | No Hidden Fees',                      description: 'Looking for movers in Pinole, CA? Careful and efficient moving with transparent pricing. No hidden fees. Get a free quote today.' },
  'hercules':             { title: 'Movers in Hercules, CA | Reliable & Careful',                description: 'Moving in Hercules, CA? Reliable and careful movers with honest pricing. No hidden fees. Contact us for a quote today.' },
  'alameda':              { title: 'Movers in Alameda, CA | Fast & Professional',                description: 'Need movers in Alameda, CA? Professional and efficient moving with clear pricing. No hidden fees. Get your free quote today.' },
  'concord':              { title: 'Movers in Concord, CA | No Hidden Fees',                     description: 'Looking for movers in Concord, CA? Fast and careful moving with no hidden fees. Get a free quote from Parsley Moving today.' },
  'walnut-creek':         { title: 'Movers in Walnut Creek, CA | Fast & Careful',                description: 'Moving in Walnut Creek, CA? Reliable and professional movers with transparent pricing. No hidden fees. Request your quote today.' },
  'pleasant-hill':        { title: 'Movers in Pleasant Hill, CA | No Hidden Fees',               description: 'Need movers in Pleasant Hill, CA? We handle local moves quickly and carefully. No hidden fees. Get your free quote today.' },
  'martinez':             { title: 'Movers in Martinez, CA | Fast & Reliable',                   description: 'Planning a move in Martinez, CA? Fast and reliable moving service with clear pricing and no hidden fees. Contact us for a quote.' },
  'lafayette':            { title: 'Movers in Lafayette, CA | No Hidden Fees',                   description: 'Moving in Lafayette, CA? Careful and efficient movers with transparent pricing. No hidden fees. Get your free estimate today.' },
  'orinda':               { title: 'Movers in Orinda, CA | Careful & Professional',              description: 'Looking for movers in Orinda, CA? Professional and careful moving with honest pricing. No hidden fees. Request a quote today.' },
  'danville':             { title: 'Movers in Danville, CA | No Hidden Fees',                    description: 'Moving in Danville, CA? Careful and efficient movers with transparent pricing. No hidden fees. Get your free estimate today.' },
  'san-ramon':            { title: 'Movers in San Ramon, CA | Fast & Reliable',                  description: 'Looking for movers in San Ramon, CA? Fast and reliable moving with clear pricing. No hidden fees. Request your quote today.' },
  'dublin':               { title: 'Movers in Dublin, CA | No Hidden Fees',                      description: 'Need movers in Dublin, CA? Professional and careful local moving with transparent pricing. No hidden fees. Get a quote today.' },
  'pleasanton':           { title: 'Movers in Pleasanton, CA | Reliable & Professional',         description: 'Moving in Pleasanton, CA? Reliable and professional movers with honest pricing. No hidden fees. Contact us for a quote.' },
  'san-leandro':          { title: 'Movers in San Leandro, CA | Fast & Careful',                 description: 'Looking for movers in San Leandro, CA? Fast and careful moving with transparent pricing. No hidden fees. Get your free quote today.' },
  'san-francisco':        { title: 'Movers in San Francisco, CA | No Hidden Fees',               description: 'Moving in San Francisco, CA? Experienced movers handling city moves efficiently. No hidden fees. Get a fast and free quote today.' },
  'castro-valley':        { title: 'Movers in Castro Valley, CA | Reliable & Affordable',        description: 'Need movers in Castro Valley, CA? Reliable and careful moving with clear pricing. No hidden fees. Request a free quote today.' },
  'daly-city':            { title: 'Movers in Daly City, CA | Fast & Careful',                   description: 'Need movers in Daly City, CA? Reliable and careful moving with transparent pricing. No hidden fees. Request your quote today.' },
  'san-bruno':            { title: 'Movers in San Bruno, CA | No Hidden Fees',                   description: 'Looking for movers in San Bruno, CA? Fast and professional moving with clear pricing. No hidden fees. Get your estimate today.' },
  'south-san-francisco':  { title: 'Movers in South San Francisco, CA | Reliable & Professional',description: 'Moving in South San Francisco, CA? Efficient and careful movers with honest pricing. No hidden fees. Contact us for a quote.' },
  'san-mateo':            { title: 'Movers in San Mateo, CA | Fast & Professional',              description: 'Looking for movers in San Mateo, CA? Professional and efficient moving with clear pricing. No hidden fees. Get your free quote today.' },
  'fremont':              { title: 'Movers in Fremont, CA | No Hidden Fees',                     description: 'Looking for movers in Fremont, CA? Fast and reliable moving with transparent pricing. No hidden fees. Get your free quote today.' },
  'newark':               { title: 'Movers in Newark, CA | Fast & Careful',                      description: 'Moving in Newark, CA? Careful and efficient local movers with honest pricing. No hidden fees. Request a quote today.' },
  'union-city':           { title: 'Movers in Union City, CA | No Hidden Fees',                  description: 'Need movers in Union City, CA? Professional and fast service with transparent pricing. No hidden fees. Get your quote today.' },
  'hayward':              { title: 'Movers in Hayward, CA | Reliable & Affordable',              description: 'Moving in Hayward, CA? Reliable and careful movers with clear pricing. No hidden fees. Contact us for a free quote.' },
}

const SERVICE_SEO = {
  'local-moving':       { title: 'Local Movers in the Bay Area | No Hidden Fees',          description: 'Need local movers in the Bay Area? We provide fast and careful moving with transparent pricing and no hidden fees. Request your free quote today.' },
  'residential-moving': { title: 'Residential Movers in the Bay Area | Fast & Careful',    description: 'Looking for residential movers in the Bay Area? We handle home moves carefully with transparent pricing and no hidden fees. Get your free quote today.' },
  'commercial-moving':  { title: 'Commercial Movers in the Bay Area | Reliable & Efficient',description: 'Need commercial movers in the Bay Area? We relocate offices and businesses efficiently with clear pricing and no hidden fees. Request a quote today.' },
  'in-state-moving':    { title: 'In-State Movers in California | No Hidden Fees',          description: 'Planning an in-state move in California? We provide careful and reliable long-distance moving with transparent pricing and no hidden fees. Get a free quote today.' },
  'packing':            { title: 'Packing Services in the Bay Area | Careful & Professional',description: 'Need packing services in the Bay Area? We pack homes carefully using quality materials with clear pricing and no hidden fees. Request your quote today.' },
  'furniture':          { title: 'Furniture Movers in the Bay Area | Fast & Careful',       description: 'Looking for furniture movers in the Bay Area? We protect, wrap, and move furniture carefully with transparent pricing and no hidden fees. Get a quote today.' },
}

function generateHtml(html, { title, description, canonical }) {
  const fullTitle = `${title} | Parsley Moving`
  return html
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description}"`)
    .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonical}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${fullTitle}"`)
    .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${description}"`)
    .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${canonical}"`)
    .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${fullTitle}"`)
    .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${description}"`)
}

// Generate area pages
for (const [slug, seo] of Object.entries(AREA_SEO)) {
  const dir = resolve(distDir, 'areas', slug)
  mkdirSync(dir, { recursive: true })
  const html = generateHtml(template, { ...seo, canonical: `https://parsleymoving.com/areas/${slug}` })
  writeFileSync(resolve(dir, 'index.html'), html)
  console.log(`✅ /areas/${slug}`)
}

// Generate service pages
for (const [slug, seo] of Object.entries(SERVICE_SEO)) {
  const dir = resolve(distDir, 'services', slug)
  mkdirSync(dir, { recursive: true })
  const html = generateHtml(template, { ...seo, canonical: `https://parsleymoving.com/services/${slug}` })
  writeFileSync(resolve(dir, 'index.html'), html)
  console.log(`✅ /services/${slug}`)
}

console.log('\n🎉 SEO HTML generation complete!')