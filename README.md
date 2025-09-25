# React + Vite
# Driver Scheduling Dashboard

A responsive React application for managing drivers and routes. Includes driver and route forms, a dashboard with KPIs, assignments view, searchable driver list, and a simple 7‑day availability calendar. State is persisted to localStorage.

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- React-Leaflet + Leaflet (map picker for routes)

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run locally

```bash
npm run dev
```

3) Build for production

```bash
npm run build
```

## Project Structure

- `src/components/SchedulerContext.jsx`: Global state for drivers and routes with localStorage persistence
- `src/components/Dashboard.jsx`: KPIs, driver status, today schedule, routes list, and 7‑day availability calendar
- `src/components/Drivers.jsx`: Drivers table with search/filter and mobile card view
- `src/components/DriverForm.jsx`: Add new drivers
- `src/components/RouteForm.jsx`: Add new routes, assign drivers, and pick locations via map
- `src/components/Header.jsx`: Sidebar navigation

## Features

- Add drivers and routes via forms
- Assign drivers to routes (optional; unassigned shown clearly)
- Dashboard KPIs: total, available, on‑route
- Routes list showing assignment status and details
- Driver list search and status filter
- 7‑day availability calendar (Assigned vs Free per driver)
- Responsive UI: grid KPIs, mobile cards for drivers, tables hidden on small screens
- Data persisted in the browser via localStorage

## Data Persistence

State is stored under key `driver_dashboard_state_v1` in `localStorage`. Seed data is provided on first load. To reset, clear site data or localStorage key.

## Maps

Map picker uses OpenStreetMap tiles and Nominatim reverse geocoding via `react-leaflet`. No API key required.

## Deployment

### GitHub

```bash
git init
git add .
git commit -m "feat: driver scheduling dashboard"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

### Vercel

- Import the GitHub repo into Vercel
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Deploy and copy the live URL

## Notes

- Images and icons are in `public/` and referenced by relative paths
- React 19 and React Router v7 are used
- Tailwind v4 via `@tailwindcss/vite`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
