import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { SERVICES } from '@/constant'
import ServiceCard from '@components/ui/ServiceCard'
import AccordionItem from '@components/ui/AccordionItem'

export default function Services({ cityName }) {
  const { t } = useTheme()
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="services"
      style={{ backgroundColor: t.bg.section }}
      className="pt-0 pb-16 xl:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        {/* Section header */}
        <div className="mb-10 xl:mb-14">
          <span
            style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
            className="text-sm font-semibold px-4 py-1.5 rounded-full"
          >
            Services
          </span>
          <h2 className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white mt-4 leading-tight">
            {cityName ? (
              <>
                What We Offer
                <br />
                <span className="text-brand-green">in {cityName}</span>
              </>
            ) : (
              <>
                What We
                <br />
                <span className="text-brand-green">Offer</span>
              </>
            )}
          </h2>
        </div>

        {/* Mobile — accordion */}
        <div
          className="sm:hidden rounded-2xl border overflow-hidden"
          style={{ borderColor: t.border, backgroundColor: t.bg.card }}
        >
          <div className="px-5">
            {SERVICES.map((service, i) => (
              <AccordionItem
                key={service.id}
                service={service}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>

        {/* Tablet — 2 columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-x-10 gap-y-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Desktop — 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-x-12 gap-y-14">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}