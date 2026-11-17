import type { Metadata, Viewport } from "next";
import { Marcellus, Nunito_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

// Tipografía final «1e»: Marcellus (títulos, un solo peso) + Nunito Sans (UI y cuerpo).
const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-nunito", display: "swap" });

const TITLE = "Espacio NM & Bodywrap | Estética, spa y bienestar en Caballito";
const DESCRIPTION =
  "Conocé Espacio NM & Bodywrap en Caballito: estética facial y corporal, spa, masajes y movimiento. Otamendi 231. Consultá turnos por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Espacio NM & Bodywrap",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  // TODO: mientras sea demo (contenido sin validar) conviene `index: false`; activar al publicar la versión final.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#184757",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${marcellus.variable} ${nunito.variable}`}>
      <body>
        {/* Sin JS el reveal del timeline quedaría oculto: se muestra igual. */}
        <noscript>
          <style>{`.nm-reveal{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
