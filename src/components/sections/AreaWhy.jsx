import { useTheme } from '@context/useTheme'
import { AREA_WHY_ITEMS } from '@/constant'

export default function AreaWhy({ city }) {
  const { t } = useTheme()

  return (
    <section style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24">
      <div className="max-w-3xl mx-auto">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        >
          Why Choose Parsley Moving{city ? ` in ${city}` : ''}
        </h2>
        <ul className="flex flex-col gap-4">
          {AREA_WHY_ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                style={{ color: t.brand.primary }}
                className="mt-1 shrink-0 text-lg leading-none"
              >
                ✓
              </span>
              <span style={{ color: t.text.secondary }} className="text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}