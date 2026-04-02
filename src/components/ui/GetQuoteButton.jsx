import { useTheme } from '@context/useTheme'

export default function GetQuoteButton({ onClick, className = '' }) {
  const { t } = useTheme()

  return (
    <a
      href="#contact"
      onClick={onClick}
      style={{ backgroundColor: t.brand.primary }}
      className={`hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl
        text-center transition-opacity ${className}`}
    >
      GET FREE QUOTE
    </a>
  )
}
