import { useTheme } from "@context/useTheme";
import { REVIEWS } from "@/constant";
import ReviewCard from "@components/ui/ReviewCard";
import Slider from "@components/ui/Slider";

const GOOGLE_REVIEWS_URL = "https://share.google/qFgLrDqmhQroBnt1h";

export default function Reviews() {
  const { t } = useTheme();

  return (
    <section
      id="reviews"
      style={{ backgroundColor: t.bg.section }}
      className="pt-0 pb-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-sm xl:text-base text-[#6b7280] dark:text-[#a0a0a0]">
            Real reviews from{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold transition-colors duration-200"
            >
              Google
            </a>
          </p>
        </div>

        <Slider
          items={REVIEWS}
          visibleCount={{ mobile: 1, desktop: 2 }}
          autoPlay
          autoPlayInterval={4500}
          renderItem={(review) => (
            <ReviewCard
              key={review.id}
              review={review}
              style={{
                borderColor: t.border,
                backgroundColor: t.bg.card,
                boxShadow: t.shadow,
              }}
            />
          )}
        />
      </div>
    </section>
  );
}
