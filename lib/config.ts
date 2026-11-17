/**
 * Flags de build de la landing (en el prototipo eran ajustes del panel).
 *
 * - NEXT_PUBLIC_SHOW_STATUS: muestra badges de trazabilidad y la leyenda de demo.
 *   Default `false` (web limpia). Poner "true" para volver a ver el estado del contenido (modo revisión).
 * - NEXT_PUBLIC_HERO_MEDIA: "foto" (default) | "marca" (arco teal con el logo, si no se aprueba la foto).
 * - NEXT_PUBLIC_SITE_URL: dominio final (canonical, Open Graph, sitemap).
 */
export const SHOW_STATUS = process.env.NEXT_PUBLIC_SHOW_STATUS === "true";
export const HERO_MEDIA: "foto" | "marca" =
  process.env.NEXT_PUBLIC_HERO_MEDIA === "marca" ? "marca" : "foto";
// TODO: reemplazar por el dominio real cuando exista.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://espacio-nm.vercel.app").replace(/\/$/, "");
