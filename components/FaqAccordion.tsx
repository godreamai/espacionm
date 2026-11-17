"use client";

import { useState } from "react";
import { Icon } from "./Icon";

/** Acordeón: solo una respuesta abierta a la vez; la primera abierta por defecto (`defaultOpen={-1}` = todas cerradas). */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="nm-faq">
      {items.map((it, k) => {
        const isOpen = open === k;
        return (
          <div key={it.q} className="nm-faq__item" data-open={isOpen}>
            <h3 className="m-0">
              <button
                type="button"
                className="nm-faq__q"
                id={`faq-q-${k}`}
                aria-expanded={isOpen}
                aria-controls={`faq-${k}`}
                onClick={() => setOpen(isOpen ? -1 : k)}
              >
                {it.q}
                <span className="nm-faq__icon">
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </h3>
            <div className="nm-faq__a" id={`faq-${k}`} role="region" aria-labelledby={`faq-q-${k}`} inert={!isOpen}>
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
