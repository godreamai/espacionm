import Image from "next/image";
import { Button, WhatsAppButton } from "../Button";
import { SectionHeading } from "../SectionHeading";
import { INSTAGRAM_URL } from "@/lib/data";

/**
 * 09 · Cierre (#cierre). Tipografía monumental sobre teal; el único gesto curvo es el arco del tulipán
 * en línea fina. Continúa sin corte en el footer (mismo teal, solo una regla fina).
 */
export function Closing() {
  return (
    <section id="cierre" aria-labelledby="cl-title" className="nm-close nm-dome-top">
      <div aria-hidden="true" className="nm-close__arch" />
      <div className="nm-container nm-reveal nm-close__inner">
        <Image src="/tulip-from-logo.png" alt="" width={56} height={54} className="h-auto w-14" />
        <SectionHeading
          id="cl-title"
          tone="deep"
          size="xl"
          titleClassName="nm-close__title"
          title={<>Reservá tu <em>momento.</em></>}
        />
        <div className="nm-close__foot">
          <WhatsAppButton variant="on-deep" size="lg" />
          <Button variant="ghost-on-deep" href={INSTAGRAM_URL} icon="instagram">Instagram</Button>
        </div>
      </div>
    </section>
  );
}
