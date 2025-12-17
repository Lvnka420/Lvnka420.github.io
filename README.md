# LVNKA — Deployment

This repository is a Vite + React project. To publish the site on GitHub Pages this repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Runs `npm ci` and `npm run build`.
- Uploads the generated `dist/` folder and deploys it to GitHub Pages.

How it works:

1. Push to `main` branch.
2. GitHub Actions will build the project and publish the `dist/` contents to Pages.

Notes:

- If you prefer to publish from a branch (e.g., `gh-pages`) or from the `docs/` folder, adjust the workflow or project `vite` config accordingly.
- The workflow uses the recommended Pages Actions: `configure-pages`, `upload-pages-artifact`, and `deploy-pages`.
