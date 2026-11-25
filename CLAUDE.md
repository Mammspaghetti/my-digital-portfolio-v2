# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Early build-out of a personal portfolio (Home + Projects pages). Project data in `src/features/projects/projects.ts` is placeholder content. The project detail route from ADR 2 is not implemented yet. Git repository on `main`; the router/pages/domain/features work is still uncommitted.

## Architecture Decision Records

- **ADR 1 — SOLID:** every new class must respect the SOLID principles (single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion).

- **ADR 2 — Routing:** use React Router with `BrowserRouter` (clean URLs for Home, Projects and project detail), not hash routing. The site will be deployed online, so the host must rewrite every path to `index.html` (SPA fallback), and the Vite `base` must match the deployment path.
- **ADR 3 — ADR documentation:** every architecture decision of this kind gets a documentation page in `docs/adr/` as a standalone HTML file with a dark mode (follows `prefers-color-scheme`, with a manual toggle). Keep this list and `docs/adr/index.html` in sync when adding an ADR.
- **ADR 4 — Deployment:** GitHub Pages via `.github/workflows/deploy.yml` (build on push to `main`, `dist/` is never committed). Vite `base` is `/my-digital-portfolio-v2/` and is passed to `BrowserRouter` as `basename`; the workflow copies `index.html` to `404.html` as SPA fallback. The dev server also serves under that prefix.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then `vite build`
- `npm run lint` — run Oxlint (not ESLint)
- `npm run preview` — serve the production build

No test framework is configured. To lint a single file: `npx oxlint src/App.tsx`.

## Architecture

- Single-page React 19 app; entry is `index.html` → `src/main.tsx` → `src/App.tsx`, which declares the `BrowserRouter` + `Routes` (`/` → `HomePage`, `/projects` → `ProjectsPage`). No state library.
- Layered source layout: `src/domain/` (pure types, e.g. `Project`), `src/features/<feature>/` (feature components + their data, e.g. `projects/ProjectCard.tsx`, `projects.ts`), `src/pages/` (route-level components that compose features). Styling is per-component CSS Modules (`*.module.css`) next to the component; `src/index.css` holds globals. `src/App.css` is leftover template CSS.
- Imports use explicit file extensions (`./pages/HomePage.tsx`, `../../domain/project.ts`) and `import type` for types. UI copy is mixed French/English.
- Build tooling is Vite 8 (Rolldown-based) with `@vitejs/plugin-react` (Oxc, no Babel/SWC); `vite.config.ts` is minimal (`base` set for GitHub Pages — see ADR 4). React Compiler is not enabled.
- TypeScript 7 (`typescript ~7.0.2`) with split project references: `tsconfig.app.json` (src) and `tsconfig.node.json` (Vite config), referenced from `tsconfig.json`. This is why build uses `tsc -b`.
- Linting uses Oxlint with the `react`, `typescript`, `oxc` plugins (`.oxlintrc.json`); `react/rules-of-hooks` is an error and `react/only-export-components` a warning. Type-aware linting (`oxlint-tsgolint`) is not enabled.
- Static assets: `public/` (favicon, `icons.svg` sprite referenced via `<use href="/icons.svg#...">`) and `src/assets/` (imported modules).
- ADR pages live in `docs/adr/` (`index.html`, one `adr-NNN-*.html` per decision, shared `adr.css`/`adr.js` for dark mode toggle); they are not part of the Vite app.
