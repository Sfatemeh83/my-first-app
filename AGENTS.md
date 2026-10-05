# NEXAWEB Perfume
- Vite + React + TS + Tailwind 3 SPA. Run: `docker compose -f docker-compose.base44.yml up -d` (preview on :3000). No backend/secrets.
- Product imagery is SVG (`src/components/Bottle.tsx`, `Scene.tsx`) — replace with `<img>` photos when available.
- Cart/wishlist persist in localStorage (`nx-cart`, `nx-wish`); checkout/contact/newsletter are front-end demos.
- Type check: `docker compose -f docker-compose.base44.yml exec web npx tsc --noEmit`
