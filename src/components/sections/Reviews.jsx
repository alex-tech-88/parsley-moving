import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@context/useTheme";
import { REVIEWS } from "@/constants";
import ReviewCard from "@components/ui/ReviewCard";

const GOOGLE_REVIEWS_URL = "https://share.google/qFgLrDqmhQroBnt1h";

export default function Reviews() {
  const { t } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(null);
  const total = REVIEWS.length;

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 2;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = useCallback(
    (index, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setAnimating(false);
      }, 600);
    },
    [animating, total],
  );

  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goTo(current + 1, "next");
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, current, goTo]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const visibleReviews = Array.from(
    { length: visibleCount },
    (_, i) => REVIEWS[(current + i) % total],
  );

 const slideClass = animating
  ? direction === 'next'
    ? 'opacity-0 -translate-x-12 scale-[0.97]' 
    : 'opacity-0 translate-x-12 scale-[0.97]'   
  : 'opacity-100 translate-x-0 scale-100'


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

        {/* Slider */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6
    transition-all duration-500 ease-out ${slideClass}`}
          >
            {visibleReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                style={{
                  borderColor: t.border,
                  backgroundColor: t.bg.card,
                  boxShadow: t.shadow,
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              style={{ borderColor: t.border }}
              className="w-10 h-10 rounded-full border flex cursor-pointer items-center justify-center text-3xl
                text-graphite dark:text-white hover:border-brand-green hover:text-brand-green
                transition-colors duration-200"
            >
              ‹
            </button>

            <div className="flex gap-2 items-center">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === current ? t.brand.primary : t.border,
                    width: i === current ? "20px" : "8px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{ borderColor: t.border }}
              className="w-10 h-10 rounded-full border flex cursor-pointer items-center justify-center text-3xl
                text-graphite dark:text-white hover:border-brand-green hover:text-brand-green
                transition-colors duration-200"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
