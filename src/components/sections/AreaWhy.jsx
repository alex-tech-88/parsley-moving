import { useTheme } from '@context/useTheme'
import { AREA_WHY_ITEMS } from '@/constant'

export default function AreaWhy({ city }) {
  const { t } = useTheme()

  return (
    <section style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl xl:text-4xl font-bold tracking-tight mb-8 text-center"
        >
          Why Choose Parsley Moving{city ? ` in ${city}` : ''}
        </h2>
        <ul className="flex flex-col gap-3 w-full max-w-2xl mx-auto">
          {AREA_WHY_ITEMS.map((item, i) => (
            <li
              key={i}
              style={{ borderColor: t.border, backgroundColor: t.bg.card }}
              className="flex items-center gap-3 border rounded-2xl px-5 py-4
                         transition-all duration-200 hover:border-brand-green
                         hover:shadow-md cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: t.brand.primary }}
                className="w-5 h-5 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ color: t.text.secondary }} className="text-base xl:text-lg">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}