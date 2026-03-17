import { useTheme } from '@context/useTheme'
import { PHONE } from '@/constants'

function PhoneIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1C10.61 22 2 13.39 2 3a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  )
}

export default function RequestCallButton({ onClick, className = '' }) {
  const { t, mode } = useTheme()
  const telHref = `tel:${PHONE.replace(/\D/g, '')}`

  return (
    <a
      href={telHref}
      onClick={onClick}
      style={{
        color: mode === 'light' ? '#3b3b3b' : '#f5f5f5',
        borderColor: t.brand.primary,
        borderWidth: '2px',
      }}
      className={`flex items-center justify-center gap-2 border rounded-xl px-5 py-3
        hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5
        transition-all duration-200 font-semibold group ${className}`}
    >
      <PhoneIcon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200 phone-ring" />
      REQUEST CALL
    </a>
  )
}
