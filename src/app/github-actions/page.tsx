import React from 'react';
import CodeBlock from '../components/CodeBlock';
import Head from 'next/head';

const GitHubActions: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
            <Head>
                <title>Automate Playwright Tests in Next.js 14</title>
                <meta name="description" content="Guide to configuring GitHub Actions to run Playwright tests in a Next.js 14 project with Tailwind CSS." />
                <meta name="keywords" content="playwright, testing, github actions, typescript, Next.js, QA, AQA" />
            </Head>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100">
                Automate Playwright Tests in Next.js 14 Using GitHub Actions
            </h1>

            <p className="text-base md:text-lg mb-6 leading-relaxed">
                This guide walks you through setting up GitHub Actions to execute Playwright tests for a Next.js 14 project.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 1: Configure Playwright</h2>
            <p className="mb-6">
                Add or update the configuration file:
            </p>
            <CodeBlock codeString="playwright.config.ts" />
            <p className="mb-6">The content of the configuration file should be as follows:</p>
            <CodeBlock codeString={
                `import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});`} />


            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 2: Add GitHub Actions Workflow</h2>
            <p className="mb-6">
                Create a workflow file at:
            </p>
            <CodeBlock codeString=".github/workflows/playwright.yml" />
            <p className="mb-6">The file should contain the following workflow configuration:</p>
            <CodeBlock codeString={
                `name: Playwright Tests

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Install Playwright Browsers
        run: npx playwright install chromium

      - name: Build the Next.js app
        run: npm run build

      - name: Run Playwright tests
        run: npx playwright test src/tests/visual.spec.ts
        #continue-on-error: true

      - name: Upload test screenshots as artifacts
        uses: actions/upload-artifact@v3
        with:
          name: screenshots
          path: src/tests/visual.spec.ts-snapshots/`} />
            <div>
                <p>You will see error message for first attempt that screenshot doesn&apos;t exist.</p>
                <p>For first running it&apos;s needed to uncomment line</p>
                <CodeBlock codeString={`#continue-on-error: true`} />
                <p>After that you should download generated screenshot for linux and commit to project to snapshots directory. 
                    This problem exists because of differences in generating html pages 2 different OS macOs and Linux.</p>
            </div>
            <br></br>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 3: Write Playwright Tests</h2>
            <p className="mb-6">
                Create a test file in the following directory:
            </p>
            <CodeBlock codeString="tests" />
            <p className="mb-6">
                For example, create the file:
            </p>
            <CodeBlock codeString="tests/visual.spec.ts" />
            <p className="mb-6">Add the following test code:</p>

            The issue arises from how the backticks (`) inside the codeString template literal conflict with the surrounding backticks.
            To handle this, you can escape the inner backticks or use a different quoting style for the codeString value. Here’s how to fix it:

            Solution 1: Escape the Inner Backticks
            Escape the inner backticks using a backslash (\):

            tsx
            Copy code
            <CodeBlock codeString={
                `import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
    test('About page visual snapshot', async ({ page, baseURL }) => {
        // Use baseURL from the Playwright configuration
        await page.goto(\`\${baseURL}/about\`);
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png');
    });
    
    test('About page visual test with maxDiffPixels', async ({ page, baseURL }) => {
        // Use baseURL from the Playwright configuration
        await page.goto(\`\${baseURL}/about\`);
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png', {
            maxDiffPixels: 100 // allows for up to 100 pixel differences
        });
    });
})`} />
            <p className="mb-6">
                After completing these steps, your Playwright tests will be automatically executed using GitHub Actions,
                ensuring a smooth CI/CD workflow for your Next.js application.
            </p>
            <div className="mt-8">
                <img
                    src="/images/githubActions.png"
                    alt="GitHub Actions Workflow"
                    className="mx-auto border rounded shadow-lg"
                />
            </div>
        </div>
    );
};

export default GitHubActions;
