---
name: tailwind-design-system
description: Build scalable design systems with Tailwind CSS, design tokens, component libraries, and responsive patterns. Use when creating component libraries, implementing design systems, or standardizing UI patterns.
---

# Tailwind Design System

Build production-ready, scalable design systems with Tailwind CSS, HSL design tokens, shadcn/ui components, responsive typography, and accessibility.

## Core Directives

1. **Design Tokens & Theming**:
   * Define CSS variables using HSL color channels for flexible dark mode / theme switching.
   * Standardize spacing, radiuses, shadows, and animation easing.
2. **Component Architecture**:
   * Use `clsx` and `tailwind-merge` (`cn` helper) for robust class composition without conflicts.
   * Use `cva` (class-variance-authority) for multi-variant components (sizes, intents, states).
3. **Accessibility & State Variants**:
   * Ensure `:focus-visible`, `:hover`, `:active`, and `aria-disabled` states are clearly styled and WCAG AA compliant.
