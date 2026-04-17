import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-white text-primary hover:bg-primary-light border-2 border-primary",
    outline: "border-2 border-banner text-white hover:bg-banner hover:border-banner-dark",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const classes = [
    baseClasses,
    variantClasses[variant],
    disabled ? disabledClasses : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
