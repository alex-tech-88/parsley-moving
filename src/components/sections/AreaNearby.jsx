import { Link } from 'react-router-dom'
import { useTheme } from '@context/useTheme'
import { ACCORDION_AREAS, AREA_NEARBY } from '@/constant'

function getCityBySlug(slug) {
  for (const group of ACCORDION_AREAS) {
    const found = group.cities.find((c) => c.slug === slug)
    if (found) return found
  }
  return null
}

export default function AreaNearby({ slug }) {
  const { t } = useTheme()

  const nearbySlugs = AREA_NEARBY[slug]
  if (!nearbySlugs?.length) return null

  const nearbyCities = nearbySlugs.map(getCityBySlug).filter(Boolean)
  if (!nearbyCities.length) return null

  return (
    <section style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24">
      <div className="max-w-3xl mx-auto">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Areas We Also Serve Nearby
        </h2>
        <ul className="flex flex-wrap gap-3">
          {nearbyCities.map((city) => (
            <li key={city.slug}>
              <Link
                to={city.href}
                style={{ color: t.brand.primary, borderColor: t.brand.primary }}
                className="inline-block px-4 py-2 rounded-full border text-sm font-medium
                           transition-all duration-200 hover:text-white"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.brand.primary
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = t.brand.primary
                }}
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}