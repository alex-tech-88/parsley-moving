import { useTheme } from '@context/useTheme'

export default function AreaIntro({ intro1, intro2 }) {
  const { t } = useTheme()

  if (!intro1 && !intro2) return null

  return (
    <section
      style={{ backgroundColor: t.bg.section }}
      className="pt-0 pb-16 xl:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 flex flex-col gap-4">
        {intro1 && (
          <p
            style={{ color: t.text.secondary }}
            className="text-base xl:text-lg leading-relaxed"
          >
            {intro1}
          </p>
        )}
        {intro2 && (
          <p
            style={{ color: t.text.secondary }}
            className="text-base leading-relaxed"
          >
            {intro2}
          </p>
        )}
      </div>
    </section>
  )
}