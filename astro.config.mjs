// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served as a GitHub Pages project site, so every page lives under
// /irina-bianca-serban/ and internal links must go through
// import.meta.env.BASE_URL. Moving to a custom domain: set `site` to that
// domain, delete `base`, and add public/CNAME holding the domain.
export default defineConfig({
  site: 'https://sudo-acraciun.github.io',
  // The trailing slash is load-bearing: without it @astrojs/sitemap lists the
  // home page twice, once with and once without the slash.
  base: '/irina-bianca-serban/',
  integrations: [sitemap()],
  build: {
    // /about.html rather than /about/index.html, so the crawlable URL is the
    // one in the sitemap, with no trailing-slash redirect hop.
    format: 'file',
  },
});
