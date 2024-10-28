"use client"; // Marks the component as a Client Component

import Head from 'next/head';
import Link from 'next/link';

const PlaywrightLocators = () => {
    return (
        <div className="container mx-auto p-4 md:p-6">
            <Head>
                <title>Playwright Locators</title>
                <meta name="description" content="A comprehensive guide on Playwright locators and element selection strategies with TypeScript, including handling iframes." />
                <meta name="keywords" content="playwright, locators, typescript" />
            </Head>

            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-6">
                Playwright Locators
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-4">
                In this guide, we’ll explore all possible ways to locate elements in Playwright, including the fastest strategies to get elements, 
                and how to work with elements inside an iframe.
            </p>

            {/* Section: Fastest Element Locators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">1. Fastest Element Locator Methods</h2>
                <p className="text-gray-400 mb-2">For speed and simplicity, using direct locators such as CSS selectors or ID selectors is the fastest way to get elements.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Fastest way: CSS selectors
const homeLink = page.locator('nav a.home');
await homeLink.click();

// Fastest way: ID selectors
const aboutLink = page.locator('#about-link');
await aboutLink.click();`}
                    </code>
                </pre>
                <p className="text-gray-400 mb-2">
                    If your element has an ID, always prefer the <code>#id</code> selector as it&apos;s the most optimized. For other elements, CSS selectors like class names 
                    <code> .class-name</code> or attributes are also highly efficient.
                </p>
            </section>

            {/* Section: Text Locators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">2. Text Locators</h2>
                <p className="text-gray-400 mb-2">You can locate elements based on visible text. These are slower compared to direct selectors but useful when IDs or classes are unavailable.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Select element by exact text
const servicesLink = page.locator('text=Services');
await expect(servicesLink).toBeVisible();

// Select element by partial text
const contactLink = page.locator('text=Contact');
await expect(contactLink).toHaveAttribute('href', '/contact');`}
                    </code>
                </pre>
            </section>

            {/* Section: Attribute Locators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">3. Attribute Locators</h2>
                <p className="text-gray-400 mb-2">Attribute locators are another efficient way to get elements when you have specific data attributes, like <code>data-*</code>, <code>name</code>, <code>type</code>, or others.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate by custom data attribute
const contactButton = page.locator('[data-testid="contact-button"]');
await contactButton.click();

// Locate by type attribute
const menuButton = page.locator('button[data-role="menu-button"]');
await menuButton.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: XPath Locators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">4. XPath Locators</h2>
                <p className="text-gray-400 mb-2">Use XPath when you need to find elements that cannot be easily accessed through CSS or text selectors. It is less performant but very flexible.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Select by XPath
const aboutLink = page.locator('//nav/a[text()="About"]');
await aboutLink.click();

// XPath by attribute
const servicesLink = page.locator('//a[@href="/services"]');
await servicesLink.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: ARIA Role Selectors */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">5. ARIA Role Locators (Accessibility)</h2>
                <p className="text-gray-400 mb-2">Playwright allows locating elements by their ARIA roles, which helps in working with accessibility-related locators.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate button by ARIA role and name
const menuButton = page.locator('role=button[name="Menu"]');
await menuButton.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: Nth-child Selectors */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">6. Nth-child Locators</h2>
                <p className="text-gray-400 mb-2">To target specific elements within a repeated set, use <code>nth()</code> to access the right instance of an element.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Select the second navigation item
const secondNavItem = page.locator('nav a').nth(1);
await expect(secondNavItem).toHaveText('About');`}
                    </code>
                </pre>
            </section>

            {/* Section: Locating Elements Inside an Iframe */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">7. Working with Iframes</h2>
                <p className="text-gray-400 mb-2">Playwright allows you to interact with elements inside an iframe using the <code>frameLocator()</code> method.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Access iframe by its selector
const iframe = page.frameLocator('iframe#my-frame');

// Now interact with elements inside the iframe
const iframeButton = iframe.locator('button#inside-frame');
await iframeButton.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: Get Elements by Text (Contains and Exact Matches) */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">8. Get Elements by Text (Contains & Exact Match)</h2>
                <p className="text-gray-400 mb-2">Playwright provides methods to get elements by text with both exact and partial matching.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Exact match for element text
const homeLink = page.getByText('Home', { exact: true });
await homeLink.click();

// Partial match for element text
const aboutLink = page.getByText('Abou');
await aboutLink.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: Getting Elements by Label */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">9. Get Elements by Label</h2>
                <p className="text-gray-400 mb-2">Use <code>getByLabel</code> to locate elements associated with a label. This is useful for input fields, like a search bar.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate search input by its associated label
const searchInput = page.getByLabel('Search');
await searchInput.fill('Playwright');`}
                    </code>
                </pre>
            </section>

            {/* Section: Getting Elements by Placeholder */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">10. Get Elements by Placeholder</h2>
                <p className="text-gray-400 mb-2">The <code>getByPlaceholder</code> method lets you select input elements by their placeholder text.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate input by its placeholder
const emailInput = page.getByPlaceholder('Email Address');
await emailInput.fill('example@example.com');`}
                    </code>
                </pre>
            </section>

            {/* Section: Getting Elements by Role */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">11. Get Elements by Role</h2>
                <p className="text-gray-400 mb-2">Locating elements by ARIA roles helps in making your tests more accessible. Use <code>getByRole</code> for this.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate element by role
const submitButton = page.getByRole('button', { name: 'Submit' });
await submitButton.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: Getting Elements by Test ID */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">12. Get Elements by Test ID</h2>
                <p className="text-gray-400 mb-2">Using <code>data-testid</code> attributes can be a robust way to select elements in tests.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate element by data-testid
const saveButton = page.locator('[data-testid="save-button"]');
await saveButton.click();`}
                    </code>
                </pre>
            </section>

            {/* Section: Chaining Locators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">13. Chaining Locators</h2>
                <p className="text-gray-400 mb-2">You can chain locators to refine your selection process, targeting nested elements directly.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Locate nested element by chaining
const nestedElement = page.locator('div.container').locator('span.highlight');
await expect(nestedElement).toBeVisible();`}
                    </code>
                </pre>
            </section>

            {/* Section: Using Locators with Filters */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">14. Using Locators with Filters</h2>
                <p className="text-gray-400 mb-2">Filters can help to narrow down the results when selecting elements, making your tests more precise.</p>
                <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm">
                        {`// Filter elements by attributes
const filteredLinks = page.locator('a').filter({ hasText: 'Home' });
await expect(filteredLinks).toHaveCount(1);`}
                    </code>
                </pre>
            </section>

            <footer className="mt-8 text-center text-gray-400">
                <p>For more details, check the official <Link href="https://playwright.dev/docs/locators" className="text-blue-300 hover:underline">Playwright documentation</Link>.</p>
            </footer>
        </div>
    );
};

export default PlaywrightLocators;
