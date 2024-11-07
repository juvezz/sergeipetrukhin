import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
    test('About page visual snapshot', async ({ page }) => {
        await page.goto('https://sergeipetrukhin.vercel.app/about');
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png');
    });

    test('About page visual test with maxDiffPixels', async ({ page }) => {
        await page.goto('https://sergeipetrukhin.vercel.app/about');
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('aboutpage.png', {
            maxDiffPixels: 100 // allows for up to 100 pixel differences
        });
    });
})