import { defaultLocale, locales, ui, type Locale, type Page } from './ui';

export function getLocale(current: string | undefined): Locale {
  return (locales as readonly string[]).includes(current ?? '') ? (current as Locale) : defaultLocale;
}

export const useT = (locale: Locale) => ui[locale];

/** `/`, `/features/`, `/ja/`, `/ja/features/` */
export function pathFor(locale: Locale, page: Page): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${prefix}/${page ? `${page}/` : ''}`;
}

/** getStaticPaths for `src/pages/[...lang]/*`: en is unprefixed. */
export function localeStaticPaths() {
  return locales.map((l) => ({ params: { lang: l === defaultLocale ? undefined : l } }));
}
