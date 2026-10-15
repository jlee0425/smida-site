import { expect, test } from '@playwright/test';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { locales, pages } from '../src/i18n/ui';
import { pathFor } from '../src/i18n/utils';

for (const page of pages) {
  for (const locale of locales) {
    const path = pathFor(locale, page);
    test(`${path} renders (${locale})`, async ({ page: p }) => {
      // A chosen language disables the `/` browser-language redirect.
      await p.addInitScript(() => localStorage.setItem('smida-lang', 'en'));
      await p.setViewportSize({ width: 360, height: 800 });
      const res = await p.goto(path);
      expect(res?.status()).toBe(200);
      await expect(p.locator('html')).toHaveAttribute('lang', locale);

      for (const l of locales) {
        await expect(p.locator(`head link[rel=alternate][hreflang=${l}]`)).toHaveAttribute('href', `https://smida.fit${pathFor(l, page)}`);
        await expect(p.locator(`a[data-lang=${l}]`)).toHaveAttribute('href', pathFor(l, page));
      }
      await expect(p.locator('head link[rel=alternate][hreflang=x-default]')).toHaveCount(1);
      await expect(p.locator(`a[data-lang=${locale}]`)).toHaveAttribute('aria-current', 'true');

      await p.evaluate(() => document.fonts.ready);
      const { sw, cw } = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
      expect(sw, 'no horizontal scroll at 360px').toBeLessThanOrEqual(cw);
    });
  }
}

test.describe('language landing on /', () => {
  test.use({ locale: 'ja-JP' });

  test('a Japanese browser is sent to /ja/ on first visit', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/ja\/$/);
  });

  test('an explicit switcher choice wins over the browser language', async ({ page }) => {
    await page.goto('/ja/');
    await page.click('a[data-lang=en]');
    await expect(page).toHaveURL(/localhost:\d+\/$/);
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});

test.describe('without JS', () => {
  test.use({ locale: 'ko-KR', javaScriptEnabled: false });
  test('/ is the English page and the switcher still links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await page.click('a[data-lang=ko]');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  });
});

test('dist/ has no banned words and no unpublished drafts', () => {
  const banned = /crossfit|hyrox|strava|크로스핏|하이록스|스트라바|スミダ|스미다|health connect|ヘルスコネクト|헬스 커넥트|heart rate|心拍|심박|privacy\.html|terms\.html/i;
  const files: string[] = [];
  const walk = (d: string) => readdirSync(d).forEach((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : files.push(join(d, f))));
  walk('dist');
  const text = files.filter((f) => /\.(html|xml|txt|css|js)$/.test(f));
  const hits = text.filter((f) => banned.test(readFileSync(f, 'utf8')));
  expect(hits).toEqual([]);
  expect(files.some((f) => /privacy|terms/.test(f))).toBe(false);
});
