import { Button } from "./Button";
import { Icon } from "./Icon";

interface TeamCardProps {
  name: string;
  role: string;
  text?: string;
  /** Link al reel de Instagram de la persona. Si falta, la fila no es clicable. */
  reelUrl?: string;
  /** Tarjeta destacada (fundadora): arco a la izquierda, texto a la derecha. */
  featured?: boolean;
}

const initialOf = (name: string) => name.replace(/^Doc\.\s*/, "").charAt(0).toUpperCase();

/**
 * Persona del equipo.
 * - Por defecto: «slide» del carrusel (inicial en arco + rol + nombre + play). TODA la tarjeta lleva al reel de Instagram.
 * - `featured`: bloque más grande para la fundadora.
 */
export function TeamCard({ name, role, text, reelUrl, featured }: TeamCardProps) {
  const initial = initialOf(name);
  if (!featured) {
    const inner = (
      <>
        <span className="nm-team-slide__media" aria-hidden="true">
          {initial}
          {reelUrl && (
            <span className="nm-team__play">
              <Icon name="play" size={16} />
            </span>
          )}
        </span>
        <span className="nm-team-slide__role">{role}</span>
        <span className="nm-team-slide__name">{name}</span>
      </>
    );
    return reelUrl ? (
      <a className="nm-team-slide" href={reelUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver el reel de ${name} en Instagram`}>
        {inner}
      </a>
    ) : (
      <div className="nm-team-slide">{inner}</div>
    );
  }
  return (
    <article className="flex flex-wrap items-center gap-x-[clamp(28px,5vw,56px)] gap-y-5">
      <div className="nm-team__link w-full max-w-[150px] flex-none">
        <div className="nm-team__initial" aria-hidden="true">{initial}</div>
      </div>
      <div className="nm-team__body min-w-0 flex-[1_1_300px] gap-2">
        <span className="nm-team__role">{role}</span>
        <h3 className="nm-team__name text-[clamp(28px,3.2vw,40px)] leading-[1.05]">{name}</h3>
        {text && <p className="nm-team__text">{text}</p>}
        {reelUrl && (
          <div className="pt-1.5">
            <Button variant="ghost" href={reelUrl} icon="instagram" iconRight="arrow-up-right">
              Ver su reel
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

/** Tabla de horarios (`tone="deep"` sobre teal). */
export function HoursTable({ rows, tone = "light", caption = "Horarios" }: { rows: [string, string][]; tone?: "light" | "deep"; caption?: string }) {
  return (
    <table className={`nm-hours${tone === "deep" ? " nm-hours--deep" : ""}`}>
      <caption className="nm-sr-only">{caption}</caption>
      <tbody>
        {rows.map(([day, hours]) => (
          <tr key={day} data-closed={hours === "Cerrado"}>
            <th scope="row">{day}</th>
            <td>{hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
