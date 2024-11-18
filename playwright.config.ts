// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests', // path to your tests directory
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: [['html', { open: 'on-failure' }]]
  // More configurations can go here
});
