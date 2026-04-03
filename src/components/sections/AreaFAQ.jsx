import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'
import { AREA_PARKING_FAQ } from '@/constant'

export default function AreaFAQ({ slug, cityName }) {
  const { t } = useTheme()
  const [openId, setOpenId] = useState(null)

  const parkingAnswer = AREA_PARKING_FAQ[slug]

  // Guard: если slug не найден — не рендерим секцию
  if (!parkingAnswer) return null

  const faqItems = [
    {
      id: 1,
      question: `How much do movers cost in ${cityName}, CA?`,
      answer: "Most local moves are billed hourly depending on the number of movers and the time required. Final cost is based on actual hours worked, including driving time.",
    },
    {
      id: 2,
      question: `Do I need to reserve parking for movers in ${cityName}?`,
      answer: parkingAnswer,
    },
    {
      id: 3,
      question: `How long does a move in ${cityName} take?`,
      answer: `Every move in ${cityName} is different. Smaller moves may take around 3 hours, while larger or more complex moves can take 8 to 9 hours or more. The total time depends on the size of the move, building access, parking, and distance. We always provide an estimate in advance and work as efficiently as possible.`,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 xl:px-16">
      <div className="max-w-3xl mx-auto">

        <h2
          style={{ color: t.text.primary }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{ borderColor: t.border, backgroundColor: t.bg.card }}
          className="border rounded-2xl px-6"
        >
          {faqItems.map((item) => (
            <div
              key={item.id}
              style={{ borderColor: t.border }}
              className="border-b last:border-b-0"
            >
              <button
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                className="w-full flex items-center justify-between py-4 text-left gap-3"
                aria-expanded={openId === item.id}
              >
                <span
                  style={{ color: t.text.primary }}
                  className="font-semibold text-lg tracking-wide"
                >
                  {item.question}
                </span>
                <ChevronIcon
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                  style={{ color: t.brand.primary }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-56 pb-5' : 'max-h-0'
                }`}
              >
                <p
                  style={{ color: t.text.secondary }}
                  className="text-base leading-relaxed"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}