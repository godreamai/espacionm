"use client";

import { useEffect, useRef } from "react";
import { BODYWRAP_STEPS } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * Cuatro etapas del Bodywrap. Al llegar a pantalla, la línea rosa de cada paso se «dibuja»,
 * el numeral se rellena y el texto se enciende en secuencia (escalonado). Sin JS o con
 * prefers-reduced-motion queda todo visible (los estilos solo aplican bajo `.is-armed`).
 */
export function BodywrapTimeline() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ol = ref.current;
    if (!ol) return;
    const items = Array.from(ol.querySelectorAll<HTMLElement>(".nm-steps__item"));
    ol.classList.add("is-armed");
    if (!("IntersectionObserver" in window)) {
      items.forEach((li) => li.classList.add("is-lit"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-lit");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.35 },
    );
    items.forEach((li) => io.observe(li));
    const t = window.setTimeout(() => items.forEach((li) => li.classList.add("is-lit")), 6000);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return (
    <ol ref={ref} className="nm-steps">
      {BODYWRAP_STEPS.map((s, i) => (
        <li key={s.title} className="nm-steps__item" style={delay(i * 220)}>
          <span className="nm-steps__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="nm-steps__title">
            <span className="nm-sr-only">Paso {i + 1}: </span>
            {s.title}
          </h3>
          <p className="nm-steps__text">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
