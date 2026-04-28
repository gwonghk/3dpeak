"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import NavLink from "./NavLink";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/products", label: t("nav.products") },
    { href: "/about", label: t("nav.about") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-primary">
              {brand.name}
            </span>
            <p className="mt-3 text-sm text-inverse-on-surface opacity-70">
              {t("footer.tagline")}
            </p>
            <LanguageToggle />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-inverse-on-surface uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink link={link} variant="footer" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-inverse-on-surface uppercase tracking-wider mb-4">
              Contact
            </h3>
            <p className="text-inverse-on-surface opacity-70 text-sm">
              Get in touch with us:
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-primary hover:text-inverse-on-surface transition-colors text-sm font-medium"
            >
              Contact Page →
            </Link>
          </div>
        </div>

        <div className="border-t border-inverse-surface mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-inverse-on-surface opacity-50">
              &copy; {new Date().getFullYear()} {brand.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
