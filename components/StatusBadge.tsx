import type { ReactNode } from "react";
import { SHOW_STATUS } from "@/lib/config";

export type StatusKind = "confirmado" | "observado" | "pendiente";

const LABEL: Record<StatusKind, string> = {
  confirmado: "Confirmado",
  observado: "Observado",
  pendiente: "A confirmar",
};

/** Badge de trazabilidad. Solo se renderiza en modo demo (NEXT_PUBLIC_SHOW_STATUS !== "false"). */
export function StatusBadge({ status = "pendiente", onDeep, children }: { status?: StatusKind; onDeep?: boolean; children?: ReactNode }) {
  if (!SHOW_STATUS) return null;
  return <span className={`nm-badge nm-badge--${status}${onDeep ? " nm-badge--on-deep" : ""}`}>{children ?? LABEL[status]}</span>;
}
