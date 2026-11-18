"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { StatusBadge } from "./StatusBadge";
import { WHATSAPP_PLAIN_URL, type ServiceCategory } from "@/lib/data";

/**
 * Índice tipográfico de categorías (roles tablist/tab/tabpanel) + filas por grupo de servicio.
 * El grupo `featured` (Bodywrap) tiene más escala que el resto.
 */
export function ServiceExplorer({ categories, defaultIndex = 0 }: { categories: ServiceCategory[]; defaultIndex?: number }) {
  const [i, setI] = useState(defaultIndex);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cat = categories[i];
  if (!cat) return null;

  // Navegación con flechas entre pestañas (patrón ARIA tabs).
  const onKeyDown = (e: KeyboardEvent, k: number) => {
    const last = categories.length - 1;
    const next = e.key === "ArrowRight" ? (k === last ? 0 : k + 1) : e.key === "ArrowLeft" ? (k === 0 ? last : k - 1) : e.key === "Home" ? 0 : e.key === "End" ? last : -1;
    if (next < 0) return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div className="nm-svc__tabs" role="tablist" aria-label="Categorías de servicios">
        {categories.map((c, k) => (
          <button
            key={c.id}
            ref={(el) => { tabs.current[k] = el; }}
            type="button"
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={k === i}
            aria-controls={`panel-${c.id}`}
            tabIndex={k === i ? 0 : -1}
            className="nm-svc__tab"
            onClick={() => setI(k)}
            onKeyDown={(e) => onKeyDown(e, k)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div key={cat.id} className="nm-svc__panel" role="tabpanel" id={`panel-${cat.id}`} aria-labelledby={`tab-${cat.id}`}>
        {cat.groups.map((g, gi) => (
          <div key={g.title} className={`nm-svc__group${g.featured ? " nm-svc__group--feature" : ""}`} style={{ "--i": gi } as CSSProperties}>
            <div className="nm-svc__group-head">
              {g.featured && (
                <span className="nm-svc__feature">
                  <Icon name="sparkles" size={16} />
                  Protagonista
                </span>
              )}
              <h3 className="nm-svc__group-title">{g.title}</h3>
              {g.status && <StatusBadge status={g.status}>{g.statusLabel}</StatusBadge>}
            </div>
            <div className="nm-svc__body">
              <ul className="nm-svc__items">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {g.note && <p className="nm-svc__note">{g.note}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="nm-svc__cta">
        <Button
          variant="secondary"
          icon="whatsapp"
          href={`${WHATSAPP_PLAIN_URL}?text=${encodeURIComponent(`Hola! Quiero consultar por ${cat.label}`)}`}
        >
          Consultar por {cat.label}
        </Button>
      </div>
    </div>
  );
}
