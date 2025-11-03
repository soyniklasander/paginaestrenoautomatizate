# Copilot instructions — Automatizate Web

This repo is a monorepo with a Vue 3 client (Vite) in `client/` and a NestJS server in `server/`. Spanish naming is used across the client (e.g., `paginas`, `componentes`, `estilos`). Keep edits consistent with this structure and language.

## Architecture at a glance
- Client: Vite + Vue 3, Vue Router, Vuex.
   - Entry: `client/src/main.ts` mounts `App.vue`, installs `router` and `store`, and loads global CSS from `estilos/base.css`.
   - Routing: `client/src/router.ts` defines routes to `paginas/{Inicio,Nosotros,Servicios,Contacto}.vue` with Spanish route names.
   - Aliases: `vite.config.ts` sets `@` → `/src`. Prefer `@/paginas/Inicio.vue` style imports.
   - HTTP: `axios` is installed but there’s no centralized API wrapper yet; put helpers under `client/src/utils/`.
- Server: NestJS minimal skeleton.
   - Entry: `server/src/main.ts` creates `AppModule` and listens on port 3000.
   - Composition: `server/src/app.module.ts` imports feature modules: `modules/{auth,users,projects,contact}` and `config` (these may be placeholders in this snapshot).
   - Build: TypeScript compiles to `dist/` (`server/tsconfig.json`). `nest-cli.json` includes `assets: ["**/*.hbs"]`.

## Dev workflows
- Client
   - Install: `cd client ; npm install`
   - Run dev: `npm run serve` (Vite dev server at port 3000; auto-open browser)
   - Build: `npm run build` (outputs to `client/dist`)
- Server
   - Install: `cd server ; npm install`
   - Build: `npm run build` (transpiles TS → `dist`)
   - Run: `npm start` (runs `node dist/main.js`)
   - Test: `npm test` (Jest configured, tests folder present; add specs under `server/src/**/__tests__` or `*.spec.ts`)
- Docker (compose): `docker-compose.yml` defines `client`, `server`, and `db` services, but Dockerfiles for `client/` and `server/` are not present in this snapshot. Add them or run locally via npm scripts.

## Conventions and patterns
- Language and folders: prefer Spanish names already in use: `paginas/`, `componentes/comun/`, `estilos/`.
- Components: small reusable UI under `client/src/componentes/comun/` (e.g., `Boton.vue`, `Tarjeta.vue`); section/layout under `componentes/diseño/`.
- State: `client/src/store.ts` sets up a global Vuex store; add slices via modules if state grows.
- Styles: global CSS in `client/src/estilos/base.css`. Co-locate component styles in single-file components.
- Routing: update `client/src/router.ts` when adding new pages in `paginas/`.
- Server modules: follow Nest conventions — create `*.module.ts`, `*.controller.ts`, `*.service.ts` per feature under `server/src/modules/<feature>/` and import into `AppModule`.

## Integration points
- Ports: Vite dev server uses 3000 (see `client/vite.config.ts`). Nest `main.ts` also listens on 3000 by default. Avoid clashes by changing server to 3001 in dev or enabling proxying.
   - Example quick fix: update `server/src/main.ts` to `await app.listen(3001)` and configure client to call `http://localhost:3001`.
- CORS: enable if calling the server from the client during dev: `app.enableCors()` in `server/src/main.ts`.
- API calls: centralize axios config in `client/src/utils/api.ts` (e.g., baseURL from env), and import in pages/components.

## Gotchas
- docker-compose currently maps server to 3001 but `server/src/main.ts` listens on 3000; align these before using compose.
- `server/src/modules/*` folders referenced in `AppModule` may be placeholders; create them before importing new providers/controllers.

## Examples
- Add a new page: create `client/src/paginas/Nueva.vue`, add a route in `client/src/router.ts`, and link from `componentes/diseño/BarraNavegacion.vue`.
- Add a new API feature: scaffold `server/src/modules/tareas/{tareas.module.ts,tareas.controller.ts,tareas.service.ts}` and import `TareasModule` in `AppModule`.

If any of the above doesn’t match your local snapshot (e.g., Dockerfiles added, ports changed), update this file to reflect the truth of the code. Keep guidance short and specific.
