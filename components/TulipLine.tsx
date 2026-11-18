/** Tulipán en línea fina (eco del tulipán del logo). Decorativo: sirve de divisor entre secciones. */
export function TulipLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="42"
      viewBox="0 0 40 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 5C13 11 13 23 20 30C27 23 27 11 20 5Z" />
      <path d="M20 30C12 28 6 20 7 10C13 12 18 18 20 30Z" />
      <path d="M20 30C28 28 34 20 33 10C27 12 22 18 20 30Z" />
      <path d="M20 30V54" />
      <path d="M20 46C14 44 10 40 9 35C15 36 19 40 20 46Z" />
    </svg>
  );
}

/** Regla horizontal con el tulipán en el centro. */
export function TulipDivider({ tone = "light", className = "" }: { tone?: "light" | "deep"; className?: string }) {
  return (
    <div className={`nm-divider${tone === "deep" ? " nm-divider--deep" : ""} ${className}`.trim()} aria-hidden="true">
      <TulipLine />
    </div>
  );
}
