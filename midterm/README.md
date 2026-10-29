# Midterm

## My personal numbers

- Roll number: FA24-BCS-017
- N = 17
- Breakpoint BP = 600 + 17 = **617px**
- Accent hue H = (17 × 7) mod 360 = **119°**, accent colour = `hsl(119, 70%, 45%)`
- K = (17 mod 3) + 3 = **5**

## Task 1 — Mega-menu (HTML + CSS only)

- **Files changed:** `index.html`, `product.html` (header only), `tailwind.config.js` (added `bp: '617px'`), `css/output.css` (rebuilt).
- **617px and wider:** "Shop by Category" in the main `<nav>` opens a full-width panel with **5 columns** (K = 5), each with a heading and a list of 4+ links.
  - Opens on hover (`group-hover`) and on keyboard Tab (`group-focus-within`, i.e. `:focus-within`).
  - Stays open while the mouse moves into the panel: the panel is inside the same `group`, and there's no gap between the trigger and the panel.
  - Closes when the mouse or focus leaves the group.
  - The panel is `absolute` (doesn't push content down), and the header is `relative z-50` (sits above cards, badges and the sticky product details).
- **Below 617px:** inside the existing ☰ menu, the same 5 groups are `<details>`/`<summary>` accordions: closed by default, each opening on its own.
- **No JavaScript:** the ☰ menu is a CSS checkbox (`peer-checked`).
- **Tested at:** 375px, 617px and 1280px. There's no sideways scroll at any width.
