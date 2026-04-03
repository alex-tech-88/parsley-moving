import { useTheme } from '@context/useTheme'

export default function AreaExpect({ cityName, items }) {
  const { t } = useTheme()

  if (!items?.length) return null

  return (
    <section className="py-16 px-4 md:px-8 xl:px-16">
      <div className="max-w-3xl mx-auto">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Moving in {cityName} – What to Expect
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <p
              key={i}
              style={{ color: t.text.secondary }}
              className="text-base leading-relaxed"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}