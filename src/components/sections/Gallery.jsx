// src/components/sections/Gallery.jsx
import { useTheme } from "@context/useTheme";
import { useState } from "react";
import LazyVideo from "@components/ui/LazyVideo";

const VIDEOS = [
  {
    sm: "/videos/move1-sm.mp4",
    md: "/videos/move1-md.mp4",
    lg: "/videos/move1-lg.mp4",
  },
  {
    sm: "/videos/move3-sm.mp4",
    md: "/videos/move3-md.mp4",
    lg: "/videos/move3-lg.mp4",
  },
  {
    sm: "/videos/move4-sm.mp4",
    md: "/videos/move4-md.mp4",
    lg: "/videos/move4-lg.mp4",
  },
  {
    sm: "/videos/move5-sm.mp4",
    md: "/videos/move5-md.mp4",
    lg: "/videos/move5-lg.mp4",
  },
];

export default function Gallery() {
  const { t } = useTheme();

  // Index of the currently playing video, null if none is playing
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="gallery"
      style={{ backgroundColor: t.bg.section }}
      className="pt-0 pb-16 xl:pt-0 xl:pb-24"
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

        {/* Video grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              style={{ borderColor: t.border }}
              className="rounded-2xl overflow-hidden shadow-lg border aspect-[9/16]"
            >
              <LazyVideo
                sm={v.sm}
                md={v.md}
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
