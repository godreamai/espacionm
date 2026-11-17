import Image from "next/image";
import { Icon } from "./Icon";
import { StatusBadge, type StatusKind } from "./StatusBadge";
import { SHOW_STATUS } from "@/lib/config";
import type { IconName } from "@/lib/icons";

interface Props {
  label?: string;
  meta?: string;
  ratio?: string;
  shape?: "rect" | "arch";
  tone?: "cream" | "rose" | "teal";
  icon?: IconName;
  /** `null` = sin badge. */
  status?: StatusKind | null;
  statusLabel?: string;
  src?: string;
  alt?: string;
  /** object-position de la foto. */
  position?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/** Foto real (con badge de derechos) o placeholder editorial cuando falta el material. */
export function MediaPlaceholder({
  label, meta, ratio = "4/5", shape = "rect", tone = "cream", icon = "image", status = "pendiente",
  statusLabel = "Foto pendiente", src, alt = "", position = "center", sizes, priority, className = "",
}: Props) {
  const cls = ["nm-media", src && "nm-media--photo", shape === "arch" && "nm-media--arch", tone !== "cream" && `nm-media--${tone}`, className]
    .filter(Boolean)
    .join(" ");
  const badge = status && SHOW_STATUS;
  return (
    <figure className={cls} style={{ aspectRatio: ratio, margin: 0 }}>
      {src ? (
        <>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectPosition: position }} />
          {badge && (
            <span className="nm-media__badge nm-media__badge--photo">
              <StatusBadge status={status}>{statusLabel}</StatusBadge>
            </span>
          )}
        </>
      ) : (
        <>
          {badge && (
            <span className="nm-media__badge">
              <StatusBadge status={status} onDeep={tone === "teal"}>{statusLabel}</StatusBadge>
            </span>
          )}
          <Icon name={icon} size={22} />
          {label && <figcaption className="nm-media__label">{label}</figcaption>}
          {meta && <span className="nm-media__meta">{meta}</span>}
        </>
      )}
    </figure>
  );
}
