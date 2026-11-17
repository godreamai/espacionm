import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { Bodywrap } from "@/components/sections/Bodywrap";
import { RevealController } from "@/components/RevealController";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Reviews } from "@/components/sections/Reviews";
import { Space } from "@/components/sections/Space";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { DemoLegend } from "@/components/sections/DemoLegend";
import { JSON_LD } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escapa "<" para que el JSON nunca pueda cerrar el <script>.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="nm-skip">Saltar al contenido</a>
      <div className="sticky top-0 z-50">
        <SiteHeader />
      </div>
      <main id="main">
        <Hero />
        <Bodywrap />
        <Services />
        <Team />
        <Reviews />
        {/* <Events /> — oculta por decisión de diseño; el componente sigue en components/sections/Events.tsx */}
        <Space />
        <Location />
        <Faq />
        <Closing />
        <DemoLegend />
      </main>
      <SiteFooter />
      <StickyCta />
      <RevealController />
    </>
  );
}
