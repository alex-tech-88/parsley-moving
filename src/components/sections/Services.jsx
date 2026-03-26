// src/components/sections/Services.jsx
import { useState } from 'react'
import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'

import localMovingImg from '@assets/services/local-moving.png'
import packingServicesImg from '@assets/services/packing-services.png'
import residentialMovingImg from '@assets/services/residential-moving.png'
import commercialMovingImg from '@assets/services/commercial-moving.png'
import instateMovingImgImg from '@assets/services/instate-moving.png'
import furnitureMovingImg from '@assets/services/furniture-moving.png'

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
    img: residentialMovingImg,
    href: '#residential-moving',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Moving',
    description: 'We relocate offices and businesses with minimal disruption. Our team works around your schedule — evenings, weekends, and holidays — to keep your downtime as short as possible.',
    img: commercialMovingImg,
    href: '#commercial-moving',
  },
    {
    id: 'in-state-moving',
    title: 'In-State Moving',
    description: 'Long distance moving services within California. We handle residential and apartment moves between cities across the state with careful loading, transportation and safe delivery.',
    img: instateMovingImgImg,
    href: '#in-state-moving',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    description: 'Our team packs your entire home or just the fragile pieces — using quality materials to keep everything safe. We label and organize boxes so unpacking is easy.',
    img: packingServicesImg,
    href: '#packing',
  },
  {
    id: 'furniture',
    title: 'Furniture Moving',
    description: 'We wrap, pad, and secure every piece before it moves. Large sofas, antiques, or custom builds — we handle disassembly at pickup and reassembly at delivery.',
    img: furnitureMovingImg,
    href: '#furniture',
  },
]

function ServiceCard({ service, t }) {
  return (
    <div
      style={{ backgroundColor: t.bg.section }}
      className="flex flex-col"
    >
      <div className="w-38 h-38 mb-4">
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
          <div className="w-15 h-15 shrink-0">
            <img
              src={service.img}
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