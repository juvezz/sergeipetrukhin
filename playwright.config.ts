import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests', // path to your tests directory
  use: {
    baseURL: 'http://localhost:3000',
    headless: true, // Ensures the browser runs in headless mode
    launchOptions: {
      args: ['--disable-gpu', '--no-sandbox'], // Disable GPU and no sandbox for CI
    },
    browserName: 'chromium', // Make sure you're using chromium
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'on-failure' }]]
});
