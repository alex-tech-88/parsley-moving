import { useTheme } from '@context/useTheme'
import { ChevronIcon } from '@components/ui/icons'
import { Link } from 'react-router-dom'

export default function AccordionItem({ service, isOpen, onToggle }) {
  const { t } = useTheme()

  return (
    <div
      style={{ borderColor: t.border }}
      className="border-b last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2 text-left gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 shrink-0">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-xl text-graphite dark:text-white tracking-wide">
            {service.title}
          </span>
        </div>
        <ChevronIcon
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
          style={{ color: t.brand.primary }}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-4' : 'max-h-0'
          }`}
      >
        <p className="text-sm text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed mb-3">
          {service.description}
        </p>
        <Link
          to={service.href}
          style={{ color: t.brand.primary }}
          className="text-sm font-semibold inline-flex items-center gap-1
    hover:gap-2 transition-all duration-200"
        >
          Learn More
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}