import { FaqAccordion } from "../FaqAccordion";
import { SectionHeading } from "../SectionHeading";
import { FAQ } from "@/lib/data";
import { delay } from "@/lib/motion";

/** 09 · Preguntas frecuentes (#faq). */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="fq-title" className="nm-section pb-[clamp(88px,10vw,150px)]">
      <div className="nm-container flex flex-wrap items-start gap-x-[clamp(32px,6vw,72px)] gap-y-8">
        <SectionHeading id="fq-title" className="nm-reveal min-w-0 flex-[4_1_280px]" eyebrow="Preguntas frecuentes" title={<>Antes de <em>tu turno.</em></>} />
        <div style={delay(120)} className="nm-reveal min-w-0 flex-[8_1_420px]">
          <FaqAccordion items={FAQ} />
        </div>
      </div>
    </section>
  );
}
