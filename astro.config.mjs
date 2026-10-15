// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://smida.fit',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'ja', 'ko'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ja: 'ja', ko: 'ko' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
