import { useEffect, useRef } from "react";

export default function LazyVideo({ sm, md, lg, poster, className, isActive, onPlay, onPause }) {
  const videoRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadedRef.current) {
          loadedRef.current = true;

          // Set src from data-src when element enters viewport
          video.querySelectorAll("source").forEach((source) => {
            if (source.dataset.src) {
              source.src = source.dataset.src;
              delete source.dataset.src;
            }
          });

          // Load only metadata until user clicks play
          video.preload = "metadata";
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading 300px before element is visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Pause and rewind when another video becomes active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isActive) {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) video.volume = 0.2; // start quiet to avoid loud autoplay
  };

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.preload = "auto"; // start full buffering on user intent
      video.volume = 0.2;
      video.play();
      onPlay();
    } else {
      video.pause();
      onPause();
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className={className}
        loop
        playsInline
        preload="none"
        poster={poster}
        onEnded={onPause}
        onLoadedMetadata={handleLoadedMetadata}
      >
        {/* Serve smaller files on smaller screens */}
        {sm && <source data-src={sm} media="(max-width: 640px)" type="video/mp4" />}
        {md && <source data-src={md} media="(max-width: 1024px)" type="video/mp4" />}
        <source data-src={lg} type="video/mp4" />
      </video>

      {/* Play overlay — visible when video is paused */}
      {!isActive && (
        <div
          className="absolute inset-0 flex items-center justify-center
            bg-black/30 group-hover:bg-black/40 transition-opacity duration-300"
        >
          {/* Circular play button with CSS triangle via after: pseudo-element */}
          <div
            className="w-14 h-14 rounded-full bg-white/20 border-2 border-white
              flex items-center justify-center backdrop-blur-sm
              group-hover:bg-white/30 transition-all duration-200
              after:content-[''] after:block after:w-0 after:h-0
              after:border-t-10 after:border-t-transparent
              after:border-b-10 after:border-b-transparent
              after:border-l-18 after:border-l-white after:ml-1"
          />
        </div>
      )}
    </div>
  );
}