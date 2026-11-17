import { ICONS, type IconName } from "@/lib/icons";

interface IconProps {
  name: IconName;
  size?: number;
  /** Si se pasa, el ícono es informativo (role="img"); si no, es decorativo (aria-hidden). */
  title?: string;
  className?: string;
}

/** Lucide = outline trazo 1.5; Simple Icons = relleno (marcas de terceros). */
export function Icon({ name, size = 20, title, className = "" }: IconProps) {
  const d = ICONS[name];
  const brand = d.set === "simple";
  return (
    <svg
      className={`nm-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={brand ? "currentColor" : "none"}
      stroke={brand ? "none" : "currentColor"}
      strokeWidth={brand ? undefined : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
      dangerouslySetInnerHTML={{ __html: d.body }}
    />
  );
}
