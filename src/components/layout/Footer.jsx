import { useTheme } from "@context/useTheme";
import { PHONE, SERVICES } from "@/constant";

const EMAIL = "info@parsleymoving.com";
const ADDRESS = "Bay Area, California";
const YEAR = new Date().getFullYear();

const MOVING_AREAS = [
  { label: "San Francisco", href: "#" },
  { label: "San Jose", href: "#" },
  { label: "Oakland", href: "#" },
  { label: "Berkeley", href: "#" },
  { label: "Fremont", href: "#" },
  { label: "Palo Alto", href: "#" },
];

const WORKING_HOURS = [{ label: "Mon – Sun", hours: "9:00 AM – 9:00 PM" }];

function PhoneIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTheme();

  return (
    <footer
      style={{ backgroundColor: t.bg.card, borderColor: t.border }}
      className="border-t"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 pt-10 pb-6">

        {/* Main row */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap justify-between gap-8 mb-10">

          {/* Logo + name */}
          <div className="flex flex-col items-center gap-1 self-center">
            <img
              src="/favicon.svg"
              alt="Parsley Moving"
              className="w-15 h-15 lg:w-22 lg:h-22 object-contain"
            />
            <span className="font-bold leading-none text-graphite dark:text-white flex flex-col items-center">
              <span className="text-3xl" style={{ color: t.text.primary }}>parsley</span>
              <span className="text-brand-green font-normal -mt-2">moving</span>
            </span>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h4
              style={{ color: t.text.primary }}
              className="text-sm font-bold uppercase tracking-wide"
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2 items-center sm:items-start">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    style={{ color: t.text.secondary }}
                    className="text-sm hover:text-brand-green transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Moving Areas */}
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h4
              style={{ color: t.text.primary }}
              className="text-sm font-bold uppercase tracking-wide"
            >
              Moving Areas
            </h4>
            <ul className="flex flex-col gap-2 items-center sm:items-start">
              {MOVING_AREAS.map((area) => (
                <li key={area.label}>
                  <a
                    href={area.href}
                    style={{ color: t.text.secondary }}
                    className="text-sm hover:text-brand-green transition-colors"
                  >
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <h4
              style={{ color: t.text.primary }}
              className="text-sm font-bold uppercase tracking-wide"
            >
              Contacts
            </h4>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <a
                href={`tel:${PHONE}`}
                style={{ color: t.text.primary }}
                className="flex items-center gap-2 text-sm font-semibold hover:text-brand-green transition-colors"
              >
                <PhoneIcon color={t.brand.primary} />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                style={{ color: t.text.primary }}
                className="flex items-center gap-2 text-sm hover:text-brand-green transition-colors"
              >
                <MailIcon color={t.brand.primary} />
                {EMAIL}
              </a>
              <p
                style={{ color: t.text.primary }}
                className="flex items-center gap-2 text-sm"
              >
                <PinIcon color={t.brand.primary} />
                {ADDRESS}
              </p>

              {/* Working Hours */}
              <div
                style={{ borderColor: t.border }}
                className="flex flex-col gap-1 pt-3 border-t"
              >
                {WORKING_HOURS.map(({ label, hours }) => (
                  <p
                    key={label}
                    style={{ color: t.text.secondary }}
                    className="text-sm flex justify-between gap-4"
                  >
                    <span>{label}</span>
                    <span>{hours}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Copyright bottom */}
        <div
          style={{ borderColor: t.border, color: t.text.secondary }}
          className="border-t pt-4 text-center text-xs"
        >
          © {YEAR} Parsley Moving. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}