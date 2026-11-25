# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Fresh Vite + React + TypeScript template scaffold. `src/App.tsx` is still the default "Get started" demo page (counter, Vite/React links) — no portfolio content has been built yet. Not a git repository yet.

## Architecture Decision Records

- **ADR 1 — SOLID:** every new class must respect the SOLID principles (single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion).

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then `vite build`
- `npm run lint` — run Oxlint (not ESLint)
- `npm run preview` — serve the production build

No test framework is configured. To lint a single file: `npx oxlint src/App.tsx`.

## Architecture

- Single-page React 19 app; entry is `index.html` → `src/main.tsx` → `src/App.tsx`. No router or state library.
- Build tooling is the newer Vite 8 (Rolldown-based) with `@vitejs/plugin-react` (Oxc, no Babel/SWC); config in `vite.config.ts` is minimal. React Compiler is not enabled.
- TypeScript 7 (`typescript ~7.0.2`) with split project references: `tsconfig.app.json` (src) and `tsconfig.node.json` (Vite config), referenced from `tsconfig.json`. This is why build uses `tsc -b`.
- Linting uses Oxlint with the `react`, `typescript`, `oxc` plugins (`.oxlintrc.json`); `react/rules-of-hooks` is an error and `react/only-export-components` a warning. Type-aware linting (`oxlint-tsgolint`) is not enabled.
- Static assets: `public/` (favicon, `icons.svg` sprite referenced via `<use href="/icons.svg#...">`) and `src/assets/` (imported modules).
