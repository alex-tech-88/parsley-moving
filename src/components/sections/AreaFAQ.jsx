import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'
import { AREA_PARKING_FAQ } from '@/constant'

export default function AreaFAQ({ slug, cityName }) {
  const { t } = useTheme()
  const [openId, setOpenId] = useState(null)

  const parkingAnswer = AREA_PARKING_FAQ[slug]

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

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
        <span
          style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
          className="text-sm font-semibold px-4 py-1.5 rounded-full"
        >
          FAQ
        </span>
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white mt-4"
        >
          Frequently Asked Questions
        </h2>
        <p style={{ color: t.text.secondary }} className="text-base mb-6">
          Everything you need to know before your move.
        </p>

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
                onClick={() => handleToggle(item.id)}
                className="w-full flex items-center justify-between py-6 text-left gap-3"
                aria-expanded={openId === item.id}
              >
                <span
                  style={{ color: t.text.primary }}
                  className="font-semibold text-xl tracking-wide"
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
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: openId === item.id ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p
                    style={{ color: t.text.secondary }}
                    className="text-lg leading-relaxed pb-5"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}