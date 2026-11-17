import { Button, WhatsAppButton } from "../Button";
import { BodywrapTimeline } from "../BodywrapTimeline";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";
import { BODYWRAP_CLAIMS } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * 02 · Bodywrap (#bodywrap), bloque teal inmersivo con cortes rectos.
 * Los beneficios SIEMPRE atribuidos a la marca y con aviso de «no son resultados garantizados».
 * Sin duración, sesiones ni cantidad de centímetros.
 */
export function Bodywrap() {
  return (
    <section id="bodywrap" aria-labelledby="bw-title" className="nm-bw">
      <div className="nm-container">
        <div className="nm-grid nm-bw__head">
          <SectionHeading
            id="bw-title"
            tone="deep"
            className="nm-reveal nm-bw__title"
            eyebrow="Bodywrap con sauna"
            title={<>Un ritual de <em>cuatro pasos.</em></>}
            lead="Espacio NM lo presenta como un recorrido en cuatro etapas: exfoliación en seco, drenaje linfático manual, wraps tibios y una etapa final en cápsula de sauna seco con camilla vibromasajeadora."
          />
          <div style={delay(140)} className="nm-reveal nm-bw__claims">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <span className="nm-bw__claims-label">Así lo describe Espacio NM</span>
              <StatusBadge status="pendiente" onDeep>A validar</StatusBadge>
            </div>
            <ul>
              {BODYWRAP_CLAIMS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <small>
              Beneficios declarados por la marca en su Instagram. No son resultados garantizados; duración y cantidad de sesiones se consultan por WhatsApp.
            </small>
          </div>
        </div>

        <BodywrapTimeline />

        <div className="nm-reveal nm-bw__foot">
          <figure className="m-0 min-w-0">
            <blockquote className="nm-bw__quote">«Un tratamiento integral que transforma tu cuerpo.»</blockquote>
            <figcaption className="nm-bw__cite">Frase publicada por Espacio NM</figcaption>
          </figure>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <WhatsAppButton variant="on-deep" size="lg">Consultá por Bodywrap</WhatsAppButton>
            <Button variant="ghost-on-deep" href="#faq" iconRight="arrow-right">Preguntas frecuentes</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
