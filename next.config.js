// next.config.js
const { withSitemap } = require('next-sitemap');

module.exports = withSitemap({
  output: 'export',
  images: {
    unoptimized: true,
  },
  // other Next.js configurations can go here
});

