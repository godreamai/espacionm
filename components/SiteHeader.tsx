"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./Button";
import { NAV_LINKS } from "@/lib/data";

/**
 * Header sticky. Mobile: logo + botón de menú (drawer). Desktop (≥1024): nav + CTA «Pedí tu turno».
 * El wrapper sticky (z-50) vive en la página, como en el diseño.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nm-header">
      <div className="nm-header__bar">
        <a className="nm-header__brand" href="#top" aria-label="Espacio NM & Bodywrap, inicio">
          <Logo priority tone="dark" width={80} />
        </a>
        <nav className="nm-header__nav" aria-label="Principal">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nm-header__actions">
          <WhatsAppButton size="sm" className="nm-header__cta" />
          <button
            type="button"
            className="nm-header__toggle"
            aria-expanded={open}
            aria-controls="nm-drawer"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "x" : "menu"} size={24} title={open ? "Cerrar menú" : "Abrir menú"} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="nm-drawer" className="nm-header__drawer" aria-label="Menú">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <Icon name="arrow-right" size={18} />
            </a>
          ))}
          <WhatsAppButton block size="lg" />
        </nav>
      )}
    </header>
  );
}
