import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Espacio NM & Bodywrap — Tu espacio, tu bienestar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen Open Graph: logo oficial centrado sobre teal (sin redibujar el logo). */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-nm-light.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#184757" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={880} height={591} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
