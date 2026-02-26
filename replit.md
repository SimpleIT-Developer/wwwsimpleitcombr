# SimpleIT Website

A React + Vite + TypeScript frontend website for SimpleIT.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives + custom components
- **Animations**: Framer Motion
- **Routing**: React Router DOM v7

## Project Structure

```
src/
  components/   - Reusable UI components
  pages/        - Page-level components (HomePage, DigitalProductsPage)
  lib/          - Utility functions
  App.tsx       - Root app component with routing
  main.tsx      - Entry point
public/         - Static assets (images)
```

## Development

The app runs on port 5000 via `npm run dev`.

Vite is configured with:
- `host: '0.0.0.0'` for Replit proxy compatibility
- `port: 5000`
- `allowedHosts: 'all'` to trust Replit's proxy

## Deployment

Configured as a static site deployment:
- Build command: `npm run build`
- Public directory: `dist`

## Notes

- `npm install --legacy-peer-deps` is required because `react-helmet-async@2.0.5` does not support React 19
