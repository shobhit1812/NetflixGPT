# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Instructions

1. `cd NetflixGPT`
2. `pnpm install`
3. `pnpm run dev`

## For Network (3 methods)

1. `pnpm run dev --host`
2. `"host": "vite --host"` write this in package.json below preview in scripts, then `pnpm run host`
3. In vite.config.js write `server: { host: true, }` after plugins
