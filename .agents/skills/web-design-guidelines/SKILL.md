---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Vercel Web Interface Guidelines.

## How It Works

1. Read the specified target files (or prompt user for files/pattern).
2. Check against all rules in the guidelines below.
3. Output findings concisely in `file:line` format with high signal-to-noise.

---

## Guidelines Checklist

### 1. Accessibility (a11y)
- Icon-only buttons must have `aria-label` or screen-reader text.
- Form controls need `<label>` with `htmlFor` or `aria-label`.
- Interactive elements must support keyboard navigation (`onKeyDown` / `onKeyUp`).
- Use `<button>` for actions and `<a>` / `<Link>` for navigation (never `<div onClick>`).
- Images must have `alt` attributes (use `alt=""` only for purely decorative images).
- Decorative icons need `aria-hidden="true"`.
- Async status updates, toasts, and live validations need `aria-live="polite"`.
- Use semantic HTML (`<main>`, `<nav>`, `<header>`, `<article>`, `<table>`) before custom ARIA roles.
- Headings must follow strict hierarchical order `<h1>`–`<h6>`.

### 2. Focus States
- Interactive elements require visible focus rings (e.g., `focus-visible:ring-2`).
- Never use `outline-none` / `outline: none` without a clear focus ring replacement.
- Prefer `:focus-visible` over `:focus` to avoid distracting focus rings on click.
- Use `:focus-within` for compound inputs and grouped controls.
- Sticky headers, overlays, and modal sheets must not obscure active focused elements.

### 3. Forms & Inputs
- Inputs should have `autoComplete` and meaningful `name` attributes.
- Use proper input types (`email`, `tel`, `url`, `number`) and `inputMode`.
- Never block paste operations (`onPaste` + `preventDefault`).
- Disable spellcheck on usernames, emails, and codes (`spellCheck={false}`).
- Checkbox and radio label + control should share a single comfortable hit target.
- Buttons should remain enabled until request starts; show spinner during loading.
- Inline validation errors adjacent to fields; focus the first error on failed submit.
- Warn users before navigating away with unsaved form changes (`beforeunload`).

### 4. Animation & Motion
- Always honor `prefers-reduced-motion` media queries.
- Animate `transform` and `opacity` only (GPU/compositor-friendly).
- Avoid `transition: all` — explicitly specify animated CSS properties.
- Ensure animations are interruptible and respond immediately to new input.
- Decorative loops must pause or disable under reduced motion settings.

### 5. Typography & Content
- Use proper typographic symbols: ellipsis `…`, curly quotes `“` `”`, non-breaking spaces `&nbsp;`.
- Loading states should end with ellipsis: `"Loading…"`, `"Saving…"`.
- Number columns and counters should use `font-variant-numeric: tabular-nums`.
- Use `text-wrap: balance` or `text-wrap: pretty` on headers to eliminate orphan words.
- Prevent overflow: use `truncate`, `line-clamp-*`, or `break-words`.
- Flex children need `min-w-0` to enable proper text truncation.
- Handle empty states gracefully — avoid rendering empty boxes or broken placeholders.

### 6. Images & Performance
- All `<img>` tags require explicit `width` and `height` (or aspect-ratio) to eliminate CLS (Cumulative Layout Shift).
- Below-the-fold media must use `loading="lazy"`.
- Critical hero / above-the-fold media must have `priority` or `fetchPriority="high"`.
- Virtualize large lists (>50 items) using virtual scrollers.
- Avoid layout thrashing — batch DOM measurements and mutations.
