# LVNKA — Deployment

This repository is a Vite + React project. To publish the site on GitHub Pages this repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Runs `npm ci` and `npm run build`.
- Uploads the generated `dist/` folder and deploys it to GitHub Pages.

How it works:

1. Push to `main` branch.
2. GitHub Actions will build the project and publish the `dist/` contents to Pages.

Notes:

- This repository now uses the `peaceiris/actions-gh-pages@v4` action to publish the `./dist` folder to the `gh-pages` branch automatically.
- Alternatively you can publish from a `docs/` folder or change the publishing branch in the workflow if you prefer a different setup.
