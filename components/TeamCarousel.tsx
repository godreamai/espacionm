"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";

/**
 * Carrusel horizontal del equipo: scroll nativo con snap (swipe en mobile, rueda/trackpad en desktop)
 * más flechas. Sin autoplay. Los hijos deben ser <li> (la lista es semántica).
 */
export function TeamCarousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };
  const btn =
    "inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-nm-teal bg-transparent text-nm-teal transition-colors duration-[180ms] hover:bg-nm-teal hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <ul
        ref={track}
        onScroll={update}
        aria-label="Equipo de Espacio NM"
        className="m-0 -mx-(--gutter) flex list-none snap-x snap-mandatory gap-5 overflow-x-auto px-(--gutter) pb-3 [scrollbar-width:none] scroll-pl-(--gutter) md:mx-0 md:scroll-pl-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="mt-5 flex items-center justify-end gap-3">
        <button type="button" className={btn} onClick={() => go(-1)} disabled={edge.start} aria-label="Ver anteriores">
          <Icon name="arrow-right" size={20} className="rotate-180" />
        </button>
        <button type="button" className={btn} onClick={() => go(1)} disabled={edge.end} aria-label="Ver siguientes">
          <Icon name="arrow-right" size={20} />
        </button>
      </div>
    </div>
  );
}
