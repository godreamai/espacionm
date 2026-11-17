import Image from "next/image";
import { Button, WhatsAppButton } from "../Button";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { SectionHeading } from "../SectionHeading";
import { HERO_MEDIA } from "@/lib/config";
import { delay } from "@/lib/motion";

/**
 * 01 · Hero (#top): promesa, CTA a WhatsApp y foto en arco. Deliberadamente sin datos extra:
 * rating, dirección y horarios viven en Opiniones, Ubicación y el footer.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="nm-hero relative overflow-hidden pt-[clamp(32px,6vw,88px)] pb-[clamp(64px,8vw,120px)]"
    >
      <div className="nm-container flex flex-wrap items-center gap-[clamp(40px,6vw,80px)]">
        <div className="flex min-w-0 flex-[7_1_440px] flex-col gap-[26px]">
          <SectionHeading
            as="h1"
            id="hero-title"
            className="max-w-[720px]"
            eyebrow="Estética · Spa · Movimiento — Caballito"
            title={<>Tu espacio, <em>tu bienestar.</em></>}
            lead="Estética, spa y movimiento en Caballito: un lugar para cuidarte con profesionales de verdad, en una casa cálida pensada para desconectar."
          />
          <div className="nm-hero-rise flex flex-wrap items-center gap-x-5 gap-y-3" style={delay(280)}>
            <WhatsAppButton size="lg" className="nm-btn--pulse" />
            <Button variant="ghost" href="#bodywrap" iconRight="arrow-right">Conocé el Bodywrap</Button>
          </div>
        </div>

        <div className="relative mx-auto min-w-0 max-w-[520px] flex-[5_1_300px]">
          {/* Arco decorativo corrido −22/+22px detrás de la foto */}
          <div
            aria-hidden="true"
            className="nm-hero-arch-bg absolute -top-[22px] -right-[22px] bottom-[22px] left-[22px] rounded-[999px_999px_10px_10px] border border-nm-border bg-nm-cream-2"
          />
          <div className="nm-hero-photo">
          {HERO_MEDIA === "foto" ? (
            <MediaPlaceholder
              shape="arch"
              ratio="4/5"
              src="/photos/espacio-recepcion-living.jpg"
              position="40% 50%"
              alt="Living de recepción con sofá blanco, almohadones bordados, sillón claro, mesa de madera y parquet"
              status="pendiente"
              statusLabel="Foto de clienta · solo demo interna"
              sizes="(min-width: 540px) 520px, 100vw"
              priority
            />
          ) : (
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[999px_999px_10px_10px] bg-nm-teal shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)]">
              <div className="absolute inset-3.5 rounded-[999px_999px_6px_6px] border border-white/[.22]" />
              <Image
                src="/logo-nm-light.png"
                alt="Logo de Espacio NM & Bodywrap: Tu espacio, tu bienestar"
                width={587}
                height={394}
                sizes="(min-width: 540px) 374px, 72vw"
                className="h-auto w-[72%]"
              />
            </div>
          )}
          </div>
          <div className="nm-hero-tulip absolute -right-2 -bottom-[18px] w-[clamp(52px,6vw,72px)]">
            <Image src="/tulip-from-logo.png" alt="" width={72} height={70} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
