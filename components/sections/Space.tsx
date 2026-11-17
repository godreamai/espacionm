import { MediaPlaceholder } from "../MediaPlaceholder";
import { SectionHeading } from "../SectionHeading";
import { delay } from "@/lib/motion";

/**
 * 07 · El espacio (#espacio): galería asimétrica.
 * Derechos pendientes: living = foto de clienta (solo demo interna); salón = ficha de Google.
 * TODO: reemplazar por 10–15 fotos propias; faltan Jardín y Cápsulas de sauna seco.
 */
export function Space() {
  return (
    <section id="espacio" aria-labelledby="es-title" className="nm-section">
      <div className="nm-container">
        <div className="nm-reveal mb-9 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <SectionHeading
            id="es-title"
            className="min-w-0 flex-[1_1_420px]"
            eyebrow="El espacio"
            title={<>Una casa cálida, <em>pensada para desconectar.</em></>}
          />
          <p className="m-0 flex-[0_1_380px] text-nm-muted">
            Una casa antigua reciclada: parquet en espiga, molduras, un ventanal al jardín y un living con sofás claros.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3">
          <div className="nm-reveal min-w-0 flex-[2_1_460px]">
            <MediaPlaceholder
              ratio="16/10"
              src="/photos/espacio-recepcion-living.jpg"
              position="40% 55%"
              alt="Living de recepción con sofá blanco, almohadones bordados, sillón claro, mesa de madera y parquet"
              status="pendiente"
              statusLabel="Foto de clienta · solo demo interna"
              sizes="(min-width: 1024px) 760px, 100vw"
            />
          </div>
          <div style={delay(140)} className="nm-reveal flex min-w-0 flex-[1_1_260px] flex-col gap-3 lg:mt-16">
            <MediaPlaceholder
              ratio="4/3"
              src="/photos/espacio-salon-parquet.jpg"
              position="50% 70%"
              alt="Ventanal del salón con vista al jardín"
              status="pendiente"
              statusLabel="Derechos a confirmar"
              sizes="(min-width: 1024px) 380px, 100vw"
            />
            <div className="flex gap-3">
              <div className="min-w-0 flex-[1_1_0]">
                <MediaPlaceholder ratio="1/1" label="Jardín" statusLabel="Falta foto" />
              </div>
              <div className="min-w-0 flex-[1_1_0] lg:mt-8">
                <MediaPlaceholder ratio="1/1" tone="rose" label="Cápsulas de sauna seco" statusLabel="Falta foto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
