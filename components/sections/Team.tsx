import { SectionHeading } from "../SectionHeading";
import { FounderBio, PersonCard } from "../Cards";
import { MediaPlaceholder } from "../MediaPlaceholder";
import { TEAM, TEAM_FOUNDER } from "@/lib/data";
import { delay } from "@/lib/motion";

/**
 * 04 · Equipo (#equipo). Dos escalas: la fundadora en retrato grande (4:5) con su nombre en gran formato,
 * y el resto del equipo como retratos 3:4 escalonados. Cada retrato lleva al reel de Instagram de la persona.
 * MAQUETA: ver los TODO de lib/data.ts (nombres, roles, fotos y links de reels pendientes).
 */
export function Team() {
  return (
    <section id="equipo" aria-labelledby="tm-title" className="nm-section nm-team">
      <div className="nm-container">
        <div className="nm-grid nm-founder">
          <div className="nm-reveal nm-founder__media">
            <MediaPlaceholder ratio="4/5" label="Retrato de la fundadora" meta="Encuadre vertical 4:5, luz natural" statusLabel="Foto pendiente" />
          </div>
          <div style={delay(120)} className="nm-reveal nm-founder__body">
            <SectionHeading
              id="tm-title"
              size="md"
              eyebrow="Equipo"
              title={<>Conocé a quienes <em>te cuidan.</em></>}
            />
            <FounderBio {...TEAM_FOUNDER} />
          </div>
        </div>

        <div className="nm-roster-wrap">
          <div className="nm-roster-head nm-reveal">
            <span className="nm-eyebrow">El equipo</span>
            <p>Cada profesional se presenta en un reel de @espacionm. Tocá un retrato para verlo en Instagram.</p>
          </div>
          <ul className="nm-roster" aria-label="Equipo de Espacio NM">
            {TEAM.map((p, i) => (
              <li key={`${p.name}-${i}`} className="nm-reveal" style={delay((i % 5) * 70)}>
                <PersonCard {...p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
