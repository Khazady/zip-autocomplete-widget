# Zip Autocomplete Widget

## Overview

Zip Autocomplete Widget is a recruitment-task implementation of a floating button that expands into a
zip/city autocomplete widget. The widget appears after the user scrolls past 90% of the viewport height,
is lazy-loaded on demand, fetches mocked data with a simulated delay, and logs the selected zip object
to the console before disappearing permanently.

## Node and npm versions

Use the Node and npm versions specified in `package.json` under the `engines` field (`node` 24.x, `npm` 11.x).
Because `.npmrc` has `engine-strict=true`, using other versions will cause `npm install` to fail.

For convenience, a `.nvmrc` file is provided:

- Run `nvm use` in the project root (reads `.nvmrc`). If the version isn't installed, run `nvm install` first.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/Khazady/zip-autocomplete-widget.git`.
2. Navigate to the root project directory.
3. Install dependencies `npm install`.
4. Start the development server `npm run dev`.
5. Build and preview the production bundle: `npm run build` then `npm run preview`.

## Technologies Used

React TypeScript CSS Vite

## Project Architecture

- `src/api/mockZipApi.ts` - mocked fetch implementation.
- `src/data/zipCodes.ts` - mocked data set.
- `src/store/zipStore.tsx` - context + reducer state management.
- `src/components/FloatingZipWidget.tsx` - widget UI and behavior.
