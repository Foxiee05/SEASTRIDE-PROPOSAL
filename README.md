# SeaStride Proposal - Static Web Application

Gamified Fitness RPG Official Proposal Document Reader.

## 🚀 How to Deploy on GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push this entire project repository to GitHub (branch `main` or `master`).
2. On your GitHub repository page:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! Every time you push changes, the workflow at `.github/workflows/deploy.yml` will automatically build the static HTML/CSS/JS and publish your site to `https://<your-username>.github.io/<repo-name>/`.

---

### Option 2: Deploy Built `dist` Folder Manually or with `gh-pages`

1. Build the static assets:
   ```bash
   npm run build
   ```
2. The production-ready static files are generated in the `dist/` directory:
   - `dist/index.html`
   - `dist/assets/*.css`
   - `dist/assets/*.js`
3. You can publish the `dist` folder to GitHub Pages:
   ```bash
   npx gh-pages -d dist
   ```
   Or set the GitHub Pages branch to point directly to your build folder / branch.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static output
npm run build
```
