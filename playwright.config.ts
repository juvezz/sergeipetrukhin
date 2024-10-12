// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests', // path to your tests directory
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  // More configurations can go here
});
