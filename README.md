# Portfolio Website – React + shadcn/ui

Modern single-page portfolio built with React, Vite, Tailwind CSS, and shadcn/ui components. The project ships with a polished landing page, reusable UI primitives, and GitHub Pages deployment via the `gh-pages` branch.

## ✨ Highlights

- **shadcn/ui foundation** – buttons, cards, badges, and form controls mapped to Tailwind CSS tokens.
- **Responsive sections** – hero, about, experience, projects, skills, and contact.
- **Dark/light mode** – toggled via a lightweight theme switcher persisted to `localStorage`.
- **Accessible defaults** – semantic structure, skip link, focus styles, and keyboard-friendly interactions.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to view the site locally. Vite provides instant HMR for rapid iteration.

## 🛠️ Available Scripts

- `npm run dev` – start the Vite development server.
- `npm run build` – create an optimized production build in `dist/`.
- `npm run preview` – locally preview the production build.
- `npm run deploy` – build and publish the site to GitHub Pages (`gh-pages` branch).

## 🌐 GitHub Pages Deployment

1. Update portfolio content under `src/App.tsx` or create new components within `src/components`.
2. Commit changes to the main branch.
3. Run `npm run deploy` to build and push the latest site to the `gh-pages` branch.
4. Ensure the GitHub repository is configured to serve from `gh-pages`.

The Vite config sets `base: "/portfoliowebsite-react/"` and `package.json` declares the correct `homepage`, so assets resolve correctly in production.

## 🧱 Project Structure

```
├── src
│   ├── App.tsx          → page layout and section content
│   ├── main.tsx         → React entry point
│   ├── index.css        → Tailwind layers and design tokens
│   ├── components
│   │   └── ui           → shadcn/ui-derived primitives
│   └── lib
│       └── utils.ts     → helper utilities (e.g., `cn`)
├── tailwind.config.js   → Tailwind theme extensions
├── vite.config.ts       → Vite + alias configuration
└── package.json         → scripts and dependencies
```

## 🧭 Customisation Tips

- Update the arrays in `App.tsx` (`experience`, `projects`, `skills`, etc.) with your own content.
- Add new shadcn/ui components by copying definitions into `src/components/ui`.
- Adjust theme tokens in `src/index.css` to match your brand palette.
- Introduce analytics or integrations by extending sections or adding new contexts.

Happy shipping!

