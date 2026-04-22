import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { brand } from "@/config/brand";

export default function Footer() {
  return (
    <footer className="bg-ink-black-900 text-ink-black-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-hero">{brand.name}</span>
            <p className="mt-3 text-sm text-ink-black-600">
              Premium 3D printed items, crafted with precision and care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-black-500 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-black-400 hover:text-hero transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-black-500 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <p className="text-ink-black-600 text-sm">Get in touch with us:</p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-hero hover:text-on-primary transition-colors text-sm font-medium"
            >
              Contact Page →
            </Link>
          </div>
        </div>

        <div className="border-t border-ink-black-800 mt-8 pt-8 text-center text-sm text-ink-black-700">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
