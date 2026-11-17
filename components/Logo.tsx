import Image from "next/image";

/**
 * Logo oficial, PNG transparente recortado (587×394).
 * - tone="light" (default): letras blancas, para fondos oscuros (footer, bloques teal).
 * - tone="dark": mismas letras en teal #184757, para fondos claros (header crema).
 * No redibujar ni reconstruir el logo.
 */
export function Logo({ width = 104, className = "", priority = false, tone = "light" }: { width?: number; className?: string; priority?: boolean; tone?: "light" | "dark" }) {
  return (
    <Image
      className={`nm-logo ${className}`.trim()}
      src={tone === "dark" ? "/logo-nm-teal.png" : "/logo-nm-light.png"}
      width={width}
      height={Math.round((width * 394) / 587)}
      quality={90}
      priority={priority}
      alt="Espacio NM & Bodywrap — Tu espacio, tu bienestar"
    />
  );
}
