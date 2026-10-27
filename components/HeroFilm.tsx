"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroFilmProps = {
  sources: readonly string[];
  poster: string;
};

export function HeroFilm({ sources, poster }: HeroFilmProps) {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const current = sources[index] ?? sources[0];

  return (
    <div className="home-hero-media" aria-hidden>
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="home-hero-poster"
      />
      {reduce || !current ? null : (
        <video
          key={current}
          className="home-hero-video"
          autoPlay
          muted
          playsInline
          loop={sources.length < 2}
          poster={poster}
          onEnded={() => {
            if (sources.length > 1) {
              setIndex((value) => (value + 1) % sources.length);
            }
          }}
        >
          <source src={current} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
