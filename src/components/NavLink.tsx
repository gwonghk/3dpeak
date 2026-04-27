import Link from "next/link";

interface NavLinkData {
  href: string;
  label: string;
}

interface NavLinkProps {
  link: NavLinkData;
  variant?: "onPrimary" | "onSecondary" | "mobile" | "footer" | "navbar";
  onClick?: () => void;
}

const variantClasses = {
  onPrimary: "text-on-primary hover:text-primary transition-colors",
  onSecondary: "text-on-secondary hover:text-secondary transition-colors",
  mobile:
    "block text-on-primary hover:text-primary font-medium py-2 transition-colors",
  footer:
    "text-inverse-on-surface hover:text-primary transition-colors text-sm",
  navbar:
    "text-on-primary hover:text-primary transition-colors text-sm",
};

export default function NavLink({
  link,
  variant = "onPrimary",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={variantClasses[variant]}
    >
      {link.label}
    </Link>
  );
}
