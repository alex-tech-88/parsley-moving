import { useTheme } from '@context/useTheme'
import ContactForm from '@components/ui/ContactForm'

function MobileCard({ t, children }) {
  return (
    <>
      {/* Mobile/tablet — visible card */}
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

      {/* Desktop — no wrapper, fully embedded */}
      <div className="hidden lg:block">
        {children}
      </div>
    </>
  )
}

export default function Hero() {
  const { t } = useTheme()

  return (
    <section
      id="contact"
      style={{ backgroundColor: t.bg.section }}
      className="min-h-[calc(100vh-88px)] xl:min-h-[calc(100vh-100px)] flex items-start lg:items-center"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 pt-4 pb-8 lg:py-16 w-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-0 lg:gap-20">

          {/* Left column — desktop only */}
          <div className="hidden lg:flex flex-1 flex-col items-start text-left">
            <img
              src="/favicon-96x96.png"
              alt="Parsley Moving"
              className="w-40 h-40 xl:w-52 xl:h-52 object-contain mb-6"
            />
            <h1 className="text-4xl xl:text-5xl font-bold text-graphite dark:text-white leading-tight">
              Where every move is
              <br />
              <span className="text-brand-green">seasoned with care.</span>
            </h1>
            <p className="mt-4 text-base xl:text-lg text-[#6b7280] dark:text-[#a0a0a0] max-w-sm">
              Professional moving services in the Bay Area. Licensed, insured, and always on time.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['✅ Licensed & Insured', '⭐ 5-Star Rated', '🚛 Local & Long Distance'].map((badge) => (
                <span
                  key={badge}
                  style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
                  className="text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — heading on mobile, form always */}
          <div className="w-full lg:max-w-md xl:max-w-lg">

            {/* Heading — mobile/tablet only */}
            <div className="lg:hidden mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-graphite dark:text-white leading-tight mb-3">
                Where every move is
                <br />
                <span className="text-brand-green">seasoned with care.</span>
              </h1>
              <p className="text-sm text-[#6b7280] dark:text-[#a0a0a0]">
                Professional moving services in the Bay Area. Licensed, insured, and always on time.
              </p>
            </div>

            <MobileCard t={t}>
              <ContactForm />
            </MobileCard>

          </div>

        </div>
      </div>
    </section>
  )
}
