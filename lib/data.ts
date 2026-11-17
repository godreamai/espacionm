/**
 * Contenido de la landing, centralizado para poder actualizarlo sin tocar componentes.
 * Fuente de verdad: ESPACIO_NM_DESIGN_SYSTEM.md + Handoff Espacio NM.md.
 * NO inventar ni ampliar textos, servicios, precios ni datos operativos.
 */
import type { StatusKind } from "@/components/StatusBadge";

export const WHATSAPP_URL = "https://wa.me/5491150038238?text=Hola!%20Quiero%20pedir%20un%20turno";
export const WHATSAPP_PLAIN_URL = "https://wa.me/5491150038238";
export const INSTAGRAM_URL = "https://www.instagram.com/espacionm/";
export const MAPS_URL = "https://www.google.com/maps/place/Espacio+NM/@-34.6137481,-58.4324335,17z";
export const MAP_EMBED_URL = "https://www.google.com/maps?q=-34.6137481,-58.4324335&z=16&output=embed";

export const NAV_LINKS: [label: string, href: string][] = [
  ["Bodywrap", "#bodywrap"],
  ["Servicios", "#servicios"],
  ["Equipo", "#equipo"],
  ["El espacio", "#espacio"],
  ["Opiniones", "#opiniones"],
  ["Ubicación", "#ubicacion"],
];

export const HOURS: [day: string, hours: string][] = [
  ["Lunes a viernes", "08:00–21:00"],
  ["Sábado", "09:00–17:00"],
  ["Domingo", "Cerrado"],
];

export const BODYWRAP_CLAIMS = [
  "Activa la circulación y el sistema linfático.",
  "«Elimina toxinas y líquidos» y «desinflama».",
  "«Ayuda a disminuir centímetros y modelar el contorno corporal».",
  "Mejora el aspecto de la piel.",
  "Efecto térmico asociado a relax y bienestar.",
];

export const BODYWRAP_STEPS = [
  { title: "Exfoliación", text: "De cuello a pies, con cepillo seco de bambú, como preparación de la piel." },
  { title: "Drenaje linfático manual", text: "En cuerpo completo, con sistema Vodder." },
  { title: "Wraps tibios", text: "Vendas tibias colocadas en cuerpo completo." },
  { title: "Etapa térmica", text: "Traje de vinilo y cápsula de sauna seco con camilla vibromasajeadora." },
];

export interface ServiceGroup {
  title: string;
  items: string[];
  featured?: boolean;
  status?: StatusKind;
  statusLabel?: string;
  note?: string;
}
export interface ServiceCategory {
  id: string;
  label: string;
  groups: ServiceGroup[];
}

// Sin precios, sin duraciones y sin «primera clase sin cargo» (vigencia no confirmada).
export const SERVICES: ServiceCategory[] = [
  {
    id: "cuerpo",
    label: "Cuerpo",
    groups: [
      { title: "Bodywrap con sauna", featured: true, items: ["Exfoliación", "Drenaje linfático manual", "Wraps tibios", "Etapa térmica"] },
      { title: "Thermobike", items: ["Bicicleta térmica"] },
      { title: "Aparatología corporal", items: ["Liposonix 2.0", "Indiba", "Exilis Ultra 360", "Mío Up", "Electroterapia"] },
      { title: "Masajes corporales", items: ["Reductor", "Circulatorio", "Drenaje linfático manual"] },
      { title: "Maderoterapia", status: "pendiente", statusLabel: "Vigencia a confirmar", items: ["Maderoterapia"] },
    ],
  },
  {
    id: "rostro",
    label: "Rostro",
    groups: [
      {
        title: "Cosmetología",
        items: [
          "Peelings", "Limpieza profunda de cutis", "Limpieza de espalda", "Dermaplaning", "Drenaje facial",
          "Microneedling", "Tratamientos de acné y estrías", "Diseño y depilación de cejas", "Laminado de cejas",
          "Lifting de pestañas", "Perfilado de cejas (hilo/pinza)", "Higiene facial + dermaplaning",
        ],
      },
      { title: "Aparatología facial", items: ["Hifu 12D Max", "Alpha Synergy", "Diamond (microdermoabrasión con puntas de diamante)"] },
      { title: "Medicina estética", status: "pendiente", statusLabel: "Procedimientos a confirmar", items: ["A cargo de la Doc. Liliana Liloff"] },
    ],
  },
  {
    id: "spa",
    label: "Spa y belleza",
    groups: [
      { title: "Spa", items: ["Circuito express", "Gift cards para regalar"] },
      { title: "Masajes", items: ["Piedras calientes", "Reiki", "Descontracturante", "Relajante", "Tailandés", "Faciales"] },
      { title: "Manicura y pedicura", items: ["Semipermanente", "Soft gel", "Kapping", "Pedicura", "Esculpidas"] },
      { title: "Depilación definitiva", items: ["Soprano · depilación láser"] },
    ],
  },
  {
    id: "movimiento",
    label: "Movimiento y salud",
    groups: [
      { title: "Yoga", items: ["Para distintas edades y niveles"] },
      {
        title: "Entrenamiento",
        items: ["Funcional fitness", "Electrofitness"],
        note: "Funcional: clase grupal, adaptable a cada persona. Electrofitness: entrenamiento con traje de electrodos.",
      },
      { title: "Acupuntura", items: ["Acupuntura", "Medicina tradicional china"] },
    ],
  },
];

