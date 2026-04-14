# R3F Learning Docs

R3F Learning Docs is an Astro + Starlight site for learning React Three Fiber by comparing familiar Three.js patterns with their React equivalents.

Each lesson follows a simple loop:

1. Read the Three.js version.
2. Switch to the React Three Fiber version.
3. Run the R3F example inline with the local preview embedded in the page.

## What The Site Covers

- `start-here/`: core mental models for reading and learning R3F
- `conversions/`: side-by-side translations from common Three.js setups to R3F
- `guides/`: broader walkthroughs and supporting explanations
- `patterns/`: practical guidance on refs, state, imperative updates, and helper libraries
- `reference/`: quick lookup material for JSX primitives, prop mappings, and common gotchas

The documentation homepage lives at `src/content/docs/index.mdx`.

## How Examples Work

The docs use a shared example registry plus inline local previews for the comparison pages.

- Source examples live in `examples/<slug>/`
- Each example includes:
  - `three/main.js` for the vanilla Three.js version
  - `r3f/App.jsx` for the React Three Fiber version
  - `meta.json` for the title, summary, sandbox links, and pinned dependency versions
- `src/data/examples.ts` imports those files and exposes them to the docs components
- `src/components/docs/CodeCompare.astro` renders the tabbed code comparison and mounts the live R3F preview
- `src/components/docs/SandpackDemo.tsx`, `src/components/docs/ExamplePreviewPage.tsx`, and `src/pages/previews/[slug].astro` power the inline preview iframe and the dedicated preview route

## Tech Stack

- [Astro](https://docs.astro.build/)
- [Starlight](https://starlight.astro.build/)
- [React](https://react.dev/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```text
.
|-- examples/
|-- public/
|-- src/
|   |-- components/
|   |   `-- docs/
|   |-- content/
|   |   `-- docs/
|   |       |-- conversions/
|   |       |-- guides/
|   |       |-- patterns/
|   |       |-- reference/
|   |       `-- start-here/
|   |-- data/
|   |-- pages/
|   `-- styles/
|-- astro.config.mjs
|-- package.json
`-- README.md
```

## Commands

Run these from the project root:

| Command | Action |
| :------ | :----- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro -- --help` | Show Astro CLI help |

## Development Notes

- Docs content is written in `.md` and `.mdx` files under `src/content/docs/`.
- Static assets belong in `public/`.
- Shared styling lives in `src/styles/`.
- Example updates usually touch both the lesson content and the matching files in `examples/`.
- The inline preview only runs the R3F example; the Three.js version is shown as a comparison reference.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
