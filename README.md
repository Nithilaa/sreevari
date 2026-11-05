# Sreevari Apparels — website

React + Vite + TypeScript + GSAP/ScrollTrigger. Business facts come from https://www.sreevariapparels.com/.

## Run
```bash
npm install
npm run dev        # local development
npm run build      # production build -> dist/
```

## Deploy to GitHub Pages
1. Create a GitHub repo (any name) and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` builds with `VITE_BASE=/<repo-name>/` automatically, so assets and links work at `https://<user>.github.io/<repo-name>/`. Renaming the repo needs no code change.
- User/organisation site (`<user>.github.io` repo): set `VITE_BASE: /` in the workflow.
- Custom domain: set `VITE_BASE: /` as well.
- Local build under a sub-path: `VITE_BASE=/my-repo/ npm run build`.

## Photography
All images are defined once in `src/assets/images.ts`, each as a fallback chain (stock URL first, then the official Sreevari photo if it fails). Replace or add URLs there. Stock photos come from Pexels and Unsplash (free licences).

Stand-ins to replace with better shots when available: **cutting** (fabric rolls shown), **pattern** (textile rolls plus an animated technical pattern overlay), **trousers** (denim stitching), **uniforms** (official quality-inspection photo), **workwear** (heavy stitching).

## Enquiry form
Opens WhatsApp (+91 80725 44030) with the enquiry pre-filled. No email address is published on the official site, so none is used.
