import { Link } from 'react-router-dom'
import { useTheme } from '@context/useTheme'

const AREA_SERVICES = [
  { label: 'Local moving',                  href: '/services/local-moving' },
  { label: 'Residential moving',            href: '/services/residential-moving' },
  { label: 'Commercial moving',             href: '/services/commercial-moving' },
  { label: 'Packing services',              href: '/services/packing' },
  { label: 'Furniture moving',              href: '/services/furniture' },
  { label: 'In-state long-distance moving', href: '/services/in-state-moving' },
]

export default function AreaServices({ cityName }) {
  const { t } = useTheme()

  return (
    <section className="py-16 px-4 md:px-8 xl:px-16">
      <div className="max-w-3xl mx-auto">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Our {cityName} Moving Services
        </h2>
        <ul className="flex flex-col gap-3">
          {AREA_SERVICES.map((service) => (
            <li key={service.href} className="flex items-center gap-2">
              <span
                style={{ color: t.brand.primary }}
                className="shrink-0 text-lg leading-none"
              >
                ✓
              </span>
              <Link
                to={service.href}
                style={{ color: t.brand.primary }}
                className="text-base font-medium hover:underline underline-offset-2 transition-all duration-200"
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}