/**
 * MAQUETA del equipo: 1 fundadora + 10 personas. Cada tarjeta enlaza al reel de Instagram de la persona.
 * TODO (pendiente de Natalia): nombre público, rol exacto y link del reel de cada una.
 *  - `name`/`role` "Nombre" / "Rol en Espacio NM" son marcadores; reemplazar por los reales.
 *  - `reelUrl` apunta hoy al perfil de Instagram; reemplazar por el link de cada reel (instagram.com/reel/...).
 *  - Sin apellidos (salvo la Doc. Liloff), matrículas ni títulos que no estén confirmados.
 */
export const TEAM_FOUNDER = {
  name: "Nombre de la fundadora", // TODO
  role: "Fundadora de Espacio NM",
  text: "Acá va una frase breve sobre cómo nació Espacio NM.", // TODO: texto real
  reelUrl: INSTAGRAM_URL, // TODO: link del reel
};

export const TEAM = [
  { name: "Emi", role: "Acupuntor · medicina tradicional china", reelUrl: INSTAGRAM_URL },
  { name: "Ceci", role: "Cosmetóloga", reelUrl: INSTAGRAM_URL },
  { name: "Cristian", role: "Profe de Educación Física", reelUrl: INSTAGRAM_URL },
  { name: "Doc. Liliana Liloff", role: "Medicina estética", reelUrl: INSTAGRAM_URL },
  ...Array.from({ length: 6 }, () => ({ name: "Nombre", role: "Rol en Espacio NM", reelUrl: INSTAGRAM_URL })), // TODO: 6 personas restantes
];

// Textuales, con su ortografía original. Exactamente 3.
export const REVIEWS = [
  { quote: "Desde que ingresas el ambiente es super cálido y reconfortante […] Me sentí una Diosa por 3 hermosas horas!", author: "Florencia Salas", meta: "Google · octubre 2026 (fecha estimada)" },
  { quote: "Desde que entrás te hacen sentir muy cómodo, la atención es excelente y se nota el profesionalismo y el cuidado en cada detalle", author: "Bautista Petrone", meta: "Google · septiembre 2026 (fecha estimada)" },
  { quote: "Uno de los mejores masajes que he recibido!", author: "Cathy Ratzlaff", meta: "Google · julio 2026 (fecha estimada)" },
];

// Antecedentes, no una agenda: sin fechas ni cupos.
export const EVENTS = [
  "Cata de whisky con Dúo Z",
  "«Arquetipas: Ser tu propio altar» — Tarot + Mosaico",
  "Spa day",
  "Sorteos y regalos de Día de la Madre",
  "Gift cards para regalar",
];

export const FAQ = [
  { q: "¿Cómo pido turno?", a: "Podés escribir por WhatsApp al 11 5003-8238 para coordinar tu turno." },
  { q: "¿Qué medios de pago aceptan?", a: "Efectivo y transferencia." },
  { q: "¿Qué es el Bodywrap?", a: "Es un tratamiento que Espacio NM presenta como un recorrido en cuatro etapas: exfoliación en seco, drenaje linfático manual, wraps tibios y una etapa final en cápsula de sauna seco con camilla vibromasajeadora." },
  { q: "¿Cómo me preparo para la depilación láser?", a: "Según los tips publicados por el centro: evitar la depilación con cera, rasurar el área entre 12 y 24 horas antes, evitar broncearse y no usar cremas ni desodorante el día del turno. Confirmá las indicaciones con el profesional según tu tratamiento." },
];

/** JSON-LD `DaySpa`. No agregar aggregateRating, Review, precios ni credenciales. */
export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "Espacio NM",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Otamendi 231",
    addressLocality: "Caballito, Ciudad Autónoma de Buenos Aires",
    postalCode: "C1405",
    addressCountry: "AR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -34.6137481, longitude: -58.4324335 },
  telephone: "+54 9 11 5003-8238",
  sameAs: [INSTAGRAM_URL],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
  ],
};
