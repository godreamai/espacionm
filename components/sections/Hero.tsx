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
                Estética, spa y movimiento en Caballito: un lugar para cuidarte con profesionales de verdad, en una casa cálida pensada para desconectar.
              </p>
              <div className="nm-hero__cta">
                <WhatsAppButton size="lg" />
                <Button variant="ghost" href="#bodywrap" iconRight="arrow-right">Conocé el Bodywrap</Button>
              </div>
            </div>
          </div>

          <div className="nm-hero__figure">
            {HERO_MEDIA === "foto" ? (
              <MediaPlaceholder
                shape="arch"
                ratio="5/7"
                src="/photos/espacio-recepcion-living.jpg"
                position="40% 50%"
                alt="Living de recepción con sofá blanco, almohadones bordados, sillón claro, mesa de madera y parquet"
                status="pendiente"
                statusLabel="Foto de clienta · solo demo interna"
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
            <Image src="/tulip-from-logo.png" alt="" width={72} height={70} className="nm-hero__tulip h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
