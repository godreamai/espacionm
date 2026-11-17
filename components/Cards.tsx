import { Button } from "./Button";
import { Icon } from "./Icon";

interface PersonProps {
  name: string;
  role: string;
  /** Link al reel de Instagram de la persona. Si falta, el retrato no es clicable. */
  reelUrl?: string;
}

const initialOf = (name: string) => name.replace(/^Doc\.\s*/, "").charAt(0).toUpperCase();

/**
 * Retrato del equipo: rectángulo vertical 3:4 (hoy con la inicial, mañana con la foto) + nombre y rol.
 * TODO el retrato lleva al reel de Instagram de la persona.
 */
export function PersonCard({ name, role, reelUrl }: PersonProps) {
  const inner = (
    <>
      <span className="nm-person__media" aria-hidden="true">
        {initialOf(name)}
        {reelUrl && (
          <span className="nm-person__play">
            <Icon name="play" size={16} />
          </span>
        )}
      </span>
      <span className="nm-person__name">{name}</span>
      <span className="nm-person__role">{role}</span>
    </>
  );
  return reelUrl ? (
    <a className="nm-person" href={reelUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver el reel de ${name} en Instagram`}>
      {inner}
    </a>
  ) : (
    <div className="nm-person">{inner}</div>
  );
}

/** Fundadora: texto de la ficha (el retrato va aparte, en la composición de la sección). */
export function FounderBio({ name, role, text, reelUrl }: PersonProps & { text?: string }) {
  return (
    <div className="nm-founder__who">
      <span className="nm-founder__role">{role}</span>
      <h3 className="nm-founder__name">{name}</h3>
      {text && <p className="nm-founder__text">{text}</p>}
      {reelUrl && (
        <div>
          <Button variant="ghost" href={reelUrl} icon="instagram" iconRight="arrow-up-right">
            Ver su reel
          </Button>
        </div>
      )}
    </div>
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
