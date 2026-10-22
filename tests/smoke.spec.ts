import { expect, test } from '@playwright/test';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { locales, pages, screens } from '../src/i18n/ui';
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

for (const locale of locales) {
  test(`home: the phone shows this locale's real screens and the chips swap them (${locale})`, async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('smida-lang', 'en'));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(pathFor(locale, ''));
    const shots = page.locator('.dev picture');
    await expect(shots).toHaveCount(screens.length);
    for (const src of await page.locator('.dev img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute('src')))) {
      expect(src).toContain(`.${locale}.`);
    }
    await expect(page.locator('.dev picture.on')).toHaveAttribute('data-key', 'home');
    await page.locator('.pchips button[data-key=prbook]').click();
    await expect(page.locator('.dev picture.on')).toHaveAttribute('data-key', 'prbook');
    await expect(page.locator('.pchips button[data-key=prbook]')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.dev picture.on img')).toBeVisible();
  });
}

test('home: the beta CTA is a mailto and nothing collects an email address', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('form, input')).toHaveCount(0);
  const ctas = page.locator('main a.btn');
  await expect(ctas).toHaveCount(2);
  for (const href of await ctas.evaluateAll((as) => as.map((a) => a.getAttribute('href')))) {
    expect(href).toBe('mailto:hello@smida.fit?subject=Smida%20beta');
  }
});

test('home (desktop): scrolling the feature blocks swaps the screen', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  for (const key of ['timer', 'quick-log', 'prbook', 'open']) {
    await page.locator(`.fb[data-key=${key}]`).evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(page.locator('.dev picture.on')).toHaveAttribute('data-key', key);
    await expect(page.locator(`.fb[data-key=${key}]`)).toHaveClass(/\bon\b/);
  }
});

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
  const banned = /crossfit|hyrox|strava|크로스핏|하이록스|스트라바|スミダ|스미다|privacy\.html|terms\.html/i;
  // The privacy policy must name the Health Connect data the app reads (Play's Health Connect policy); no other page does.
  const health = /health connect|ヘルスコネクト|헬스 커넥트|heart rate|心拍|심박/i;
  const files: string[] = [];
  const walk = (d: string) => readdirSync(d).forEach((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : files.push(join(d, f))));
  walk('dist');
  const text = files.filter((f) => /\.(html|xml|txt|css|js)$/.test(f));
  const hits = text.filter((f) => {
    const t = readFileSync(f, 'utf8');
    return banned.test(t) || (!/privacy/.test(f) && health.test(t));
  });
  expect(hits).toEqual([]);
  expect(files.some((f) => /terms/.test(f))).toBe(false);
});

for (const locale of locales) {
  test(`support: design v2 layout, contact cards mail hello@ and the FAQ opens (${locale})`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(pathFor(locale, 'support'));
    await expect(page.locator('main .doc h1.disp')).toHaveCount(1);
    const mails = await page.locator('.contact a.mail').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    expect(mails).toEqual(['mailto:hello@smida.fit', 'mailto:hello@smida.fit?subject=Smida%20bug%20report']);
    const faq = page.locator('.faq details');
    await expect(faq).toHaveCount(7);
    await faq.first().locator('summary').click();
    await expect(faq.first().locator('p')).toBeVisible();
    // The header button is the beta mailto, not a waitlist.
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('header a.btn')).toHaveAttribute('href', 'mailto:hello@smida.fit?subject=Smida%20beta');
  });
}

test('dist/ never mentions an address that does not exist', () => {
  const files: string[] = [];
  const walk = (d: string) => readdirSync(d).forEach((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : files.push(join(d, f))));
  walk('dist');
  const hits = files.filter((f) => f.endsWith('.html') && /(support|privacy)@smida\.fit|waitlist/i.test(readFileSync(f, 'utf8')));
  expect(hits).toEqual([]);
});
