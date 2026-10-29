# Midterm

## My personal numbers

- Roll number: FA24-BCS-017
- N = 17
- Breakpoint BP = 600 + 17 = **617px**
- Accent hue H = (17 × 7) mod 360 = **119°**, accent colour = `hsl(119, 70%, 45%)`
- K = (17 mod 3) + 3 = **5**

## Task 1 — Mega-menu (HTML + CSS only)

- **Files changed:** `midterm/index.html`, `midterm/product.html` (header only), `midterm/tailwind.config.js` (added `bp: '617px'`), `midterm/css/output.css` (rebuilt).
- **617px and wider:** "Shop by Category" in the main `<nav>` opens a full-width panel with **5 columns** (K = 5), each with a heading and a list of 4+ links.
  - Opens on hover (`group-hover`) and on keyboard Tab (`group-focus-within`, i.e. `:focus-within`).
  - Stays open while the mouse moves into the panel: the panel is inside the same `group`, and there's no gap between the trigger and the panel.
  - Closes when the mouse or focus leaves the group.
  - The panel is `absolute` (doesn't push content down), and the header is `relative z-50` (sits above cards, badges and the sticky product details).
- **Below 617px:** inside the existing ☰ menu, the same 5 groups are `<details>`/`<summary>` accordions: closed by default, each opening on its own.
- **No JavaScript:** the ☰ menu is a CSS checkbox (`peer-checked`).
- **Tested at:** 375px, 617px and 1280px. There's no sideways scroll at any width.

## Task 2 — Checkout form (HTML5 validation + CSS only)

- **Files changed:** `midterm/checkout.html` (new), `midterm/index.html` and `midterm/product.html` (cart icon links to `checkout.html`), `midterm/tailwind.config.js` (scans `checkout.html`), `midterm/css/output.css` (rebuilt).
- **Form:** two `<fieldset>`s with `<legend>`s:
  - **Contact:** name, email, phone
  - **Delivery:** address, city `<select>`, date

  Every input has a `<label for>` matching its `id`.
- **Phone:** `pattern="03[0-9]{2}-[0-9]{7}"`.
- **Date:** `min="2026-10-29"` (exam date) and `max="2026-11-15"` (exam date + N = 17 days).
- **Errors:** Tailwind `[&:user-invalid]` gives the red border, and `peer-[:user-invalid]` shows the message. Both appear only after the user has interacted with a field, never on page load.
- **Layout (CSS Grid):**
  - From 617px, the fieldsets sit side by side, with labels in a left column (`grid-cols-[7rem_minmax(0,1fr)]`).
  - Below 617px, there's one column with labels above inputs.
  - The submit button is full width at every size.
