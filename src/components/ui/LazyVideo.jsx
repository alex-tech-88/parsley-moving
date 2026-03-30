import { useEffect, useRef } from "react";

export default function LazyVideo({ lg, poster, className, isActive, onPlay, onPause }) {
  const videoRef = useRef(null);

  // Load video source only when element enters viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const source = video.querySelector("source");
          if (source.dataset.src) {
            source.src = source.dataset.src;
          }
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before element is visible
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
      video.currentTime = 0; // rewind to beginning
    }
  }, [isActive]);

    const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) video.volume = 0.2; // start with very low volume to avoid loud auto-play
  };

  // Toggle play/pause on click
  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.volume = 0.2; // ensure volume is low when starting
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
        <source data-src={lg} type="video/mp4" />
      </video>

      {/* Play overlay — visible when video is paused */}
      {!isActive && (
        <div
          className="absolute inset-0 flex items-center justify-center
            bg-black/30 group-hover:bg-black/40 transition-opacity duration-300"
        >
          {/* Circular play button with CSS triangle arrow via after: */}
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
