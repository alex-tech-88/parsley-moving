// src/components/sections/Services.jsx
import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'

import localMovingImg from '@assets/services/house-moving.png'

const SERVICES = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    description: 'Our local moving crew handles apartment and home relocations across the Bay Area. We plan every detail in advance so your move runs smoothly and on schedule.',
    img: localMovingImg,
    href: '#local-moving',
  },
  {
    id: 'residential-moving',
    title: 'Residential Moving',
    description: 'We take full care of your home relocation — wrapping furniture, protecting floors, and securing fragile items so everything arrives exactly as it left.',
    img: localMovingImg,
    href: '#residential-moving',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Moving',
    description: 'We relocate offices and businesses with minimal disruption. Our team works around your schedule — evenings, weekends, and holidays — to keep your downtime as short as possible.',
    img: localMovingImg,
    href: '#commercial-moving',
  },
  {
    id: 'long-distance',
    title: 'Long Distance Moving',
    description: 'Moving out of the Bay Area? We manage the full process — packing, inventory, and safe delivery — for moves across California and to any state in the US.',
    img: localMovingImg,
    href: '#long-distance',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    description: 'Our team packs your entire home or just the fragile pieces — using quality materials to keep everything safe. We label and organize boxes so unpacking is easy.',
    img: localMovingImg,
    href: '#packing',
  },
  {
    id: 'furniture',
    title: 'Furniture Moving',
    description: 'We wrap, pad, and secure every piece before it moves. Large sofas, antiques, or custom builds — we handle disassembly at pickup and reassembly at delivery.',
    img: localMovingImg,
    href: '#furniture',
  },
]

function ServiceCard({ service, t }) {
  return (
    <div
      style={{ backgroundColor: t.bg.section }}
      className="flex flex-col"
    >
      <div className="w-32 h-32 mb-4">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-graphite dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed flex-1">
        {service.description}
      </p>
      <a
        href={service.href}
        style={{ color: t.brand.primary }}
        className="mt-4 text-sm font-semibold inline-flex items-center gap-1
          hover:gap-2 transition-all duration-200"
      >
        Learn More <span className="text-base">↗</span>
      </a>
    </div>
  )
}

function AccordionItem({ service, t, isOpen, onToggle }) {
  return (
    <div
      style={{ borderColor: t.border }}
      className="border-b last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 shrink-0">
            <img
              src="/favicon.ico"
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-base text-graphite dark:text-white uppercase tracking-wide">
            {service.title}
          </span>
        </div>
        <ChevronIcon
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: t.brand.primary }}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed mb-3">
          {service.description}
        </p>
        <a
          href={service.href}
          style={{ color: t.brand.primary }}
          className="text-sm font-semibold inline-flex items-center gap-1"
        >
          Learn More <span>↗</span>
        </a>
      </div>
    </div>
  )
}

export default function Services() {
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
            What We
            <br />
            <span className="text-brand-green">Offer</span>
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
                t={t}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>

        {/* Tablet — 2 columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-x-10 gap-y-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} t={t} />
          ))}
        </div>

        {/* Desktop — 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-x-12 gap-y-14">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} t={t} />
          ))}
        </div>

      </div>
    </section>
  )
}