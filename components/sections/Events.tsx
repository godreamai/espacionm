import { Button } from "../Button";
import { SectionHeading } from "../SectionHeading";
import { EVENTS, INSTAGRAM_URL } from "@/lib/data";
import { delay } from "@/lib/motion";

/** 06 · Comunidad: antecedentes de actividad, NO una agenda (sin fechas ni cupos). */
export function Events() {
  return (
    <section aria-labelledby="ev-title" className="nm-section bg-nm-cream-2">
      <div className="nm-container flex flex-wrap items-start gap-x-[clamp(32px,6vw,72px)] gap-y-8">
        <SectionHeading
          id="ev-title"
          className="nm-reveal min-w-0 flex-[5_1_320px]"
          eyebrow="Comunidad"
          title={<>También pasan <em>cosas lindas</em> acá</>}
          lead="Algunas actividades que ya pasaron por la casa. Las próximas se anuncian en Instagram."
        >
          <div>
            <Button variant="ghost" href={INSTAGRAM_URL} icon="instagram">@espacionm</Button>
          </div>
        </SectionHeading>
        <ol className="m-0 min-w-0 flex-[7_1_380px] list-none border-t border-[rgba(24,71,87,.18)] p-0">
          {EVENTS.map((t, i) => (
            <li
              key={t}
              style={delay(i * 90)}
              className="nm-reveal flex items-baseline gap-[18px] border-b border-[rgba(24,71,87,.18)] py-[18px] font-display text-[clamp(19px,2vw,23px)] leading-[1.3] text-nm-teal"
            >
              <span className="min-w-6 font-body text-[12px] font-semibold tracking-[.08em] text-nm-pink-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
