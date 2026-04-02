import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'
import { faqItems } from '@/constant'

export default function FAQ() {
  const { t } = useTheme()
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section style={{ backgroundColor: t.bg.section }} className="pt-0 pb-16 xl:pb-24">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2
            style={{ color: t.text.primary }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: t.text.secondary }} className="text-base md:text-lg">
            Everything you need to know before your move.
          </p>
        </div>

        {/* Accordion — reuses AccordionGroup/AccordionItem visual pattern */}
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