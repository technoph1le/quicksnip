import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  isIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  isIcon = false,
  className = "",
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button ${isIcon ? "button--icon" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
