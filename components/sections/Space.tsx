import Image from "next/image";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { SectionHeading } from "../SectionHeading";
import { delay } from "@/lib/motion";

/**
 * 06 · El espacio (#espacio): el momento inmersivo de la página.
 * Una banda de foto a pantalla completa con el título encima; debajo, dos imágenes de escala muy
 * distinta (jardín en arco, que invade la banda, y una cápsula ancha) y el texto como pie.
 * Imágenes generadas con IA como provisorias: reemplazar por fotos reales de la casa.
 */
export function Space() {
  return (
    <section id="espacio" aria-labelledby="es-title" className="nm-space">
      <div className="nm-space__band">
        <Image
          src="/photos/salon-ventanal.png"
          alt="Salón luminoso con parquet en espiga y un ventanal al jardín"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "40% 60%", zIndex: -2 }}
        />
        <div className="nm-container nm-reveal">
          <SectionHeading id="es-title" tone="deep" titleClassName="nm-space__h" title={<>Una casa cálida, pensada para desconectar.</>} />
        </div>
      </div>

      <div className="nm-container">
        <div className="nm-grid nm-space__body">
          <div style={delay(60)} className="nm-reveal nm-space__jardin">
            <MediaPlaceholder
              shape="arch"
              ratio="4/5"
              src="/photos/jardin.png"
              position="50% 62%"
              alt="Patio con jardín, mesa y sillas al atardecer"
              statusLabel="Imagen generada · provisoria"
              sizes="(min-width: 1024px) 380px, 75vw"
            />
          </div>
          <div style={delay(140)} className="nm-reveal nm-space__capsula">
            <MediaPlaceholder
              ratio="3/2"
              src="/photos/capsula-sauna.png"
              position="50% 60%"
              alt="Cápsula de sauna seco con camilla en una sala cálida"
              statusLabel="Imagen generada · provisoria"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
          <p className="nm-reveal nm-space__caption">
            Una casa antigua reciclada: parquet en espiga, molduras, un ventanal al jardín y un living con sofás claros.
          </p>
        </div>
      </div>
    </section>
  );
}
