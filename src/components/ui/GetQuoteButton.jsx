import { useTheme } from '@context/useTheme'
import { useNavigate, useLocation } from 'react-router-dom'

export default function GetQuoteButton({ onClick, className = '' }) {
  const { t } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    onClick?.()
    if (location.pathname === '/') {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#quote-form')
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: t.brand.primary }}
      className={`hover:opacity-90 active:scale-[0.98] text-white font-semibold px-5 py-3
        rounded-xl text-center transition-all duration-200 cursor-pointer ${className}`}
    >
      GET FREE QUOTE
    </button>
  )
}