"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";

interface Review {
  quote: string;
  author: string;
  meta?: string;
}

/**
 * Reseñas textuales en carrusel MANUAL (scroll-snap: swipe en mobile, flechas en desktop).
 * Sin autoplay. Una reseña a la vez, con presencia tipográfica.
 */
export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = reviews.length;

  const go = (k: number) => {
    const el = track.current;
    if (!el) return;
    const idx = (k + n) % n;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: idx * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };
  const onScroll = () => {
    const el = track.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  };
  const pad = (v: number) => String(v).padStart(2, "0");
  const btn =
    "inline-flex size-12 items-center justify-center rounded-full border border-nm-teal bg-transparent text-nm-teal transition-colors duration-[180ms] hover:bg-nm-teal hover:text-white cursor-pointer";

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Opiniones en Google" className="border-t border-nm-teal/20 pt-8">
      <div
        ref={track}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, k) => (
          <figure
            key={r.author}
            role="group"
            aria-roledescription="reseña"
            aria-label={`${k + 1} de ${n}`}
            className="m-0 flex min-w-0 flex-[0_0_100%] snap-center flex-col gap-6 pr-1"
          >
            <span aria-hidden="true" className="h-[34px] font-display text-[88px] leading-[.55] text-nm-pink">“</span>
            <blockquote className="m-0 max-w-[30ch] font-display text-[clamp(26px,3.4vw,44px)] leading-[1.2] text-nm-teal text-balance">
              {r.quote}
            </blockquote>
            <figcaption className="flex flex-col gap-0.5 text-[14px]">
              <span className="font-semibold text-nm-ink">{r.author}</span>
              {r.meta && <span className="text-[13px] text-nm-muted">{r.meta}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-5">
        <button type="button" className={btn} onClick={() => go(i - 1)} aria-label="Reseña anterior">
          <Icon name="arrow-right" size={20} className="rotate-180" />
        </button>
        <button type="button" className={btn} onClick={() => go(i + 1)} aria-label="Reseña siguiente">
          <Icon name="arrow-right" size={20} />
        </button>
        <span className="font-body text-[13px] tabular-nums tracking-[.08em] text-nm-muted" aria-live="polite">
          {pad(i + 1)} / {pad(n)}
        </span>
      </div>
    </div>
  );
}
