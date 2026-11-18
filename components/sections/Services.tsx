import { SectionHeading } from "../SectionHeading";
import { ServiceExplorer } from "../ServiceExplorer";
import { SERVICES } from "@/lib/data";

/** 03 · Servicios (#servicios): sección densa. Índice tipográfico de 4 categorías, sin precios ni duraciones. */
export function Services() {
  return (
    <section id="servicios" aria-labelledby="sv-title" className="nm-section">
      <div className="nm-container">
        <div className="nm-grid nm-svc__head nm-reveal">
          <SectionHeading
            id="sv-title"
            className="nm-svc__title"
            title={<>Cuidado para cuerpo, <em>rostro</em> y descanso.</>}
          />
          <p className="nm-svc__intro">
            Elegí una categoría. Cada tratamiento se coordina por WhatsApp, donde también podés consultar disponibilidad.
          </p>
        </div>
        <ServiceExplorer categories={SERVICES} />
      </div>
    </section>
  );
}
