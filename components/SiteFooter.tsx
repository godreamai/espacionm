import { WhatsAppButton } from "./Button";
import { HoursTable } from "./Cards";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_PLAIN_URL } from "@/lib/data";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteFooter() {
  return (
    <footer className="nm-footer">
      <div className="nm-footer__rule" aria-hidden="true" />
      <div className="nm-footer__grid">
        <div className="nm-footer__brand">
          <Logo width={220} />
          <p className="nm-footer__slogan">Tu espacio, tu bienestar.</p>
          <WhatsAppButton variant="on-deep" />
        </div>
        <div>
          <h3>Contacto</h3>
          <ul className="nm-footer__list">
            <li>
              <Icon name="map-pin" size={18} />
              <a href={MAPS_URL} {...ext}>Otamendi 231, Caballito, CABA (C1405)</a>
            </li>
            <li>
              <Icon name="whatsapp" size={18} />
              <a href={WHATSAPP_PLAIN_URL} {...ext}>011 5003-8238</a>
            </li>
            <li>
              <Icon name="instagram" size={18} />
              <a href={INSTAGRAM_URL} {...ext}>@espacionm</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Horarios</h3>
          <HoursTable rows={HOURS} tone="deep" />
        </div>
      </div>
      <div className="nm-footer__legal">
        <span>© Espacio NM &amp; Bodywrap · Caballito, Buenos Aires</span>
        <span>Pagos: efectivo y transferencia</span>
      </div>
    </footer>
  );
}
