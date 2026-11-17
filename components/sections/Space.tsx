import { MediaPlaceholder } from "../MediaPlaceholder";
import { SectionHeading } from "../SectionHeading";
import { delay } from "@/lib/motion";

/**
 * 06 · El espacio (#espacio): composición arquitectónica con cuatro proporciones distintas
 * (5:4 protagonista a sangre izquierda · 4:5 jardín · 3:2 salón · 1:1 sauna).
 * Derechos pendientes: living = foto de clienta (solo demo interna); salón = ficha de Google.
 * TODO: reemplazar por 10–15 fotos propias; faltan Jardín y Cápsulas de sauna seco.
 */
export function Space() {
  return (
    <section id="espacio" aria-labelledby="es-title" className="nm-space">
      <div className="nm-container">
        <div className="nm-grid nm-space__grid">
          <div className="nm-reveal nm-space__text">
            <SectionHeading
              id="es-title"
              size="md"
              eyebrow="El espacio"
              title={<>Una casa cálida, <em>pensada para desconectar.</em></>}
            />
            <p>Una casa antigua reciclada: parquet en espiga, molduras, un ventanal al jardín y un living con sofás claros.</p>
          </div>

          <div className="nm-reveal nm-space__a">
            <MediaPlaceholder
              ratio="5/4"
              src="/photos/espacio-recepcion-living.jpg"
              position="40% 55%"
              alt="Living de recepción con sofá blanco, almohadones bordados, sillón claro, mesa de madera y parquet"
              status="pendiente"
              statusLabel="Foto de clienta · solo demo interna"
              sizes="(min-width: 1024px) 920px, 100vw"
            />
          </div>

          <div style={delay(100)} className="nm-reveal nm-space__b">
            <MediaPlaceholder ratio="4/5" label="Jardín" statusLabel="Falta foto" />
          </div>

          <div style={delay(80)} className="nm-reveal nm-space__c">
            <MediaPlaceholder
              ratio="3/2"
              src="/photos/espacio-salon-parquet.jpg"
              position="50% 70%"
              alt="Ventanal del salón con vista al jardín"
              status="pendiente"
              statusLabel="Derechos a confirmar"
              sizes="(min-width: 1024px) 740px, 100vw"
            />
          </div>

          <div style={delay(160)} className="nm-reveal nm-space__d">
            <MediaPlaceholder ratio="1/1" tone="rose" label="Cápsulas de sauna seco" statusLabel="Falta foto" />
          </div>
        </div>
      </div>
    </section>
  );
}
