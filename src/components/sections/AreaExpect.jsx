import { useTheme } from '@context/useTheme'

const PHOTO_ALTS = [
  (city) => `Professional movers loading a truck in ${city}`,
  (city) => `Moving crew carrying furniture in ${city}, CA`,
]

export default function AreaExpect({ cityName, items, photos = [] }) {
  const { t } = useTheme()

  if (!items?.length) return null

  return (
    <section style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24 xl:pt-24">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 xl:gap-20">

          {/* Left — text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <span
                style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
                className="text-sm font-semibold px-4 py-1.5 rounded-full"
              >
                What to Expect
              </span>
              <h2 className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white mt-4 leading-tight">
                Moving in{' '}
                <span className="text-brand-green">{cityName}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {items.map((item, i) => (
                <p
                  key={i}
                  style={{ color: t.text.secondary }}
                  className="text-base xl:text-lg leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right — 2 photos */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="grid grid-cols-2 gap-3 h-full min-h-64">
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={PHOTO_ALTS[i] ? PHOTO_ALTS[i](cityName) : `Moving services in ${cityName}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}