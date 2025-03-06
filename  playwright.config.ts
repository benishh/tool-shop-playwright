import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
