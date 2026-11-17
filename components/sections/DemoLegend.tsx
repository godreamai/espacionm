import { StatusBadge } from "../StatusBadge";
import { SHOW_STATUS } from "@/lib/config";

/** Leyenda de estado del contenido. SOLO demo: se elimina en producción (NEXT_PUBLIC_SHOW_STATUS=false). */
export function DemoLegend() {
  if (!SHOW_STATUS) return null;
  const row = "flex flex-[1_1_220px] items-center gap-2";
  return (
    <aside aria-label="Estado del contenido de la demo" className="bg-nm-cream-2 py-7">
      <div className="nm-container flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] leading-[1.5] text-nm-muted">
        <strong className="text-[12px] uppercase tracking-[.12em] text-nm-teal">Demo · estado del contenido</strong>
        <span className={row}><StatusBadge status="confirmado" />Publicado por Espacio NM (dirección, horarios, catálogo).</span>
        <span className={row}><StatusBadge status="observado" />Fuente externa al 17/11/2026 (Google).</span>
        <span className={row}><StatusBadge status="pendiente" />Requiere validación de Natalia.</span>
      </div>
    </aside>
  );
}
