import { defineConfig, devices } from '@playwright/test';

const port = 4329;
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  reporter: 'list',
  // Uses the system Chrome (no browser download needed); `pnpm exec playwright install chromium` and drop `channel` to use the bundled one.
  use: { baseURL: `http://localhost:${port}`, ...devices['Desktop Chrome'], channel: 'chrome' },
  webServer: {
    command: `pnpm exec astro build && pnpm exec astro preview --port ${port} --ignore-lock`,
    url: `http://localhost:${port}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
