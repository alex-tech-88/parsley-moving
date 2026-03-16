import { useState, useEffect } from 'react'
import { useTheme } from '@context/useTheme'
import { PHONE, NAV_LINKS } from '@/constants'

function PhoneIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1C10.61 22 2 13.39 2 3a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  )
}

export default function Navbar() {
  const { mode, toggleTheme, t } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const telHref = `tel:${PHONE.replace(/\D/g, '')}`

  return (
    <header
      style={{
        backgroundColor: scrolled ? t.navbar.bgScrolled : t.navbar.bg,
        borderBottomColor: t.border,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 h-22 xl:h-25 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/favicon-96x96.png" alt="Parsley Moving" className="h-16 w-16 xl:h-20 xl:w-20" />
          <span className="font-bold text-lg xl:text-xl leading-tight text-graphite dark:text-white">
            Parsley<br />
            <span className="text-brand-green">Moving</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-base xl:text-lg font-bold uppercase tracking-wide
                text-graphite dark:text-white hover:text-brand-green dark:hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">

          {/* Phone button */}
          <a
            href={telHref}
            style={{ borderColor: t.border, color: mode === 'light' ? '#3b3b3b' : '#f5f5f5' }}
            className="flex items-center gap-2 border rounded-xl px-4 py-2.5
    hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5
    transition-all duration-200 text-sm font-semibold group"
          >
            <PhoneIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            {PHONE}
          </a>

          {/* CTA button */}
          <a
            href="#contact"
            style={{ backgroundColor: t.brand.primary }}
            className="hover:opacity-90 text-white text-sm xl:text-base font-semibold
              px-5 xl:px-6 py-2.5 xl:py-3 rounded-xl transition-opacity"
          >
            Get a Quote
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center rounded-lg
              text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={telHref}
            aria-label={`Call ${PHONE}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg
              text-graphite dark:text-white hover:text-brand-green hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg
              text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        style={{ borderTopColor: t.border }}
        className={`lg:hidden transition-all duration-300 overflow-hidden border-t ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link-mobile text-base font-medium uppercase tracking-wide
                text-graphite dark:text-white hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: t.brand.primary }}
            className="hover:opacity-90 text-white text-sm font-semibold px-5 py-2.5 rounded-xl
              text-center transition-opacity w-full max-w-xs"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}
