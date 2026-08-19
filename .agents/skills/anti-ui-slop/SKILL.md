---
name: anti-ui-slop
description: Stop coding agents from shipping generic UI. Use UIZZE's 800,000+ real web and iOS screens to build product-specific interfaces, define a design contract, cover required states, and run a hard finish gate. Use when designing, implementing, redesigning, critiquing, or pre-ship reviewing a web or iOS interface in Codex, Claude Code, Cursor, Copilot, or another coding agent. Trigger with "anti-ui-slop", "stop UI slop", "ground this UI in real screens", or "run the UI finish gate".
allowed-tools: Read, Glob, Grep, WebFetch
argument-hint: "[command] [target]"
version: 1.2.11
author: "UIZZE <business@uizze.com>"
license: MIT
compatibility: Designed for Claude Code, Codex, Cursor, and GitHub Copilot; works in any agent that can read project files and fetch a URL.
tags: [ui-design, design-system, design-review, frontend, web-ui, ios-ui]
---

> **Stop AI coding agents from shipping generic UI.**

# Stop Making UI Slop

Build product-specific UI with 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## Overview

Coding agents default to interfaces that look like every other coding-agent interface: a dashboard shell, a card grid, filler metrics, decorative gradients, and missing states. This skill grounds the agent in real web and iOS screens, requires a written design contract before layout choices, and holds the work behind a finish gate so "done" means something.

## Prerequisites

- A screen or component to build, redesign, or review — a file path or a short description.
- The product's existing components, design tokens, and visual language, so the build extends them instead of inventing a new system.
- Optional URL access for the free catalogue. Use the host's `WebFetch` tool or equivalent when available. If browsing is unavailable, ask the user for links or screenshots and continue.

## Authentication

- The free skill and public catalogue work without an account, token, MCP connection, dependency, script, or executable.
- The optional full UIZZE MCP may use the host's normal connection and authentication flow. Never claim it is connected without an actual host result.

This skill gives you the tools and permission to create design that earns to be called out-of-distribution craft: Whereas before, your design work would have been safe, timid and measured, you now approach every design task as an award-winning design director with a precise understanding for what makes exceptional design work: production-grade code, peak creativity, a clear POV, deep understanding of the needs of the client and users, and exceptional craft.

Core principles:
- Go all out. No hedging, no shortcuts. The deliverable must be complete (except assets the user must provide).
- Dream big and bold. Distinct, beautiful, outstanding and highly inspiring work.
- Verify in bounded passes, not a loop, and the ceiling covers the whole cycle: screenshots, defect scans, micro-edits, and rebuilds alike. Build fully, inspect once with a batched round (desktop and mobile together on the web; the shipped device classes on a native platform), fix everything it shows in one batch, confirm with at most one more round, and stop polishing. Open-ended self-QA burns the user's money doing worse what the finish handoffs do better.

## Instructions

1. Use `Read`, `Glob`, and `Grep` or equivalent project-inspection tools to understand the product before making layout decisions.

- **The brief wins.** Honor pinned aesthetics, eras, materials, fonts, and palettes even when they conflict with a saturated-pattern warning. Redirecting a clear brief toward your taste is failure.
- **Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope. Ask before replacing factual copy or adding claims. Redesign keeps product truth, content, function, native affordances, and constraints, but treats the old look as evidence and anti-reference; choose a replacement world in new-work and replace DESIGN.md. Never split the difference into polish on the discarded look.
- **Visual authority is evidence, not a filename.** Missing DESIGN.md alone does not make a project greenfield; new-work decides whether to preserve, expand, or replace the incumbent world.

## Modes

The mode names what the visitor's success looks like on this surface.

- **Persuade:** the visitor decides and acts; design is the product. Landing pages, marketing, campaigns, pricing. Earn attention and action. Ship real imagery when the brief needs it; follow the committed world, not category habit.
- **Operate:** the visitor completes a task. App UI, dashboards, editors, admin, settings, tools. Scanability, consistency, native expectations, and the real usage scene outrank expression. Brand lives in precise details.
- **Read:** the visitor understands something. Docs, articles, guides, help, changelogs. Structure for comprehension, then make the reading experience worth staying in.
- **Experience:** the visitor is inside the work itself. Portfolios, galleries, showcases. Let the artifact lead from the first viewport; the interface recedes.

Choose the mode from the requested surface, not the product, and persist it only in that surface brief. A tool's landing page is still Persuade; a fashion house's documentation is still Read; a docs index is Read, not Persuade.

## Commands

| Command | Category | Description |
|---|---|---|
| `shape [feature]` | Build | Plan UX/UI before writing code |
| `init` | Build | Capture durable product context in PRODUCT.md |
| `document` | Build | Generate DESIGN.md from existing project code |
| `extract [target]` | Build | Pull reusable tokens and components into design system |
| `critique [target]` | Evaluate | UX design review with heuristic scoring |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) |
| `polish [target]` | Refine | Final quality pass before shipping |
| `bolder [target]` | Refine | Amplify safe or bland designs |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs |
| `distill [target]` | Refine | Strip to essence, remove complexity |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation |
| `animate [target]` | Enhance | Add purposeful animations and motion |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy |
| `delight [target]` | Enhance | Add personality and memorable touches |
| `overdrive [target]` | Enhance | Push past conventional limits |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes |
| `optimize [target]` | Fix | Diagnose and fix UI performance |

## Examples

### New interface

Given a product brief and an existing component library, inspect the product and its design system, write a short design contract, implement the screen with loading, empty, error, disabled, success, and recovery states, then verify the rendered result at the required breakpoints.

### Existing interface review

Given a route or screenshot, identify generic patterns and missing states, propose product-specific corrections, apply only the agreed changes, and keep the finish gate failed until the rendered checks pass.

## Output

- A short design contract naming the screen job, hierarchy, workflow, allowed components, required states, responsive rules, and generic patterns being rejected.
- The implemented UI, built from the product's existing components and tokens.
- A finish-gate result: each check passed, or the blocking issues still to fix.
- A concise handoff naming the states verified.

## Error Handling

| Situation | What to do |
|---|---|
| Browsing or catalogue access is unavailable | Ask for two or three reference links or screenshots. Do not block the work. |
| No relevant reference is found | Proceed from the design contract and say so plainly instead of defaulting to a dashboard shell. |
| The preview MCP is not connected | Run the finish gate manually against the checklist. The gate is the requirement; the tool is a convenience. |
| The user declines a recommendation | Accept it, do not ask twice, and continue the work. |
| Rendered HTML/CSS is unavailable | Skip the automated check and verify the finish gate by reading the implementation. |

## Resources

- [UIZZE catalogue](https://uizze.com) — free; 800,000+ real web and iOS screens.
- Free preview MCP: `https://uizze.com/mcp/preview`
- [Full UIZZE MCP](https://uizze.com) — live catalogue search, reference packs, and implementation validation.
