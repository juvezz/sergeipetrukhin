import { NextResponse } from 'next/server';

export async function GET() {
  // List your URLs here
  const sitemapEntries = [
    {
      loc: 'https://sergeipetrukhin.vercel.app/', // Homepage
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sergeipetrukhin.vercel.app/about', // About page
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sergeipetrukhin.vercel.app/playwright-test', // Playwright Test page
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sergeipetrukhin.vercel.app/playwright-locators', // Playwright Test page
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sergeipetrukhin.vercel.app/playwright-visual-regression', // Playwright Test page
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://sergeipetrukhin.vercel.app/github-actions', // Playwright Test page
      lastmod: new Date().toISOString(),
    },
    // Add more URLs as needed
  ];

  // Construct the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries
      .map(
        (entry) => `
      <url>
        <loc>${entry.loc}</loc>
        <lastmod>${entry.lastmod}</lastmod>
      </url>`
      )
      .join('')}
  </urlset>`;

  // Create a response with the correct content type
  const response = new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });

  return response;
}
