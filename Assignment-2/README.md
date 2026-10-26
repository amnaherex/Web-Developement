# Assignment 2 — Static, Responsive Pages

## Reference site

- **Name:** AS Colour — Premium Blanks
- **URL:** https://www.ascolour.com
- **Screenshots of the reference:**

| Homepage | Product page |
|---|---|
| ![AS Colour homepage](screenshots/reference-home.png) | ![AS Colour product page](screenshots/reference-product.png) |

## What's here

| File | Purpose |
|---|---|
| `index.html` | Homepage / product listing — navbar with cart icon, hero, category tiles, 8-card product grid, footer |
| `product.html` | Product detail page — Wo's Organic Collegiate Tank (image, name, price, description, colour/size pickers, quantity selector, Add to Cart) |
| `tailwind.config.js` | Tailwind config (brand colours `gold`, `bronze`, `soft`; Helvetica font stack) |
| `src/input.css` | Tailwind source (`@tailwind` directives) |
| `css/output.css` | Compiled Tailwind CSS that both pages link to |
| `images/` | Product and site imagery |
| `screenshots/` | Reference screenshots + my pages at 375px / 768px / 1440px |
| `completion.pdf` | Completion report with requirement checklist and screenshots |

## Framework: Tailwind CSS v3

Tailwind handles all layout and the navbar:

- **Navbar:** `flex` / `justify-between`; desktop links show at `lg:`, and below that a hamburger opens the menu with a hidden checkbox and `peer-checked:flex` (no JavaScript).
- **Product grid:** `flex flex-wrap` with cards at `w-1/2 md:w-1/3 lg:w-1/4` (2 / 3 / 4 per row).
- **Product page:** `flex-col lg:flex-row` (image stacks above the details on phone and tablet, sits beside them on desktop).
- **Breakpoints used:** default (phone, about 375px), `md:` (768px, tablet), `lg:` (1024px+, desktop).

## No JavaScript

- Colour and size pickers are radio inputs styled with Tailwind `peer-checked:`.
- Accordions use native `<details>` / `<summary>` with `group-open:`.
- Quantity uses `<input type="number">`.
- The "Add to Cart" buttons and the cart icon are not functional yet, as the brief specifies.

## Run / rebuild

Open `index.html` in a browser. No build is needed, because `css/output.css` is already compiled.

To rebuild after editing classes:

```bash
npm install -D tailwindcss@3
npx tailwindcss -i src/input.css -o css/output.css --minify
```

Use `--watch` instead of `--minify` while developing.
