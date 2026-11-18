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
 * Sin autoplay. Una reseña a la vez; la botonera comparte línea con el contador, bajo una regla fina.
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
    "inline-flex size-14 items-center justify-center rounded-full border border-nm-teal bg-transparent text-nm-teal transition-colors duration-[180ms] hover:bg-nm-teal hover:text-white cursor-pointer";

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Opiniones en Google">
      <div
        ref={track}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, k) => (
          <figure key={r.author} role="group" aria-roledescription="reseña" aria-label={`${k + 1} de ${n}`} className="nm-quote-slide">
            <span aria-hidden="true" className="nm-quote-slide__mark">“</span>
            <blockquote>{r.quote}</blockquote>
            <figcaption className="nm-quote-slide__by">
              <span className="font-semibold text-nm-ink">{r.author}</span>
              {r.meta && <span className="text-nm-muted">{r.meta}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="nm-carousel__bar mt-10 flex items-center max-lg:justify-center lg:justify-between gap-5 border-t border-nm-teal/25 pt-6">
        <span className="font-body text-[15px] tabular-nums tracking-[.1em] text-nm-teal" aria-live="polite">
          {pad(i + 1)} <span className="text-nm-muted">/ {pad(n)}</span>
        </span>
        <div className="flex items-center gap-3">
          <button type="button" className={btn} onClick={() => go(i - 1)} aria-label="Reseña anterior">
            <Icon name="arrow-right" size={20} className="rotate-180" />
          </button>
          <button type="button" className={btn} onClick={() => go(i + 1)} aria-label="Reseña siguiente">
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
