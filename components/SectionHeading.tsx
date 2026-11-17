import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  /** Puede incluir un único <em> para el acento editorial. */
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "deep";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, lead, id, as: H = "h2", align = "left", tone = "light", className = "", children }: Props) {
  const cls = ["nm-heading", align === "center" && "nm-heading--center", tone === "deep" && "nm-heading--deep", className]
    .filter(Boolean)
    .join(" ");
  return (
    <header className={cls}>
      {eyebrow && <span className="nm-eyebrow">{eyebrow}</span>}
      <H id={id} className={`nm-heading__title ${H === "h1" ? "nm-h1" : "nm-h2"} m-0 text-balance`}>
        {title}
      </H>
      {lead && <p className={`nm-heading__lead ${tone === "deep" || H === "h1" ? "nm-lead" : ""} m-0`}>{lead}</p>}
      {children}
    </header>
  );
}
