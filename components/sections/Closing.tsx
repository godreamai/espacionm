import Image from "next/image";
import { Button, WhatsAppButton } from "../Button";
import { SectionHeading } from "../SectionHeading";
import { INSTAGRAM_URL } from "@/lib/data";

/** 10 · Cierre (#cierre): bloque teal con arco que enmarca el contenido. */
export function Closing() {
  return (
    <section
      id="cierre"
      aria-labelledby="cl-title"
      className="nm-section nm-dome-top relative overflow-hidden border-b border-white/[.22] bg-nm-teal text-center"
    >
      <div
        aria-hidden="true"
        className="absolute top-[clamp(32px,5vw,64px)] -bottom-px left-1/2 w-[min(560px,88%)] -translate-x-1/2 rounded-[999px_999px_0_0] border border-b-0 border-white/12"
      />
      <div className="nm-container nm-reveal relative flex flex-col items-center gap-7">
        <Image src="/tulip-from-logo.png" alt="" width={44} height={43} className="h-auto w-11" />
        <SectionHeading
          id="cl-title"
          tone="deep"
          align="center"
          title={<>Reservá tu <em>momento.</em></>}
          lead="Escribinos por WhatsApp."
        />
        <div className="flex flex-wrap justify-center gap-3">
          <WhatsAppButton variant="on-deep" size="lg" className="nm-btn--pulse" />
          <Button variant="outline-on-deep" size="lg" href={INSTAGRAM_URL} icon="instagram">Instagram</Button>
        </div>
      </div>
    </section>
  );
}
