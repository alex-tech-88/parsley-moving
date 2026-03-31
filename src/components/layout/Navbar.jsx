import { useState, useEffect } from "react";
import { useTheme } from "@context/useTheme";
import GetQuoteButton from "@components/ui/GetQuoteButton";
import RequestCallButton from "@components/ui/RequestCallButton";
import {
  PhoneIcon,
  ChevronIcon,
  MoonIcon,
  SunIcon,
} from "@components/ui/icons";
import "./Navbar.css";
import { PHONE, NAV_LINKS } from "@/constant";
import { Link } from "react-router-dom";

const isRoute = (href) => href.startsWith("/");

const SCROLL_SECTIONS = {
  "About Us": "about",
  Services: "services",
  "Moving Areas": "areas",
};

export default function Navbar() {
  const { toggleTheme, t, mode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [openGroups, setOpenGroups] = useState({});
  const [activeLink, setActiveLink] = useState("");

  const toggleDropdown = (href) => {
    setOpenDropdowns((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
    setOpenGroups({});
  };

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

  const scrollToSection = (label) => {
    const sectionId = SCROLL_SECTIONS[label];
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/favicon-96x96.png"
              alt="Parsley Moving"
              className="h-16 w-16 xl:h-20 xl:w-20"
            />
            <span className="font-bold text-lg xl:text-xl leading-none text-graphite dark:text-white flex flex-col items-center">
              <span className="text-3xl">parsley</span>
              <span className="text-brand-green font-normal -mt-2">moving</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {NAV_LINKS.map((link) =>
              link.dropdown || link.groups ? (
                <div key={link.href} className="relative group">
                  <button
                    onClick={() => scrollToSection(link.label)}
                    className="nav-link flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Desktop dropdown — no overflow-hidden to allow nested popups */}
                  <div
                    className="navbar-dropdown absolute top-full left-0 mt-2 rounded-xl border shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 z-50"
                  >
                    {link.groups ? (
                      // Moving Areas — regions with nested city popups on hover
                      <div className="flex flex-col py-2 min-w-50">
                        {link.groups.map((group) => (
                          <div key={group.label} className="relative group/sub">

                            {/* Region label */}
                            <button className="w-full flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
  <span className="text-sm font-bold uppercase tracking-wider text-brand-green">
    {group.label}
  </span>
  <ChevronIcon className="w-4 h-4 text-brand-green -rotate-90" />
</button>

                            {/* City list — appears to the right on hover */}
                            <div
                              className="navbar-dropdown absolute top-0 left-full ml-1 min-w-55 rounded-xl border shadow-lg
                                opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible
                                transition-all duration-200 z-50 overflow-hidden py-2"
                            >
                              {group.cities.map((city) => (
                                <Link
                                  key={city.href}
                                  to={city.href}
                                  className="nav-dropdown-item"
                                >
                                  {city.label}
                                </Link>
                              ))}
                            </div>

                          </div>
                        ))}
                      </div>
                    ) : (
                      // Services / About Us — flat dropdown list
                      <div className={`overflow-hidden rounded-xl ${link.label === "Services" ? "min-w-64" :
                          link.label === "About Us" ? "min-w-40" :
                            "min-w-52"
                        }`}>
                        {link.dropdown.map((item) =>
                          isRoute(item.href) ? (
                            <Link key={item.href} to={item.href} className="nav-dropdown-item">
                              {item.label}
                            </Link>
                          ) : (
                            <a key={item.href} href={item.href} className="nav-dropdown-item">
                              {item.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
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

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center rounded-lg
                text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5
                transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mode === "light" ? (
                <MoonIcon className="w-6 h-6 xl:w-6 xl:h-6" />
              ) : (
                <SunIcon className="w-8 h-8 xl:w-8 xl:h-8" />
              )}
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

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg
                text-graphite dark:text-white hover:bg-black/5 dark:hover:bg-white/5
                transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {mode === "light" ? (
                <MoonIcon className="w-7 h-7" />
              ) : (
                <SunIcon className="w-8 h-8" />
              )}
            </button>

            {/* Burger */}
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => {
                if (menuOpen) closeAllDropdowns();
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
              {link.dropdown || link.groups ? (
                <>
                  {/* Top-level dropdown toggle */}
                  <button
                    onClick={() => toggleDropdown(link.href)}
                    className={`nav-link-mobile flex items-center gap-1 ${openDropdowns[link.href] ? "active" : ""}`}
                  >
                    {link.label}
                    <ChevronIcon
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdowns[link.href] ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`w-full flex flex-col overflow-hidden transition-all duration-300 ${openDropdowns[link.href] ? "h-auto" : "max-h-0"
                      }`}
                  >
                    <div className="mobile-menu-divider w-full h-px mb-3" />

                    {link.groups ? (
                      // Moving Areas — two-level accordion
                      link.groups.map((group) => (
                        <div key={group.label} className="w-full flex flex-col">

                          {/* Region toggle */}
                          <button
                            onClick={() => toggleGroup(group.label)}
                            className="flex items-center justify-between px-2 py-2 w-full"
                          >
                            <span className="text-sm font-bold uppercase tracking-wider text-brand-green">
                              {group.label}
                            </span>
                            <ChevronIcon
                              className={`w-4 h-4 transition-transform duration-200 text-brand-green ${openGroups[group.label] ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          {/* City list */}
                          <div
                            className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${openGroups[group.label] ? "max-h-96" : "max-h-0"
                              }`}
                          >
                            {group.cities.map((city) => (
                              <Link
                                key={city.href}
                                to={city.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  closeAllDropdowns();
                                }}
                                className="nav-dropdown-item-mobile"
                              >
                                {city.label}
                              </Link>
                            ))}
                          </div>

                        </div>
                      ))
                    ) : (
                      // Services / About Us — flat list
                      <div className="flex flex-col items-center gap-3">
                        {link.dropdown.map((item) =>
                          isRoute(item.href) ? (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => { setMenuOpen(false); closeAllDropdowns(); }}
                              className="nav-dropdown-item-mobile"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={() => { setMenuOpen(false); closeAllDropdowns(); }}
                              className="nav-dropdown-item-mobile"
                            >
                              {item.label}
                            </a>
                          )
                        )}
                      </div>
                    )}

                    <div className="mobile-menu-divider w-full h-px mt-3" />
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

          {/* Action buttons */}
          <div className="w-full flex flex-col gap-3 mt-2">
            <GetQuoteButton onClick={() => setMenuOpen(false)} className="w-full text-sm" />
            <RequestCallButton onClick={() => setMenuOpen(false)} className="w-full text-sm" />
          </div>
        </div>
      </div>
    </>
  );
}