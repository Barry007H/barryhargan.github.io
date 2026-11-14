# Barry Hargan — Software Engineer Portfolio

Personal portfolio website for **Barry Hargan** (Software Engineer specialising in C#, .NET, Angular, SQL Server, and Microsoft Azure), built with Angular 21 and Tailwind CSS.

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in your browser.

## Building for Production & GitHub Pages

To build the project with GitHub Pages SPA routing support (`404.html` fallback and `.nojekyll`):

```bash
# Standard production build (base-href: /)
npm run build

# Project repository GitHub Pages build (base-href: /barryhargan.github.io/)
npm run build:gh-pages
```

The production static files are generated in `dist/barry-architect/browser`.

## Deploying to GitHub Pages

This project includes a pre-configured GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically builds the Angular app, sets the dynamic `--base-href` from your repository's GitHub Pages configuration, generates `404.html` for client-side routing, and deploys to GitHub Pages.

### Setup Steps on GitHub:
1. Push this repository to GitHub (on the `main` or `master` branch).
2. In your GitHub repository, navigate to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Any push to `main` (or manual run from the **Actions** tab) will automatically build and publish your live site.
