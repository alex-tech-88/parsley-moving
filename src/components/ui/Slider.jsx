import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@context/useTheme";

// Pure function outside component — no dependencies on props or state
const resolveCount = (visibleCount) => {
  if (typeof visibleCount === "number") return visibleCount;
  if (typeof window === "undefined") return visibleCount?.desktop ?? 1;
  return window.innerWidth >= 640
    ? (visibleCount?.desktop ?? 1)
    : (visibleCount?.mobile ?? 1);
};

export default function Slider({
  items,                    // array of any data
  renderItem,               // (item, index) => JSX
  visibleCount,             // number or { mobile, desktop }
  autoPlay = false,         // auto-advance slides
  autoPlayInterval = 4500,
  isPaused = false,         // external pause (e.g. when video is playing)
  onSlideChange,            // optional callback (newIndex) => void
}) {
  const { t } = useTheme();
  const total = items.length;

  const [current, setCurrent] = useState(0);
  const [isInternalPaused, setIsInternalPaused] = useState(false); // pause on hover
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(null);

  const [count, setCount] = useState(() => resolveCount(visibleCount));

  // Update visible count on resize
  useEffect(() => {
    const onResize = () => setCount(resolveCount(visibleCount));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visibleCount]);

  // Navigate to slide with animation
  const goTo = useCallback(
    (index, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        const next = (index + total) % total;
        setCurrent(next);
        setAnimating(false);
        onSlideChange?.(next);
      }, 500);
    },
    [animating, total, onSlideChange]
  );

  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);

  // Auto-play — paused by hover or external isPaused prop
  useEffect(() => {
    if (!autoPlay || isPaused || isInternalPaused) return;
    const timer = setInterval(() => goTo(current + 1, "next"), autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, isInternalPaused, current, goTo, autoPlayInterval]);

  // Swipe support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slideClass = animating
    ? direction === "next"
      ? "opacity-0 -translate-x-12 scale-[0.97]"
      : "opacity-0 translate-x-12 scale-[0.97]"
    : "opacity-100 translate-x-0 scale-100";

  // Slice of items currently visible
  const visibleItems = Array.from(
    { length: count },
    (_, i) => ({ item: items[(current + i) % total], index: (current + i) % total })
  );

  return (
    <div
      onMouseEnter={() => setIsInternalPaused(true)}
      onMouseLeave={() => setIsInternalPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className={`grid gap-6 transition-all duration-500 ease-out ${slideClass}`}
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {visibleItems.map(({ item, index }) => renderItem(item, index))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          style={{ borderColor: t.border }}
          className="w-10 h-10 rounded-full border flex cursor-pointer items-center
            justify-center text-3xl text-graphite dark:text-white
            hover:border-brand-green hover:text-brand-green transition-colors duration-200"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2 items-center">
          {items.map((_, i) => (
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
          className="w-10 h-10 rounded-full border flex cursor-pointer items-center
            justify-center text-3xl text-graphite dark:text-white
            hover:border-brand-green hover:text-brand-green transition-colors duration-200"
        >
          ›
        </button>
      </div>
    </div>
  );
}
