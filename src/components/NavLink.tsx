import Link from "next/link";

interface NavLinkData {
  href: string;
  label: string;
}

interface NavLinkProps {
  link: NavLinkData;
  variant?: "onPrimary" | "onSecondary" | "mobile";
  onClick?: () => void;
}

const variantClasses = {
  onPrimary: "text-on-primary hover:text-hero font-medium transition-colors",
  onSecondary: "text-on-secondary hover:text-hero transition-colors",
  mobile:
    "block text-on-primary hover:text-hero font-medium py-2 transition-colors",
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
