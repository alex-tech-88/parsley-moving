import { useTheme } from "@context/useTheme";
import defaultAboutImg from "@/assets/about-us.webp";

const STATS = [
  { value: "500+", label: "Moves Completed" },
  { value: "5★",   label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function AboutUs({
  title     = "Your Local",
  highlight = "Moving Experts",
  text1     = "At Parsley Moving, we provide a fresh approach to relocation, dedicated to making your move as smooth as possible. Our experienced team understands the challenges of relocating and offers reliable residential and commercial moving, packing, and unpacking services throughout the Bay Area at affordable prices.",
  text2     = "We guarantee the safety of your belongings, focusing on customer satisfaction by handling your items with care and ensuring timely delivery. Choose Parsley Moving, where every move is seasoned with care, for moves of any complexity and in any direction!",
  text3     = null,
  img       = defaultAboutImg,
  location  = "Bay Area, CA",
}) {
  const { t } = useTheme();

  return (
    <section
      id="about"
      style={{ backgroundColor: t.bg.section }}
      className="pt-6 pb-16 xl:pt-10 xl:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

          {/* Left — photo */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={img}
                alt={`Parsley Moving team providing professional moving services in ${location}`}
                className="w-full h-72 sm:h-96 lg:h-120 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-brand-green text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                📍 {location}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <span
                style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
                className="text-sm font-semibold px-4 py-1.5 rounded-full"
              >
                About Us
              </span>
              <h2 className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white mt-4 leading-tight">
                {title}
                <br />
                <span className="text-brand-green">{highlight}</span>
              </h2>
            </div>

            <p className="text-base xl:text-lg text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed">
              {text1}
            </p>
            <p className="text-base text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed">
              {text2}
            </p>
            {text3 && (
              <p className="text-base text-[#6b7280] dark:text-[#a0a0a0] leading-relaxed">
                {text3}
              </p>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  style={{ backgroundColor: t.bg.card, borderColor: t.border }}
                  className="border rounded-2xl p-5 text-center transition-all duration-200
                    hover:border-brand-green hover:scale-105 hover:shadow-md cursor-default"
                >
                  <p className="text-2xl xl:text-3xl font-bold text-brand-green">{value}</p>
                  <p className="text-xs xl:text-sm text-[#9ca3af] dark:text-[#6b6b6b] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}