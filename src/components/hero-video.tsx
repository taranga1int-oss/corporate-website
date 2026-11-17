"use client";

import { useEffect, useRef } from "react";

type Props = {
  assetBase: string;
  label: string;
};

// Short "how Bill to Company works" clip for the hero.
// Muted autoplay loop that only plays while on screen. Stays on the poster
// still when the visitor prefers reduced motion or has Data Saver on.
export default function HeroVideo({ assetBase, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (reduceMotion || saveData) return;

    // Needed for autoplay on iOS/Safari.
    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const poster = `${assetBase}/video/how-it-works-poster.jpg`;

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      disablePictureInPicture
    >
      <source src={`${assetBase}/video/how-it-works.webm`} type="video/webm" />
      <source src={`${assetBase}/video/how-it-works.mp4`} type="video/mp4" />
    </video>
  );
}
