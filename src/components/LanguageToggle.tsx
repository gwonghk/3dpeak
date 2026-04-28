"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/i18n/I18nProvider";
import { locales, localeNames, Locale } from "@/i18n/locales";

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm text-inverse-on-surface hover:bg-inverse-on-surface/10 transition-colors"
        aria-label="Change language"
        aria-expanded={open}
      >
        <svg
          className="w-4 h-4 opacity-70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-medium">{locale === "zh-TW" ? "繁" : locale === "zh-CN" ? "简" : locale.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute bottom-full right-0 mb-1 min-w-[140px] bg-surface rounded-lg shadow-elevation3 border border-outline overflow-hidden z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc as Locale);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-3 hover:bg-surface-variant transition-colors ${
                  loc === locale
                    ? "text-primary font-semibold"
                    : "text-on-surface"
                }`}
              >
                <span>{localeNames[loc as Locale]}</span>
                <span className="text-xs opacity-50">
                  {loc === "zh-TW" ? "繁" : loc === "zh-CN" ? "简" : loc.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
