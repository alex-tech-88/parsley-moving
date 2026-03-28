// src/components/layout/Footer.jsx
import { useTheme } from "@context/useTheme";
import { PHONE } from "@/constants";

const EMAIL = "info@parsleymoving.com";
const ADDRESS = "Bay Area, California";
const YEAR = new Date().getFullYear();

function PhoneIcon({ color }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ color }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon({ color }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
      <div className="max-w-7xl mx-auto px-6 xl:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
          {/* Left — leaf icon + copyright */}
          <div className="flex items-end gap-4">
            <img
              src="/favicon.svg"
              alt="Parsley Moving"
              className="w-12 h-12 object-contain"
            />
            <p
              style={{ color: t.text.secondary }}
              className="text-xs leading-relaxed mb-1"
            >
              © {YEAR} Parsley Moving.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Right — contacts */}
          <div className="flex flex-col gap-3 sm:text-right">
            <a
              href={`tel:${PHONE}`}
              style={{ color: t.text.primary }}
              className="flex items-center sm:justify-end gap-2 text-sm font-semibold hover:text-brand-green transition-colors"
            >
              <PhoneIcon color={t.brand.primary} />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              style={{ color: t.text.primary }}
              className="flex items-center sm:justify-end gap-2 text-sm hover:text-brand-green transition-colors"
            >
              <MailIcon color={t.brand.primary} />
              {EMAIL}
            </a>
            <p
              style={{ color: t.text.primary }}
              className="flex items-center sm:justify-end gap-2 text-sm"
            >
              <PinIcon color={t.brand.primary} />
              {ADDRESS}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
