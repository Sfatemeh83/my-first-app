# Noir Gourmet — Restaurant Website

## Stack
- Vite + React 18 (JavaScript, JSX)
- Single-page app, no routing library (anchor-based navigation)
- Google Fonts: Cormorant Garamond (serif headings) + Inter (sans body)
- No external dependencies beyond React

## Project Structure
- `src/App.jsx` — root component, IntersectionObserver for scroll reveals
- `src/index.css` — complete design system (CSS variables, all component styles, responsive breakpoints)
- `src/components/` — one file per section: Header, Hero, SignatureDish, FeaturedMenu, FullMenu, About, Reservation, Footer
- `public/images/` — food photographs extracted from the reference screenshot (hero burger, feature dish, 4 gallery dishes)

## Running
```
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000 (mapped to Vite dev server on 5173).

## Key Details
- Images were cropped from the reference screenshot and upscaled 2x with sharpening. They are low-source-resolution crops; replacing with original high-res photos would improve fidelity.
- The reservation form is front-end only (no backend). It validates and shows a success message on submit.
- Menu filtering is client-side state.
- Hero has a functional 2-slide carousel with working prev/next arrows.
- Mobile nav is a slide-in panel with overlay.
- All sections use `id` attributes for anchor navigation: #home, #signature, #featured, #menu, #about, #reservation.
