import { useTheme } from '@context/useTheme'

export default function GetQuoteButton({ onClick, className = '' }) {
  const { t } = useTheme()

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: t.brand.primary }}
      className={`hover:opacity-90 active:scale-[0.98] text-white font-semibold px-5 py-3
        rounded-xl text-center transition-all duration-200 cursor-pointer ${className}`}
    >
      GET FREE QUOTE
    </button>
  )
}