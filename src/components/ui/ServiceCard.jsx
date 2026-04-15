import { useTheme } from '@context/useTheme'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const { t } = useTheme()

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
      <Link
        to={service.href}
        style={{ color: t.brand.primary }}
        className="mt-4 text-sm font-semibold inline-flex items-center gap-1
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
  )
}