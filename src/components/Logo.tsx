import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a href="/" className={`flex items-center ${className}`} aria-label="3dpeak home">
      <Image
        src="/icon.svg"
        alt="3dpeak logo"
        width={32}
        height={32}
        className="shrink-0"
        priority
      />
    </a>
  );
}
