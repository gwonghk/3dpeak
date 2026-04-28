import { Locale, defaultLocale } from "./locales";

const translations: Record<string, Record<string, unknown>> = {};

export async function loadTranslations(locale: Locale) {
  if (translations[locale]) return translations[locale];

  try {
    const mod = await import(`./${locale}.json`);
    translations[locale] = mod.default as Record<string, unknown>;
    return translations[locale];
  } catch {
    if (locale !== defaultLocale) {
      const fallback = await import(`./${defaultLocale}.json`);
      translations[locale] = fallback.default as Record<string, unknown>;
      return translations[locale];
    }
    return {};
  }
}

export function getNestedValue(
  obj: Record<string, unknown>,
  path: string
): string {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = obj;
  for (const key of keys) {
    result = result?.[key];
  }
  return typeof result === "string" ? result : path;
}
