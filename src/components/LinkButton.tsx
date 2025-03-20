import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton = ({
  href,
  className = "",
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <a className={`button ${className}`} href={href} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
