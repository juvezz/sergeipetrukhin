import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
    test('About page visual snapshot', async ({ page, baseURL }) => {
        // Use baseURL from the Playwright configuration
        await page.goto(`${baseURL}/about`);
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png');
    });
    
    test('About page visual test with maxDiffPixels', async ({ page, baseURL }) => {
        // Use baseURL from the Playwright configuration
        await page.goto(`${baseURL}/about`);
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png', {
            maxDiffPixels: 100 // allows for up to 100 pixel differences
        });
    });
})