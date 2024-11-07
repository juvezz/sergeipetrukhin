import React from 'react';
import CodeBlock from '../components/CodeBlock';

export const metadata = {
    title: 'Visual Regression Testing with Playwright and TypeScript',
    description: 'A step-by-step guide on setting up visual regression testing using Playwright and TypeScript in a Next.js 14 project.',
};

const VisualRegressionTestingBlog: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100">
                Visual Regression Testing with Playwright and TypeScript
            </h1>

            <p className="text-base md:text-lg mb-6 leading-relaxed">
                This guide walks you through setting up visual regression testing in a Next.js 14 project using Playwright and TypeScript.
                With visual regression, you can ensure that your UI components look consistent and any unintended changes are flagged during development.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Prerequisites</h2>
            <ul className="list-disc list-inside mb-6 pl-5">
                <li className="mb-2">
                    Check the post about the
                    <a href="https://sergeipetrukhin.vercel.app/playwright-test" target="_blank" rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300 mx-1">
                        first Playwright test
                    </a> and how to configure the project
                </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 1: Writing Your First Visual Test</h2>
            <p className="mb-6">
                Inside the `tests` directory, create a new file called visual.spec.ts to capture a visual snapshot of the homepage.
            </p>
            <CodeBlock codeString={
`test('About page visual snapshot', async ({ page }) => {
    await page.goto('https://sergeipetrukhin.vercel.app/about');
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('aboutpage.png');
});`} />
            <p className="mb-6">
                This code navigates to the homepage and captures a screenshot. On the first run, it saves a baseline image; subsequent runs will compare the new screenshot to the baseline, alerting you to any differences.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 2: Running Visual Tests</h2>
            <p className="mb-6">
                To run the tests, ensure your app is running locally, then execute Playwright’s test command:
            </p>
            <CodeBlock codeString="npm run test src/tests/visual.spec.ts" />

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 3: First attempt error</h2>
            <p className="mb-6">
                After the first attempt to execute the test, an error should be displayed because no snapshot is saved.
                On the second attempt, the test should work as expected. Example error message:
            </p>
            <CodeBlock codeString="Error: A snapshot doesn't exist at /sergeipetrukhin/src/tests/visual.spec.ts-snapshots/aboutpage-darwin.png, writing actual." />

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 4: Possible differences in pixels</h2>
            <p className="mb-6">
                In some cases could be light differences because of small changes. Better to execute previous test with maxDiffPixels option.
            </p>
            <CodeBlock codeString={
`test('About page visual test with maxDiffPixels', async ({ page }) => {
    await page.goto('https://sergeipetrukhin.vercel.app/about');
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('aboutpage.png', {
        maxDiffPixels: 100 // allows for up to 100 pixel differences
    });
});`} />

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 5: Analyzing Results</h2>
            <p className="mb-6">
                Playwright can generate html report. To do this it&apos;s needed to update playwright.config.js
            </p>
            <CodeBlock codeString={`reporter: [['html', { open: 'on-failure' }]]`}/>
            <p>
                My whole config file looks:
            </p>    
            <CodeBlock codeString={
`// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests', // path to your tests directory
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: [['html', { open: 'on-failure' }]]
  // More configurations can go here
});
`}/>
            <p>To generate and open html report:</p>
            <CodeBlock codeString={
`npm run test src/tests/visual.spec.ts
npx playwright show-report            
`}/>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Conclusion</h2>
            <p className="mb-6">
                Visual regression testing with Playwright is a powerful way to maintain UI consistency. By integrating these tests into your workflow, you can confidently detect and handle unintended changes in your application’s appearance.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Additional Resources</h2>
            <ul className="list-disc list-inside mb-6 pl-5">
                <li>
                    <a href="https://playwright.dev/docs/test-snapshots" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Playwright Visual Comparisons Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default VisualRegressionTestingBlog;
