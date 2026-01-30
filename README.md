# Zip Autocomplete Widget

## Overview

Zip Autocomplete Widget is a recruitment-task implementation of a floating button that expands into a
zip/city autocomplete widget. The widget appears after the user scrolls past 90% of the viewport height,
is lazy-loaded on demand, fetches mocked data from `public/`, and logs the selected zip code to the console
before disappearing permanently. Closing via the cross icon also dismisses the widget.

## Node and npm versions

Use the Node and npm versions specified in `package.json` under the `engines` field (`node` 24.8.0, `npm` 11.6.0).
Because `.npmrc` has `engine-strict=true`, using other versions will cause `npm install` to fail.

For convenience, a `.nvmrc` file is provided:

- Run `nvm use` in the project root (reads `.nvmrc`). If the version isn't installed, run `nvm install` first.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/Khazady/zip-autocomplete-widget.git`.
2. Navigate to the root project directory.
3. Install dependencies `npm install`.
4. Start the development server `npm run dev`.
5. Build and preview the production bundle: `npm run build` then `npm run preview`.

## Deployment (GitHub Pages)

This project deploys to GitHub Pages via a dedicated `gh-pages` branch using the `gh-pages` package (no GitHub Actions).

1. Run `npm run deploy` (builds `dist` and pushes it to the `gh-pages` branch).
2. In GitHub, open **Settings → Pages** and choose **Source: Deploy from a branch**.
3. Select **Branch: gh-pages / root** and save.
4. The site will be available at `https://<username>.github.io/<repo-name>/`.

If you rename the repository, update both:

- `vite.config.ts` → `base: "/<repo-name>/"`.
- `package.json` → `"homepage": "https://<username>.github.io/<repo-name>/"`.

## Technologies Used

- React
- TypeScript
- SWR
- CSS Modules
- Vite

## Project Architecture

- `public/mocked-data.json` - mocked zip dataset used by the fetcher.
- `src/lib/api/zip/zipApi.ts` - fetcher for mocked zip data.
- `src/lib/api/zip/zipPresenter.ts` - transforms API records into UI items.
- `src/lib/api/zip/zipTypes.ts` - API vs UI types.
- `src/lib/api/zip/useZipSearch.ts` - SWR hook for zip search.
- `src/lib/hooks/useExitAnimation.ts` - exit/dismiss animation helper.
- `src/lib/hooks/useScrollTrigger.ts` - scroll-based mounting trigger.
- `src/lib/utils/` - shared helpers (`cn`, `normalizeText`).
- `src/lib/dictionary.ts` - copy strings.
- `src/components/FloatingZipWidget/` - widget UI and behavior.
- `src/components/ui/Spinner/` - reusable spinner.
- `src/styles/theme.css` - design tokens.
- `src/styles/global.css` - global reset.
