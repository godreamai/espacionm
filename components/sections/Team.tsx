import { SectionHeading } from "../SectionHeading";
import { TeamCard } from "../Cards";
import { TeamCarousel } from "../TeamCarousel";
import { TEAM, TEAM_FOUNDER } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * 04 · Equipo (#equipo): la fundadora destacada + el resto del equipo en un carrusel horizontal.
 * Cada tarjeta lleva al reel de Instagram de la persona.
 * MAQUETA: ver los TODO de lib/data.ts (nombres, roles y links de reels pendientes).
 */
export function Team() {
  return (
    <section id="equipo" aria-labelledby="tm-title" className="nm-section bg-white">
      <div className="nm-container">
        <div className="nm-reveal mb-9 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <SectionHeading
            id="tm-title"
            className="min-w-0 flex-[1_1_420px]"
            eyebrow="Equipo"
            title={<>Conocé a quienes <em>te cuidan.</em></>}
          />
          <p className="m-0 flex-[0_1_380px] text-nm-muted">
            Cada profesional se presenta en un reel de @espacionm. Tocá una tarjeta para verlo en Instagram.
          </p>
        </div>

        <div className="nm-reveal border-t border-nm-border pt-8" style={delay(80)}>
          <TeamCard {...TEAM_FOUNDER} featured />
        </div>

        <div className="nm-reveal mt-10" style={delay(120)}>
          <TeamCarousel>
            {TEAM.map((p, i) => (
              <li key={`${p.name}-${i}`} className="w-[172px] flex-none snap-start md:w-[200px]">
                <TeamCard {...p} />
              </li>
            ))}
          </TeamCarousel>
        </div>
      </div>
    </section>
  );
}
