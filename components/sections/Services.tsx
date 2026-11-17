import { SectionHeading } from "../SectionHeading";
import { ServiceExplorer } from "../ServiceExplorer";
import { SERVICES } from "@/lib/data";
import { delay } from "@/lib/motion";

/** 03 · Servicios (#servicios): 4 categorías en pestañas, sin precios ni duraciones. */
export function Services() {
  return (
    <section id="servicios" aria-labelledby="sv-title" className="nm-section py-[clamp(56px,7vw,96px)] pt-[clamp(72px,9vw,128px)]">
      <div className="nm-container">
        <div className="nm-reveal mb-9 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <SectionHeading
            id="sv-title"
            className="min-w-0 flex-[1_1_420px]"
            eyebrow="Servicios"
            title={<>Cuidado para cuerpo, <em>rostro</em> y descanso.</>}
          />
          <p className="m-0 flex-[0_1_380px] text-nm-muted">
            Elegí una categoría. Cada tratamiento se coordina por WhatsApp, donde también podés consultar disponibilidad.
          </p>
        </div>
        <div className="nm-reveal" style={delay(120)}>
          <ServiceExplorer categories={SERVICES} />
        </div>
      </div>
    </section>
  );
}
