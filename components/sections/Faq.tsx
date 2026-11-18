import { Button } from "../Button";
import { FaqAccordion } from "../FaqAccordion";
import { TulipDivider } from "../TulipLine";
import { SectionHeading } from "../SectionHeading";
import { WHATSAPP_URL, FAQ } from "@/lib/data";
import { delay } from "@/lib/motion";

/** 08 · Preguntas frecuentes (#faq): ligera, a ancho completo, con pregunta numerada. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="fq-title" className="nm-faqs">
      <div className="nm-container">
        <TulipDivider className="mb-12 lg:mb-16" />
        <div className="nm-reveal nm-faqs__head">
          <SectionHeading id="fq-title" size="sm" title={<>Antes de <em>tu turno.</em></>} />
          <Button variant="ghost" href={WHATSAPP_URL} icon="whatsapp">¿Otra consulta? Escribinos</Button>
        </div>
        <div style={delay(100)} className="nm-reveal">
          <FaqAccordion items={FAQ} />
        </div>
      </div>
    </section>
  );
}
