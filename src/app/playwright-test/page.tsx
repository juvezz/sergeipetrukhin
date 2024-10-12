// pages/playwright-test.tsx

import CodeBlock from '../components/CodeBlock';

export const metadata = {
    title: 'Writing Your First Test with Playwright and TypeScript',
    description: 'A guide on writing your first test using Playwright and TypeScript.'
};

const PlaywrightTest: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
            <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100">
                Writing Your First Test with Playwright and TypeScript
            </h1>

            <p className="text-lg mb-6 leading-relaxed">
                Playwright is a modern end-to-end testing framework that supports multiple browsers and is particularly useful for testing web applications.
                In this guide, we will walk you through the steps to write your first test using Playwright and TypeScript. We will add playwright test to Next.js
                project of version 14.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Prerequisites</h2>
            <ul className="list-disc list-inside mb-6 pl-5">
                <li>Basic understanding of TypeScript and web testing concepts.</li>
                <li>Familiarity with npm (Node Package Manager).</li>
            </ul>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 1: Installing Node.js</h2>
            <p className="mb-6">
                Before you can start using Playwright, you need to have Node.js installed on your machine. You can download it from the official website:
            </p>
            <ul className="list-disc list-inside mb-6 pl-5">
                <li>
                    Visit the <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Node.js website </a>
                    and download the LTS version 18.18 or later.
                </li>
                <li>Follow the installation instructions for your operating system.</li>
            </ul>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 2: Setting Up Your Project</h2>
            <ol className="list-decimal list-inside mb-6 pl-5">
                <li>
                    <strong>Create a New Directory:</strong>
                    <CodeBlock codeString="mkdir playwright-example && cd playwright-example" />
                </li>
                <li>
                    <strong>Initialize a New Next.js Project:</strong>
                    <CodeBlock codeString="npx create-next-app@latest" />
                </li>
                <li>
                    <strong>Choose option for your project, important to choose use `src/` directory:</strong>
                    <CodeBlock codeString={`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use "src/" directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`} />
                </li>
                <li>
                    <strong>Install Playwright and TypeScript:</strong>
                    <CodeBlock codeString="npm install -D playwright @playwright/test" />
                    <strong>Important note: VS code could mark whole package.json file as red with many errors related to project Id,
                        but everything works correctly anyway. I guess that some kind of bug in compatibility of Next.js and playwright
                    </strong>
                </li>
            </ol>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 3: Writing Your First Test</h2>
            <ol className="list-decimal list-inside mb-6 pl-5">
                <li>
                    <strong>Create a Test File:</strong>
                    Create a new directory called <code>tests</code>, and inside it, create a file named <code>example.spec.ts</code>:
                    <CodeBlock codeString="mkdir -p src/tests && touch src/tests/example.spec.ts" />
                </li>
                <li>
                    <strong>Write a Simple Test:</strong>
                    Here’s an example test that opens a web page and checks the title:
                    <CodeBlock codeString={`
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const title = await page.title();
  expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});`} />
                </li>
            </ol>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 4: Running the Test</h2>
            <ol className="list-decimal list-inside mb-6 pl-5">
                <li>
                    <strong>Add a Script to package.json:</strong>
                    Update your <code>package.json</code> to include a test script:
                    <CodeBlock codeString={`"scripts": {
 "test": "playwright test"
}`} />
                </li>
                <li>
                    <strong>Run the Test:</strong>
                    Execute the following command to run your test:
                    <CodeBlock codeString="npm test" />
                </li>
            </ol>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Step 5: Analyzing the Results</h2>
            <p className="mb-6">
                The test output will show whether the test passed or failed. You can troubleshoot any issues based on the error messages provided.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Conclusion</h2>
            <p className="mb-6">
                In this guide, we covered the steps to set up and write a simple test using Playwright and TypeScript. Explore more advanced testing scenarios such as interactions, assertions, and different browser contexts.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Additional Resources</h2>
            <ul className="list-disc list-inside mb-6 pl-5">
                <li>
                    <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Playwright Documentation
                    </a>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        TypeScript Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default PlaywrightTest;
