"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { StatusBadge } from "./StatusBadge";
import { WHATSAPP_PLAIN_URL, type ServiceCategory } from "@/lib/data";

/** Pestañas de categorías + grupos de servicios (roles tablist/tab/tabpanel). */
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
    <div className="nm-services">
      <div className="nm-services__tabs" role="tablist" aria-label="Categorías de servicios">
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
            className={`nm-tag${k === i ? " nm-tag--active" : ""}`}
            onClick={() => setI(k)}
            onKeyDown={(e) => onKeyDown(e, k)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div key={cat.id} className="nm-services__panel" role="tabpanel" id={`panel-${cat.id}`} aria-labelledby={`tab-${cat.id}`}>
        {cat.groups.map((g, gi) => (
          <div key={g.title} className="nm-services__group" style={{ "--i": gi } as CSSProperties}>
            <div className="nm-services__group-head">
              <h3 className="nm-services__group-title">{g.title}</h3>
              {g.featured && (
                <span className="nm-services__feature">
                  <Icon name="sparkles" size={16} />
                  Protagonista
                </span>
              )}
              {g.status && <StatusBadge status={g.status}>{g.statusLabel}</StatusBadge>}
            </div>
            <div className="nm-services__body">
              <ul className="nm-services__items">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {g.note && <p className="nm-services__note">{g.note}</p>}
            </div>
          </div>
        ))}
      </div>
      <div>
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
