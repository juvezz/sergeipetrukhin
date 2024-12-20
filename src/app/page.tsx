import Head from "next/head";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Full height layout */}
      <Head>
        <title>My Testing Blog</title>
        <meta
          name="description"
          content="A blog about testing and test automation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow container mx-auto px-4 py-8">
        {" "}
        {/* No center text */}
        <div className="flex flex-col items-center text-center">
          {" "}
          {/* Centers content horizontally and aligns text */}
          <h1 className="text-4xl font-bold mb-6 text-white">
            {" "}
            {/* Changed to white for high contrast */}
            Welcome to My Testing Blog
          </h1>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl">
            {" "}
            {/* Lightened the paragraph text for better readability */}
            Explore articles and tutorials on testing frameworks, automation
            tools, and best practices.
          </p>
        </div>
        <Link href="/java-interview-part2">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-2 text-black hover:text-teal-500 transition">
              Java QA Automation: Interview Questions Part 2
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Posted on December 20, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A continuation of the Java QA Automation interview series,
              focusing on advanced topics for automation engineers.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              11. Singleton Design Pattern for WebDriver Management
              <br />
              12. Handling File Uploads in Selenium
              <br />
              13. Configuring Parallel Execution in TestNG and JUnit
              <br />
              14. Validating Tooltips in Selenium
              <br />
              15. DataProviders in TestNG for Data-Driven Testing
              <br />
              Explore Other Questions
            </pre>
          </section>
        </Link>
        <Link href="/java-interview-part1">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-2 text-black hover:text-teal-500 transition">
              Java QA Automation: Interview Questions Part 1
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Posted on December 17, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A first part of interview questions with answers for position Java
              QA Automation Enginner.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              1. String Comparison: == vs .equals()
              <br />
              2. Waits in Selenium: Implicit, Explicit, Fluent Waits
              <br />
              3. Basic Selenium Script: Automating Login Page
              <br />
              4. Page Object Model (POM) Design Pattern
              <br />
              5. Opening a New Tab using WebDriver
              <br />
              Add Another Questions
            </pre>
          </section>
        </Link>
        <Link href="/testing-techniques">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-2 text-black hover:text-teal-500 transition">
              Black Box Testing Techniques: A Comprehensive Guide
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Posted on December 5, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Discover various black box testing techniques and learn how they
              ensure quality by focusing on the external functionality of
              software systems.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              1. Equivalence Partitioning
              <br />
              2. Boundary Value Analysis (BVA)
              <br />
              3. Decision Table Testing
              <br />
              4. State Transition Testing
              <br />
              5. Exploratory Testing
              <br />
              6. Error Guessing
            </pre>
          </section>
        </Link>
        <Link href="/github-actions">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            <h2 className="text-4xl font-bold mb-2 text-green-600 hover:text-green-800 transition">
              Automating Playwright Tests with GitHub Actions
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Posted on November 20, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Learn how to automate your Playwright tests in a Next.js
              application using GitHub Actions.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              <code>
                {`name: Playwright Tests

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

     ...`}{" "}
              </code>
            </pre>
          </section>
        </Link>
        <Link href="/playwright-visual-regression">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            {/* Enhanced heading */}
            <h2 className="text-4xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Playwright visual regression testing
            </h2>
            {/* Fixed date */}
            <p className="text-sm text-gray-500 mb-2">
              Posted on November 07, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              To detect visual problems with CSS, HTML, JS or even 404 error,
              nice feature of playwright is visual testing.
            </p>
            {/* Image instead of code block */}
            {/* Code block */}
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              <code>
                {`test('About page visual test with maxDiffPixels', async ({ page }) => {
  await page.goto('https://sergeipetrukhin.vercel.app/about');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot('aboutpage.png', {
    maxDiffPixels: 100 // allows for up to 100 pixel differences
  });
});`}
              </code>
            </pre>
          </section>
        </Link>
        <Link href="/playwright-locators">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            {/* Enhanced heading */}
            <h2 className="text-4xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Playwright Locators
            </h2>
            {/* Fixed date */}
            <p className="text-sm text-gray-500 mb-2">
              Posted on October 29, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A list of posibble playwright locators to get elements using
              TypeScript.
            </p>
            {/* Code block */}
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              <code>{`// Fastest way: CSS selectors
const homeLink = page.locator('nav a.home');
await homeLink.click();

// Fastest way: ID selectors
const aboutLink = page.locator('#about-link');
await aboutLink.click();`}</code>
            </pre>
          </section>
        </Link>
        <Link href="/playwright-test">
          <section className="mb-8 cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            {/* Enhanced heading */}
            <h2 className="text-4xl font-bold mb-2 text-blue-600 hover:text-blue-800 transition">
              Playwright First Test
            </h2>
            {/* Fixed date */}
            <p className="text-sm text-gray-500 mb-2">
              Posted on October 21, 2024
            </p>
            <p className="text-lg text-gray-700 mb-4">
              A simple Playwright test to check the page title.
            </p>
            {/* Code block */}
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
              <code>{`import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const title = await page.title();
  expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});`}</code>
            </pre>
          </section>
        </Link>
      </main>
    </div>
  );
};

export default Home;
