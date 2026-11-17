import { Button, WhatsAppButton } from "../Button";
import { HoursTable } from "../Cards";
import { SectionHeading } from "../SectionHeading";
import { delay } from "@/lib/motion";
import { HOURS, MAPS_URL, MAP_EMBED_URL } from "@/lib/data";

/** 08 · Ubicación y horarios (#ubicacion). */
export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ub-title" className="nm-section bg-white">
      <div className="nm-container flex flex-wrap items-start gap-x-[clamp(32px,6vw,72px)] gap-y-10">
        <div className="nm-reveal flex min-w-0 flex-[5_1_320px] flex-col gap-6">
          <SectionHeading id="ub-title" eyebrow="Ubicación y horarios" title={<>Te esperamos <em>en Caballito.</em></>} />
          <address className="font-display text-[clamp(24px,2.4vw,30px)] leading-[1.2] text-nm-teal not-italic">
            Otamendi 231<br />Caballito, CABA (C1405)
          </address>
          <HoursTable rows={HOURS} />
          <p className="nm-small m-0 text-nm-muted">Pagos: efectivo y transferencia.</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" href={MAPS_URL} icon="navigation">Cómo llegar</Button>
            <WhatsAppButton />
          </div>
        </div>
        <div style={delay(140)} className="nm-reveal min-w-0 flex-[7_1_360px]">
          <iframe
            title="Mapa: Espacio NM, Otamendi 231, Caballito"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAP_EMBED_URL}
            className="block aspect-[4/3] w-full rounded-[10px] border-0 bg-nm-cream-2 saturate-75"
          />
        </div>
      </div>
    </section>
  );
}
