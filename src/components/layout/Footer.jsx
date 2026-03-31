import { useTheme } from "@context/useTheme";
import { PHONE, SERVICES, EMAIL, ADDRESS, YEAR, MOVING_AREAS, WORKING_HOURS } from "@/constant";
import { FooterPhoneIcon, FooterMailIcon, FooterPinIcon } from "@components/ui/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTheme();

  return (
    <footer
      id="contact"
      style={{ backgroundColor: t.bg.card, borderColor: t.border }}
      className="border-t scroll-mt-22"
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
              <span className="text-3xl" style={{ color: t.text.primary }}>
                parsley
              </span>
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
                  <Link
                    to={s.href}
                    style={{ color: t.text.secondary }}
                    className="text-sm hover:text-brand-green transition-colors"
                  >
                    {s.title}
                  </Link>
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
                <FooterPhoneIcon color={t.brand.primary} />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                style={{ color: t.text.primary }}
                className="flex items-center gap-2 text-sm hover:text-brand-green transition-colors"
              >
                <FooterMailIcon color={t.brand.primary} />
                {EMAIL}
              </a>
              <p
                style={{ color: t.text.primary }}
                className="flex items-center gap-2 text-sm"
              >
                <FooterPinIcon color={t.brand.primary} />
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
          style={{ borderColor: t.border, color: t.text.brand }}
          className="border-t pt-4 text-center text-xs"
        >
          Where Every Move is Seasoned with Care
        </div>
        <div
          style={{ color: t.text.secondary }}
          className="pt-1 text-center text-xs"
        >
          © {YEAR} Parsley Moving. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
