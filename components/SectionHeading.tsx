import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  /** Puede incluir un único <em> para el acento editorial. */
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  /** Escala del título: hero (h1) · lg (protagonista) · md (lectura) · sm (apoyo) · xl (cierre). */
  size?: "lg" | "md" | "sm" | "xl";
  align?: "left" | "center";
  tone?: "light" | "deep";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, lead, id, as: H = "h2", size = "lg", align = "left", tone = "light", className = "", titleClassName = "", children }: Props) {
  const cls = ["nm-heading", align === "center" && "nm-heading--center", tone === "deep" && "nm-heading--deep", className]
    .filter(Boolean)
    .join(" ");
  const titleCls = ["nm-heading__title", H === "h1" ? "nm-h1" : `nm-h2${size === "lg" ? "" : ` nm-h2--${size}`}`, "m-0", titleClassName]
    .filter(Boolean)
    .join(" ");
  return (
    <header className={cls}>
      {eyebrow && <span className="nm-eyebrow">{eyebrow}</span>}
      <H id={id} className={titleCls}>
        {title}
      </H>
      {lead && <p className={`nm-heading__lead ${tone === "deep" || H === "h1" ? "nm-lead" : ""} m-0`}>{lead}</p>}
      {children}
    </header>
  );
}
