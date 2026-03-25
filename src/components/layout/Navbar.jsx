import { useState, useEffect } from "react";
import { useTheme } from "@context/useTheme";
import GetQuoteButton from "@components/ui/GetQuoteButton";
import RequestCallButton from "@components/ui/RequestCallButton";
import { PhoneIcon, ChevronIcon, MoonIcon, SunIcon } from "@components/ui/icons";
import "./Navbar.css";
import { PHONE, NAV_LINKS } from "@/constants";

export default function Navbar() {
  const { toggleTheme, t, mode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const telHref = `tel:${PHONE.replace(/\D/g, "")}`;

  return (
    <>
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/favicon-96x96.png"
              alt="Parsley Moving"
              className="h-16 w-16 xl:h-20 xl:w-20"
            />
            <span className="font-bold text-lg xl:text-xl leading-tight text-graphite dark:text-white">
              Parsley
              <br />
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
                    className="navbar-dropdown absolute top-full left-0 mt-2 w-64 rounded-xl border shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 z-50 overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <a key={item.href} href={item.href} className="nav-dropdown-item">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ),
            )}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <a
              href={telHref}
              className="navbar-phone-btn flex items-center gap-2 border rounded-xl px-4 py-3
                hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5
                transition-all duration-200 text-sm font-semibold group"
            >
              <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 phone-ring" />
              {PHONE}
            </a>

            <GetQuoteButton className="text-sm xl:text-base px-5 xl:px-6" />

            {/* Theme toggle — desktop */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center rounded-lg
                text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5
                transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mode === "light"
                ? <MoonIcon className="w-6 h-6 xl:w-6 xl:h-6" />
                : <SunIcon className="w-8 h-8 xl:w-8 xl:h-8" />
              }
            </button>
          </div>

          {/* Mobile right side */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={telHref}
              aria-label={`Call ${PHONE}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg
                text-graphite dark:text-white hover:text-brand-green hover:bg-black/5
                dark:hover:bg-white/5 transition-colors"
            >
              <PhoneIcon className="w-7 h-7 phone-ring" />
            </a>

            {/* Theme toggle — mobile */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg
                text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5
                transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mode === "light"
                ? <MoonIcon className="w-7 h-7" />
                : <SunIcon className="w-8 h-8" />
              }
            </button>

            {/* Burger */}
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => {
                if (menuOpen) setServicesOpen(false);
                setMenuOpen(!menuOpen);
              }}
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-graphite dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 lg:hidden overflow-y-auto
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="px-6 pb-8 pt-22 mt-6 flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="w-full flex flex-col items-center gap-3">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`nav-link-mobile flex items-center gap-1 ${servicesOpen ? "active" : ""}`}
                  >
                    {link.label}
                    <ChevronIcon
                      className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`w-full flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"}`}
                  >
                    <div className="mobile-menu-divider w-full h-px" />
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        className="nav-dropdown-item-mobile"
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="mobile-menu-divider w-full h-px" />
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveLink(link.href);
                  }}
                  className={`nav-link-mobile ${activeLink === link.href ? "active" : ""}`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="w-full flex flex-col gap-3 mt-2">
            <GetQuoteButton
              onClick={() => setMenuOpen(false)}
              className="w-full text-sm"
            />
            <RequestCallButton
              onClick={() => setMenuOpen(false)}
              className="w-full text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}
