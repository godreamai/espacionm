import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/icons";
import { WHATSAPP_URL } from "@/lib/data";

export type ButtonVariant = "primary" | "secondary" | "on-deep" | "outline-on-deep" | "ghost" | "ghost-on-deep";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconRight?: IconName;
  block?: boolean;
  className?: string;
  children: ReactNode;
}
type LinkProps = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;
type NativeProps = BaseProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Botón/enlace del design system. Los links http(s) abren en pestaña nueva con rel seguro. */
export function Button(props: LinkProps | NativeProps) {
  const { variant = "primary", size = "md", icon, iconRight, block, className = "", children, ...rest } = props;
  const cls = ["nm-btn", `nm-btn--${variant}`, size !== "md" && `nm-btn--${size}`, block && "nm-btn--block", className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {icon && <Icon name={icon} size={size === "sm" ? 18 : 20} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={18} />}
    </>
  );
  if (rest.href) {
    const { href, ...anchor } = rest as Omit<LinkProps, keyof BaseProps>;
    const external = /^https?:/.test(href);
    return (
      <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...anchor}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

interface WhatsAppButtonProps {
  children?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
  href?: string;
}

/** CTA único de conversión: «Pedí tu turno» → WhatsApp (mensaje precargado). */
export function WhatsAppButton({ children = "Pedí tu turno", href = WHATSAPP_URL, ...rest }: WhatsAppButtonProps) {
  return (
    <Button href={href} icon="whatsapp" aria-label={`${children} por WhatsApp`} {...rest}>
      {children}
    </Button>
  );
}
