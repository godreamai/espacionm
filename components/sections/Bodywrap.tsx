import { Button, WhatsAppButton } from "../Button";
import { BodywrapTimeline } from "../BodywrapTimeline";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";
import { BODYWRAP_CLAIMS } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * 02 · Bodywrap (#bodywrap), bloque teal. Los beneficios SIEMPRE atribuidos a la marca y con aviso
 * de «no son resultados garantizados». Sin duración, sesiones ni cantidad de centímetros.
 */
export function Bodywrap() {
  return (
    <section
      id="bodywrap"
      aria-labelledby="bw-title"
      className="nm-section nm-dome-both relative overflow-hidden bg-nm-teal text-nm-deep-muted"
    >
      {/* Dos arcos de línea concéntricos (eco de la curva del tulipán) */}
      <div aria-hidden="true" className="absolute top-14 right-[-8%] aspect-[3/4] w-[min(58vw,620px)] rounded-[999px_999px_0_0] border border-white/12" />
      <div aria-hidden="true" className="absolute top-[84px] right-[calc(-8%_+_28px)] aspect-[3/4] w-[calc(min(58vw,620px)_-_56px)] rounded-[999px_999px_0_0] border border-white/[.07]" />

      <div className="nm-container relative">
        <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end gap-[clamp(32px,6vw,72px)]">
          <SectionHeading
            id="bw-title"
            tone="deep"
            className="nm-reveal min-w-0 flex-[7_1_420px]"
            eyebrow="Bodywrap con sauna"
            title={<>Un ritual de <em>cuatro pasos.</em></>}
            lead="Espacio NM lo presenta como un recorrido en cuatro etapas: exfoliación en seco, drenaje linfático manual, wraps tibios y una etapa final en cápsula de sauna seco con camilla vibromasajeadora."
          />
          <div style={delay(140)} className="nm-reveal flex min-w-0 flex-[4_1_300px] flex-col gap-4 rounded-[10px] border border-white/[.22] p-6">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-[12px] font-semibold uppercase tracking-[.12em] text-nm-pink-soft">Así lo describe Espacio NM</span>
              <StatusBadge status="pendiente" onDeep>A validar</StatusBadge>
            </div>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] leading-[1.5] text-white">
              {BODYWRAP_CLAIMS.map((c) => (
                <li key={c} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[.55em] size-1.5 flex-none rounded-full bg-nm-pink" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <small className="text-[13px] leading-[1.5] text-nm-deep-muted">
              Beneficios declarados por la marca en su Instagram. No son resultados garantizados; duración y cantidad de sesiones se consultan por WhatsApp.
            </small>
          </div>
        </div>

        <BodywrapTimeline />

        <div className="nm-reveal mt-[clamp(40px,5vw,64px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-white/[.22] pt-8">
          <figure className="m-0 min-w-0 flex-[1_1_360px]">
            <blockquote className="m-0 font-display text-[clamp(22px,2.6vw,30px)] leading-[1.3] text-white text-balance">
              «Un tratamiento integral que transforma tu cuerpo.»
            </blockquote>
            <figcaption className="mt-2 text-[13px] text-nm-deep-muted">Frase publicada por Espacio NM</figcaption>
          </figure>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton variant="on-deep" size="lg">Consultá por Bodywrap</WhatsAppButton>
            <Button variant="outline-on-deep" size="lg" href="#faq">Preguntas frecuentes</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
