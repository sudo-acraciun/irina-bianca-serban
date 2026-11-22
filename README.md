# irina-bianca-serban

Website of Irina Bianca Serban. Static site, built with Astro, deployed to
GitHub Pages at
[sudo-acraciun.github.io/irina-bianca-serban](https://sudo-acraciun.github.io/irina-bianca-serban/).

## Commands

```bash
npm install
npm run dev      # local dev server on :4321
npm run build    # static build into dist/
npm run preview  # serve dist/ locally
npm run check    # astro check (types + template diagnostics)
```

Deployment is automatic: any push to `main` runs
`.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

## Conventions

- **No client-side JavaScript** unless a feature cannot work without it. Pages
  render to plain HTML, which every crawler and link preview can read.
- **One source for copy.** User-facing strings live in `src/data/site.ts`.
- **Base path.** The site is served under `/irina-bianca-serban/`, so internal
  links and asset URLs go through `import.meta.env.BASE_URL`, never a bare `/`.
  A custom domain removes the base path; the steps are in `astro.config.mjs`.
- **Run `npm run check`**, not only `npm run build`: the build does not
  type-check.
