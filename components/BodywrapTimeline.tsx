import { BODYWRAP_STEPS } from "@/lib/data";
import { delay } from "@/lib/motion";
import type { CSSProperties } from "react";

/**
 * Cuatro etapas del Bodywrap. La numeración es protagonista y, en desktop, cada etapa
 * baja un peldaño respecto de la anterior (escalera): el recorrido se lee de izquierda a derecha y hacia abajo.
 * Sin JS ni animaciones decorativas: solo el reveal escalonado de toda la página.
 */
export function BodywrapTimeline() {
  return (
    <ol className="nm-steps">
      {BODYWRAP_STEPS.map((s, i) => (
        <li key={s.title} className="nm-steps__item nm-reveal" style={{ ...delay(i * 120), "--n": i } as CSSProperties}>
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
