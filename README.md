# Espacio NM & Bodywrap — landing (Next.js)

Next.js 16 (App Router) + TypeScript + Tailwind v4. Deploy objetivo: Vercel.

```bash
npm install
npm run dev      # desarrollo
npm run build && npm start
```

## Variables de entorno (ver `lib/config.ts`)

| Variable | Default | Uso |
|---|---|---|
| `NEXT_PUBLIC_SHOW_STATUS` | `false` | `true` muestra los badges de trazabilidad + la leyenda demo (modo revisión con Natalia). |
| `NEXT_PUBLIC_HERO_MEDIA` | `foto` | `marca` = arco teal con logo si no se aprueba la foto. |
| `NEXT_PUBLIC_SITE_URL` | `https://espacio-nm.vercel.app` | Canonical, Open Graph, sitemap, robots. **TODO: dominio real.** |

## Estructura

- `app/globals.css`: tokens (colores, tipografía, espaciado, radios, motion) y CSS de componentes del design system.
- `lib/data.ts`: TODO el contenido (servicios, equipo, reseñas, FAQ, horarios, links). Editar acá.
- `components/`: UI reutilizable; `components/sections/`: las 10 secciones en orden.

## Pendientes / mockups (TODO)

- Reels de Emi, Ceci y Cristian: placeholders. `TeamCard` ya acepta `videoSrc` + `poster`.
- Fotos: salón (ficha Google) y living (clienta) solo demo; faltan Jardín y Cápsulas (placeholders) y 10–15 fotos propias.
- Rating 4,7 / 107 reseñas y reseñas textuales: dato observado al 17/11/2026, verificar y aprobar.
- Contenido a validar con Natalia: Bodywrap®, Maderoterapia, Doc. Liloff, vigencia de aparatología, pagos.
