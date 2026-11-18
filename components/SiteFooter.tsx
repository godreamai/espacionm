import { WhatsAppButton } from "./Button";
import { Logo } from "./Logo";
import { TulipDivider } from "./TulipLine";
import { FOOTER_LINKS, HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_PLAIN_URL } from "@/lib/data";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Footer en cuatro columnas: marca · secciones · contacto · visitanos. Continúa el bloque teal del cierre. */
export function SiteFooter() {
  return (
    <footer className="nm-footer">
      <div className="nm-footer__rule"><TulipDivider tone="deep" /></div>
      <div className="nm-footer__grid">
        <div className="nm-footer__brand">
          <Logo width={200} />
          <p className="nm-footer__slogan">Tu espacio, tu bienestar.</p>
          <WhatsAppButton variant="on-deep" size="sm" />
        </div>

        <nav aria-label="Secciones">
          <h3>Secciones</h3>
          <ul className="nm-footer__list nm-footer__list--cols">
            <li><a href="#top">Inicio</a></li>
            {FOOTER_LINKS.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Contacto</h3>
          <ul className="nm-footer__list">
            <li><a href={WHATSAPP_PLAIN_URL} {...ext}>WhatsApp · 011 5003-8238</a></li>
            <li><a href={INSTAGRAM_URL} {...ext}>Instagram · @espacionm</a></li>
          </ul>
        </div>

        <div>
          <h3>Visitanos</h3>
          <ul className="nm-footer__list">
            <li><a href={MAPS_URL} {...ext}>Otamendi 231, Caballito, CABA (C1405)</a></li>
            {HOURS.map(([day, hours]) => (
              <li key={day}>{day}: {hours}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nm-footer__legal"><div>
        <span>© Espacio NM &amp; Bodywrap · Caballito, Buenos Aires</span>
        <span>Pagos: efectivo y transferencia</span></div>
      </div>
    </footer>
  );
}
