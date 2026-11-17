import { Button } from "../Button";
import { ReviewsCarousel } from "../ReviewsCarousel";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";
import { MAPS_URL, REVIEWS } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * 05 · Opiniones (#opiniones): el momento de silencio de la página (única banda rose-mist).
 * La calificación es un numeral monumental fijo a la izquierda; la cita ocupa la columna de lectura.
 * Exactamente 3 reseñas textuales.
 */
export function Reviews() {
  return (
    <section id="opiniones" aria-labelledby="rv-title" className="nm-rv">
      <div className="nm-container">
        <div className="nm-grid nm-rv__grid">
          {/* Dato observado al 17/11/2026: verificar contra la ficha de Google antes de publicar. */}
          <div className="nm-reveal nm-rv__rating">
            <span className="nm-eyebrow">Opiniones en Google</span>
            <span className="nm-rv__score">4,7</span>
            <span aria-hidden="true" className="nm-rv__stars">★★★★★</span>
            <span className="nm-rv__count">107 reseñas en Google</span>
            <StatusBadge status="observado">Dato al 17/11/2026</StatusBadge>
            <div className="pt-2">
              <Button variant="ghost" href={MAPS_URL} icon="googlemaps" iconRight="arrow-up-right">
                Ver las 107 reseñas
              </Button>
            </div>
            <StatusBadge status="pendiente">Fragmentos textuales · uso a aprobar</StatusBadge>
          </div>
          <div style={delay(120)} className="nm-reveal nm-rv__main">
            <SectionHeading id="rv-title" size="sm" className="mb-12" title={<>Lo que cuentan <em>quienes vinieron.</em></>} />
            <ReviewsCarousel reviews={REVIEWS} />
          </div>
        </div>
      </div>
    </section>
  );
}
