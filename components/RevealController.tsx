"use client";

import { useEffect } from "react";

/**
 * Activa los `.nm-reveal` de toda la página al entrar en pantalla (una sola vez).
 * Respaldo: a los 4 s se muestran igual. Con prefers-reduced-motion el CSS ya los deja visibles.
 */
export function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".nm-reveal"));
    const show = (el: Element) => el.classList.add("is-in");
    const t = window.setTimeout(() => els.forEach(show), 4000);
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);
  return null;
}
