import type { CSSProperties } from "react";

/** Delay escalonado para `.nm-reveal` / animaciones (se lee como `var(--d)` en el CSS). */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
