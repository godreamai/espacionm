import Image from "next/image";
import { Button, WhatsAppButton } from "../Button";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { SectionHeading } from "../SectionHeading";
import { HERO_MEDIA } from "@/lib/config";

/**
 * 01 · Hero (#top). Composición editorial: título de gran escala a la izquierda y un arco fotográfico
 * que «apoya» sobre la línea de suelo de la sección (el arco es el eco del tulipán).
 * Texto abajo, alineado al suelo; foto a sangre derecha en mobile.
 * Deliberadamente sin datos extra: rating, dirección y horarios viven en Opiniones, Ubicación y footer.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="nm-hero">
      <div className="nm-container">
        <div className="nm-grid nm-hero__grid">
          <div className="nm-hero__text">
            <SectionHeading
              as="h1"
              id="hero-title"
              titleClassName="nm-hero__title"
              eyebrow="Estética · Spa · Movimiento — Caballito"
              title={<>Tu espacio, <em>tu bienestar.</em></>}
            />
            <div className="nm-hero__foot">
              <p className="nm-lead">
                Cuerpo, rostro, spa y movimiento bajo un mismo techo: una casa reciclada de Caballito, con jardín, donde cuidarte sin apuro.
              </p>
              <div className="nm-hero__cta">
                <WhatsAppButton size="lg" />
                <Button variant="ghost" href="#bodywrap" iconRight="arrow-right">Conocé el Bodywrap</Button>
              </div>
              <p className="nm-hero__rating">
                <span aria-hidden="true">★</span> 4,7 <span className="nm-hero__rating-sep" aria-hidden="true" /> 107 reseñas en Google
              </p>
            </div>
          </div>

          <div className="nm-hero__figure">
            {HERO_MEDIA === "foto" ? (
              <MediaPlaceholder
                shape="arch"
                ratio="5/7"
                src="/photos/hero.png"
                position="60% 70%"
                alt="Rincón de recepción con sofá de lino, mesa baja de madera, un tulipán rosa y luz de ventana"
                status="pendiente"
                statusLabel="Imagen generada · provisoria"
                sizes="(min-width: 1024px) 420px, 80vw"
                priority
              />
            ) : (
              <div className="relative flex aspect-[5/7] items-center justify-center overflow-hidden rounded-[999px_999px_0_0] bg-nm-teal">
                <div className="absolute inset-3.5 rounded-[999px_999px_0_0] border border-white/[.22]" />
                <Image
                  src="/logo-nm-light.png"
                  alt="Logo de Espacio NM & Bodywrap: Tu espacio, tu bienestar"
                  width={587}
                  height={394}
                  sizes="(min-width: 1024px) 300px, 60vw"
                  className="h-auto w-[72%]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
