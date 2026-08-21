export const locales = ["es", "en", "ca"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const translatedLocales = locales.filter(
  (locale): locale is Exclude<Locale, typeof defaultLocale> =>
    locale !== defaultLocale,
);

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}
