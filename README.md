<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Rok Kru — Teacher Review Platform

> Live site → **https://RatanakANB.github.io/RokKru/**

A community platform for students to share and discover teacher reviews, built with React + Vite + TypeScript + Tailwind CSS.

---

## 🚀 Deploy to GitHub Pages (Automatic)

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:
1. Installs dependencies with **pnpm**
2. Builds the app with `GEMINI_API_KEY` injected from repository secrets
3. Publishes the `dist/` folder to the `gh-pages` branch

### One-time setup steps

1. **Add your Gemini API key as a secret**
   - Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `GEMINI_API_KEY`  
   - Value: your actual Gemini API key

2. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / `/ (root)`
   - Save

3. **Push to `main`** — the workflow runs automatically and your site goes live at  
   `https://RatanakANB.github.io/RokKru/`

---

## 💻 Run Locally

**Prerequisites:** Node.js, pnpm

```bash
# Install dependencies
pnpm install

# Set your API key
cp .env.example .env.local
# Edit .env.local and set GEMINI_API_KEY=your_key_here

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).
