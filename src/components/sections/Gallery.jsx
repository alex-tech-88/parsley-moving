import { useTheme } from "@context/useTheme";
import { useState } from "react";
import LazyVideo from "@components/ui/LazyVideo";
import Slider from "@components/ui/Slider";

const VIDEOS = [
  { lg: "/videos/move1-lg.mp4" },
  { lg: "/videos/move3-lg.mp4" },
  { lg: "/videos/move4-lg.mp4" },
  { lg: "/videos/move5-lg.mp4" },
];

export default function Gallery() {
  const { t } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null); // index of playing video

  return (
    <section
      id="gallery"
      style={{ backgroundColor: t.bg.section }}
      className="pt-0 pb-16 xl:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        {/* Section header */}
        <div className="mb-10">
          <span
            style={{ backgroundColor: t.bg.accent, color: t.brand.primary }}
            className="text-sm font-semibold px-4 py-1.5 rounded-full"
          >
            Gallery
          </span>
          <h2 className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white mt-4 leading-tight">
            Our Work
            <br />
            <span className="text-brand-green">in Action</span>
          </h2>
        </div>

        {/* Mobile — slider */}
        <div className="sm:hidden">
          <Slider
            items={VIDEOS}
            visibleCount={1}
            autoPlay
            autoPlayInterval={4500}
            isPaused={activeIndex !== null}
            onSlideChange={() => setActiveIndex(null)}
            renderItem={(v, i) => (
              <div
                key={i}
                style={{ borderColor: t.border }}
                className="rounded-2xl overflow-hidden shadow-lg border aspect-[9/16]"
              >
                <LazyVideo
                  lg={v.lg}
                  className="w-full h-full object-cover"
                  isActive={activeIndex === i}
                  onPlay={() => setActiveIndex(i)}
                  onPause={() => setActiveIndex(null)}
                />
              </div>
            )}
          />
        </div>

        {/* Tablet and desktop — 4 columns grid */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-4">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              style={{ borderColor: t.border }}
              className="rounded-2xl overflow-hidden shadow-lg border aspect-[9/16]"
            >
              <LazyVideo
                lg={v.lg}
                className="w-full h-full object-cover"
                isActive={activeIndex === i}
                onPlay={() => setActiveIndex(i)}
                onPause={() => setActiveIndex(null)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
