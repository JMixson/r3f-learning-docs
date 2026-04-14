# R3F Learning Docs

R3F Learning Docs is a custom Astro + Starlight site for learning React Three Fiber by comparing familiar Three.js patterns with equivalent R3F code.

The docs are organized around a simple teaching loop:

1. Read the original Three.js approach.
2. Compare it to the React Three Fiber version.
3. Focus on what stays the same and what becomes declarative.

## What This Project Covers

- `start-here/`: foundational mental models for reading and learning R3F
- `conversions/`: side-by-side translations from common Three.js setups to R3F
- `patterns/`: practical guidance on refs, state, imperative updates, and helper libraries
- `reference/`: quick lookup material for JSX primitives, prop mappings, and common gotchas

## Tech Stack

- [Astro](https://docs.astro.build/)
- [Starlight](https://starlight.astro.build/)
- [React](https://react.dev/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/)
- [Three.js](https://threejs.org/)

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- content/
|   |   `-- docs/
|   |       |-- conversions/
|   |       |-- patterns/
|   |       |-- reference/
|   |       `-- start-here/
|   `-- styles/
|-- astro.config.mjs
|-- package.json
`-- README.md
```

The documentation homepage lives at `src/content/docs/index.mdx`.

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
- Styling is primarily handled through the Starlight setup and the files in `src/styles/`.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
