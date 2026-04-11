import { useTheme } from "@context/useTheme";
import ContactForm from "@components/ui/ContactForm";
import { CheckIcon, StarIcon, TruckIcon } from "@components/ui/icons";
import logoLight from "@/assets/Parsley_Light_Theme.webp";
import logoDark from "@/assets/Parsley_Dark_Theme.webp";

const BADGES = [
  { label: "Fast & Reliable", Icon: CheckIcon },
  { label: "5-Star Rated", Icon: StarIcon },
  { label: "Local & Long Distance", Icon: TruckIcon },
];

function MobileCard({ t, children }) {
  return (
    <>
      <div
        style={{
          borderColor: t.border,
          backgroundColor: t.bg.card,
          boxShadow: t.shadow,
        }}
        className="lg:hidden rounded-2xl border p-6"
      >
        {children}
      </div>
      <div className="hidden lg:block">{children}</div>
    </>
  );
}

export default function Hero({
  title = "Professional Moving",
  highlight = "in San Francisco",
  subtitle = "Where Every Move is Seasoned With Care",
  image = null,
}) {
  const { t, mode } = useTheme();

  return (
    <section
      style={{ backgroundColor: t.bg.section }}
      className="lg:min-h-[70vh] xl:min-h-[75vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 pt-4 pb-1 lg:py-16 w-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-0 lg:gap-20">

          {/* Left column — desktop only */}
          <div className="hidden lg:flex flex-1 flex-col items-start text-left">
            <div className="relative w-72 h-72 xl:w-96 xl:h-96 mb-6 mx-auto">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain rounded-2xl"
                />
              ) : (
                <>
                  <img
                    src={logoLight}
                    alt="Parsley Moving"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${mode === "dark" ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <img
                    src={logoDark}
                    alt="Parsley Moving"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${mode === "dark" ? "opacity-100" : "opacity-0"
                      }`}
                  />
                </>
              )}
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold text-graphite dark:text-white leading-tight">
              {title}
              <br />
              <span className="text-brand-green">{highlight}</span>
            </h1>
            <p className="mt-4 text-base xl:text-lg text-[#6b7280] dark:text-[#a0a0a0]">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {BADGES.map((badge) => (
                <span
                  key={badge.label}
                  style={{
                    backgroundColor: t.bg.accent,
                    color: t.brand.primary,
                  }}
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full cursor-default transition-all duration-200 hover:scale-105 hover:shadow-md"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = t.brand.primary;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = t.bg.accent;
                    e.currentTarget.style.color = t.brand.primary;
                  }}
                >
                  <badge.Icon className="w-4 h-4 shrink-0" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — heading on mobile, form always */}
          <div className="w-full lg:max-w-md xl:max-w-lg">
            {/* Heading — mobile/tablet only */}
            <div className="lg:hidden mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-graphite dark:text-white leading-tight mb-3">
                {title}
                <br />
                <span className="text-brand-green">{highlight}</span>
              </h1>
              <p className="text-sm text-[#6b7280] dark:text-[#a0a0a0]">
                {subtitle}
              </p>
            </div>

            <MobileCard t={t}>
              <ContactForm />
            </MobileCard>
    
          </div>

        </div>
      </div>
    </section>
  );
}