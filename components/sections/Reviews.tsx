import { Button } from "../Button";
import { ReviewsCarousel } from "../ReviewsCarousel";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";
import { MAPS_URL, REVIEWS } from "@/lib/data";
import { delay } from "@/lib/motion";

/** 05 · Opiniones (#opiniones): única banda rose-mist. Exactamente 3 reseñas textuales. */
export function Reviews() {
  return (
    <section id="opiniones" aria-labelledby="rv-title" className="nm-section bg-nm-rose-mist py-[clamp(56px,7vw,96px)]">
      <div className="nm-container">
        <div className="nm-reveal mb-9 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <SectionHeading
            id="rv-title"
            className="min-w-0 flex-[1_1_420px]"
            eyebrow="Opiniones en Google"
            title={<>Lo que cuentan <em>quienes vinieron.</em></>}
          />
          {/* Dato observado al 17/11/2026: verificar contra la ficha de Google antes de publicar. */}
          <div className="flex flex-[0_1_auto] items-center gap-4">
            <span className="font-display text-[clamp(56px,7vw,80px)] leading-none text-nm-teal">4,7</span>
            <span className="flex flex-col gap-1.5 text-[14px] text-nm-muted">
              <span aria-hidden="true" className="tracking-[2px] text-nm-pink-ink">★★★★★</span>
              <span>107 reseñas en Google</span>
              <StatusBadge status="observado">Dato al 17/11/2026</StatusBadge>
            </span>
          </div>
        </div>
        <div className="nm-reveal" style={delay(100)}>
          <ReviewsCarousel reviews={REVIEWS} />
        </div>
        <div className="nm-reveal mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button variant="secondary" href={MAPS_URL} icon="googlemaps" iconRight="arrow-up-right">
            Ver las 107 reseñas en Google
          </Button>
          <StatusBadge status="pendiente">Fragmentos textuales · uso a aprobar</StatusBadge>
        </div>
      </div>
    </section>
  );
}
