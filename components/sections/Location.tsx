import { Button, WhatsAppButton } from "../Button";
import { HoursTable } from "../Cards";
import { SectionHeading } from "../SectionHeading";
import { delay } from "@/lib/motion";
import { HOURS, MAPS_URL, MAP_EMBED_URL } from "@/lib/data";

/** 07 · Ubicación y horarios (#ubicacion): información compacta a la izquierda, mapa a sangre derecha. */
export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ub-title" className="nm-loc">
      <div className="nm-container">
        <div className="nm-grid nm-loc__grid">
          <div className="nm-reveal nm-loc__info">
            <SectionHeading id="ub-title" size="sm" eyebrow="Ubicación y horarios" title={<>Te esperamos <em>en Caballito.</em></>} />
            <address className="nm-loc__address">
              Otamendi 231<br />Caballito, CABA (C1405)
            </address>
            <div>
              <HoursTable rows={HOURS} />
              <p className="nm-small m-0 pt-4 text-nm-muted">Pagos: efectivo y transferencia.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" href={MAPS_URL} icon="navigation">Cómo llegar</Button>
              <WhatsAppButton />
            </div>
          </div>
          <div style={delay(140)} className="nm-reveal nm-loc__map">
            <iframe
              title="Mapa: Espacio NM, Otamendi 231, Caballito"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={MAP_EMBED_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
