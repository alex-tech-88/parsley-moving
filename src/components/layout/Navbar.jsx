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

function ChevronIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Navbar() {
  const { mode, toggleTheme, t } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="relative group">
                <a href={link.href} className="nav-link flex items-center gap-1">
                  {link.label}
                  <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>

                {/* Desktop dropdown */}
                <div
                  style={{ backgroundColor: t.bg.card, borderColor: t.border }}
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border shadow-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-200 z-50 overflow-hidden"
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="nav-dropdown-item"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">

          {/* Phone */}
          <a
            href={telHref}
            style={{ borderColor: t.brand.primary, borderWidth: '2px', color: mode === 'light' ? '#3b3b3b' : '#f5f5f5' }}
            className="flex items-center gap-2 border rounded-xl px-4 py-3
              hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5
              transition-all duration-200 text-sm font-semibold group"
          >
            <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 phone-ring" />
            {PHONE}
          </a>

          {/* CTA */}
          <a
            href="#contact"
            style={{ backgroundColor: t.brand.primary }}
            className="hover:opacity-90 text-white text-sm xl:text-base font-semibold
              px-5 xl:px-6 py-3 rounded-xl transition-opacity"
          >
            GET QUOTE
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
            <PhoneIcon className="w-7 h-7 phone-ring" />
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
        style={{
          borderTopColor: t.border,
          backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
        }}
        className={`lg:hidden transition-all duration-300 overflow-hidden border-t
          ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-8 pt-6 flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="w-full flex flex-col items-center gap-3">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`nav-link-mobile flex items-center gap-1 ${servicesOpen ? 'active' : ''}`}
                  >
                    {link.label}
                    <ChevronIcon className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`w-full flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div style={{ backgroundColor: mode === 'light' ? '#e5e7eb' : '#2a2a2a' }} className="w-full h-px" />
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => { setMenuOpen(false); setServicesOpen(false) }}
                        className="nav-dropdown-item-mobile"
                      >
                        {item.label}
                      </a>
                    ))}
                    <div style={{ backgroundColor: mode === 'light' ? '#e5e7eb' : '#2a2a2a' }} className="w-full h-px" />
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setActiveLink(link.href) }}
                  className={`nav-link-mobile ${activeLink === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="w-full flex flex-col gap-3 mt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{ backgroundColor: t.brand.primary }}
              className="hover:opacity-90 text-white text-sm font-semibold px-5 py-3 rounded-xl
                text-center transition-opacity w-full"
            >
              GET QUOTE
            </a>
            <a
              href={telHref}
              onClick={() => setMenuOpen(false)}
              style={{ borderColor: t.border, color: mode === 'light' ? '#3b3b3b' : '#f5f5f5' }}
              className="flex items-center justify-center gap-2 border-2 rounded-xl px-5 py-3
                hover:border-brand-green hover:text-brand-green transition-all duration-200
                text-sm font-semibold"
            >
              <PhoneIcon className="w-4 h-4 phone-ring" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
