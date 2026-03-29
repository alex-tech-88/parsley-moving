import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'

export default function AccordionItem({ service, isOpen, onToggle }) {
  const { t } = useTheme()

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
