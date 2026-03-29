import { useTheme } from '@context/useTheme'
import { PHONE } from '@/constant'
import { PhoneIcon } from '@components/ui/icons' 

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
