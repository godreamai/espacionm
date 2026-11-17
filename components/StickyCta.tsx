"use client";

import { useEffect, useState } from "react";
import { Button, WhatsAppButton } from "./Button";
import { MAPS_URL } from "@/lib/data";

/**
 * Barra fija mobile («Cómo llegar» + «Pedí tu turno»). Se oculta mientras el hero (#top)
 * o el cierre (#cierre) están visibles (IntersectionObserver, umbral 0.2). Oculta desde 1024px (CSS).
 */
export function StickyCta() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setHidden(false);
      return;
    }
    const vis = new Map<Element, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => vis.set(e.target, e.isIntersecting));
        setHidden([...vis.values()].some(Boolean));
      },
      { threshold: 0.2 },
    );
    ["top", "cierre"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    // `inert` mientras está oculta: sin foco por teclado ni lectura por lectores de pantalla.
    <div className={`nm-sticky${hidden ? " nm-sticky--hidden" : ""}`} inert={hidden}>
      <Button
        href={MAPS_URL}
        variant="secondary"
        icon="map-pin"
        aria-label="Cómo llegar en Google Maps"
        style={{ flex: "0 0 auto", padding: "0 16px" }}
      >
        <span className="nm-sr-only">Cómo llegar</span>
      </Button>
      <WhatsAppButton />
    </div>
  );
}
